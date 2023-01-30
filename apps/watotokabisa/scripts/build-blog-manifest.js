import fs from 'fs'

const blogDir = './pages/blog/'

function getFullTime({ year, month, day }) {
  return new Date([year, month, day].join('-')).getTime()
}

fs.readdir(blogDir, (err, files) => {
  if (err) {
    console.error(error)
  }

  const manifest = []

  files.forEach((file) => {
    const data = fs.readFileSync(blogDir + file, 'utf-8')

    const post = eval(
      '(' + data.split('export default')[0].split('meta = ')[1] + ')'
    )

    manifest.push({ ...post, id: file.replace('.mdx', '') })
  })

  const sorted = manifest.sort((a, b) =>
    getFullTime(a.date) > getFullTime(b.date) ? -1 : 1
  )

  fs.writeFile(
    './public/blog-manifest.json',
    JSON.stringify(manifest, null, 2),
    (err) => {
      if (err) {
        console.error(err)
      }

      console.log('Blog Manifest has been updated.')
    }
  )
})
