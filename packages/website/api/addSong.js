import OneGraphAuth from 'onegraph-auth'
import fetch from 'node-fetch'
import escapeSongName from '@bdp-rps/liedgut/lib/utils/escapeSongName'

const appId = 'ebb641c9-5640-42ed-97ba-7e4339caa779'
const docId = '4d60cc25-5995-4f10-a7c7-2475538dbb53'
const songPath = 'packages/liedgut/src/songs/'
const extension = '.json'

let auth
if (typeof window !== 'undefined') {
  auth = new OneGraphAuth({
    appId,
  })
}

// This setup is only needed once per application
async function fetchOneGraph(auth, operationsDoc, operationName, variables) {
  const result = await fetch(
    'https://serve.onegraph.com/graphql?app_id=' + appId,
    {
      method: 'POST',
      body: JSON.stringify({
        doc_id: docId,
        variables: variables,
        operationName: operationName,
      }),
    }
  )

  return await result.json()
}

const operationsDoc = `
query GetFileSha($repoName: String!, $repoOwner: String!, $branchAndFilePath: String!) {
  gitHub {
    repository(name: $repoName, owner: $repoOwner) {
      object_: object(expression: $branchAndFilePath) {
        ... on GitHubBlob {
          oid
          text
        }
      }
    }
  }
}

mutation CreateBranchMutation($repoOwner: String!, $repoName: String!, $branchName: String!) {
  gitHub {
    createBranch_oneGraph(input: {branchName: $branchName, repoName: $repoName, repoOwner: $repoOwner}) {
      ref_: ref {
        name
        id
      }
    }
  }
}

mutation UpdateFileMutation($repoOwner: String!, $repoName: String!, $branchName: String!, $path: String!, $message: String!, $content: String!, $sha: String) {
  gitHub {
    createOrUpdateFileContent_oneGraph(input: {message: $message, path: $path, repoName: $repoName, repoOwner: $repoOwner, branchName: $branchName, plainContent: $content, existingFileSha: $sha}) {
      commit {
        message
      }
    }
  }
}

mutation CreatePullRequestMutation($repoId: ID!, $title: String!, $headRefName: String!, $baseRefName: String!, $body: String!) {
  gitHub {
    createPullRequest(input: {title: $title, headRefName: $headRefName, baseRefName: $baseRefName, repositoryId: $repoId, maintainerCanModify: true, body: $body}) {
      pullRequest {
        url
        id
        number
        title
        permalink
      }
    }
  }
}
`

async function fetchGetFileSha(auth, branchAndFilePath) {
  return fetchOneGraph(auth, operationsDoc, 'GetFileSha', {
    branchAndFilePath: branchAndFilePath,
  })
}

async function executeCreateBranchMutation(auth, branchName) {
  return fetchOneGraph(auth, operationsDoc, 'CreateBranchMutation', {
    branchName: branchName,
  })
}

export async function executeUpdateFileMutation(
  auth,
  branchName,
  path,
  message,
  content,
  sha
) {
  return fetchOneGraph(auth, operationsDoc, 'UpdateFileMutation', {
    branchName: branchName,
    path: path,
    message: message,
    content: content,
    sha: sha,
  })
}

async function executeCreatePullRequestMutation(
  auth,
  title,
  headRefName,
  body
) {
  return fetchOneGraph(auth, operationsDoc, 'CreatePullRequestMutation', {
    title: title,
    headRefName: headRefName,
    body: body,
  })
}

export default async function addSong(
  song,
  { submitter, submitterMail, change }
) {
  const fileName = escapeSongName(song.title)
  const branchName = fileName
  const submitDate = Date.now()

  const commitMessage = (change ? 'update ' : 'add ') + fileName + extension
  const body = `${change ? 'Änderung: ' : ''}${song.content}
  
  Art: ${change ? 'Änderung' : 'Neu hinzugefügt'}
  Datum: ${new Date(submitDate)}
  Submitted by ${submitter} (${submitterMail})`

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
        },
      ],
    },
    null,
    2
  )

  const createBranch = await executeCreateBranchMutation(auth, branchName)

  if (createBranch.errors) {
    return {
      error: 'Dieser Titel wurde bereits vor kurzem eingereicht.',
      success: false,
    }
  }

  const fetchSha = await fetchGetFileSha(
    auth,
    branchName + ':' + songPath + fileName + extension
  )

  const sha = fetchSha.data.gitHub.repository.object_
    ? fetchSha.data.gitHub.repository.object_.oid
    : null

  const updateFile = await executeUpdateFileMutation(
    auth,
    branchName,
    songPath + fileName + extension,
    commitMessage,
    file,
    sha
  )

  if (updateFile.errors) {
    return {
      error:
        'Beim hinzufügen ist etwas schief gelaufen. Bitte versuche es erneut oder kontaktiere uns.',
      success: false,
    }
  }

  const createPullRequest = await executeCreatePullRequestMutation(
    auth,
    song.title,
    branchName,
    body
  )

  if (createPullRequest.errors) {
    return {
      error:
        'Beim hinzufügen ist etwas schief gelaufen. Bitte versuche es erneut oder kontaktiere uns.',
      success: false,
    }
  }

  return {
    success: true,
  }
}
