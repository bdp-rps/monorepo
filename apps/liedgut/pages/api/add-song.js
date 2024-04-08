import { Octokit } from 'octokit'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const songPath = 'packages/liedgut/src/songs/'
const extension = '.json'

import escapeSongName from '../../utils/escapeSongName'

const hash = function (s) {
  /* Simple hash function. */
  var a = 1,
    c = 0,
    h,
    o
  if (s) {
    a = 0
    /*jshint plusplus:false bitwise:false*/
    for (h = s.length - 1; h >= 0; h--) {
      o = s.charCodeAt(h)
      a = ((a << 6) & 268435455) + o + (o << 14)
      c = a & 266338304
      a = c !== 0 ? a ^ (c >> 21) : a
    }
  }

  return a.toString(36)
}

const repo = {
  owner: 'bdp-rps',
  repo: 'monorepo',
}

async function addSong(
  song,
  { submitter, submitterMail, submitterContent, change }
) {
  const fileName = escapeSongName(song.title)
  const submitDate = Date.now()

  const { changes, ...songData } = song
  const branchName =
    fileName +
    '_' +
    hash(JSON.stringify(songData)) +
    '_' +
    hash(songData.content)

  const commitMessage = (change ? 'update ' : 'add ') + fileName + extension
  const body = `${submitterContent}

Art: ${change ? 'Änderung' : 'Neu hinzugefügt'}
Datum: ${new Date(submitDate)}
Eingereicht von: ${submitter} (${submitterMail})`

  const file = JSON.stringify(
    {
      ...song,
      changes: [
        ...(song.changes || []),
        {
          date: submitDate,
          name: submitter,
          mail: submitterMail,
          type: change ? 'update' : 'create',
          content: submitterContent,
        },
      ],
    },
    null,
    2
  )

  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
  })

  // Get the current "master" reference, to get the current master's sha
  const ref = await octokit.rest.git.getRef({
    ...repo,
    ref: 'heads/master',
  })

  // Get the tree associated with master, and the content
  // of the template file to open the PR with.
  const tree = await octokit.rest.git.getTree({
    ...repo,
    tree_sha: ref.data.object.sha,
  })

  // Create a new blob with the existing template content
  const blob = await octokit.rest.git.createBlob({
    ...repo,
    content: file,
    encoding: 'utf8',
  })

  const newTree = await octokit.rest.git.createTree({
    ...repo,
    tree: [
      {
        path: songPath + fileName + extension,
        sha: blob.data.sha,
        mode: '100644',
        type: 'blob',
      },
    ],
    base_tree: tree.data.sha,
  })

  // Create a commit and a reference using the new tree
  const newCommit = await octokit.rest.git.createCommit({
    ...repo,
    message: commitMessage,
    parents: [ref.data.object.sha],
    tree: newTree.data.sha,
  })

  await octokit.rest.git.createRef({
    ...repo,
    ref: `refs/heads/${branchName}`,
    sha: newCommit.data.sha,
  })

  const pr = await octokit.rest.pulls.create({
    ...repo,
    title: song.title,
    body,
    head: branchName,
    base: 'master',
  })

  if (pr.status === 201) {
    return {
      success: true,
    }
  }

  return {
    error: 'Es ist etwas schief gegangen.',
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(404)

  const { song, ...meta } = req.body

  const { success, error } = await addSong(song, meta)

  if (success) {
    return res.status(200).json({ status: 'done' })
  } else {
    return res.status(500).json({ status: 'error', error })
  }
}
