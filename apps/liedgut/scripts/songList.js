const fs = require('fs')

fs.readdir('./src/songs', (err, files) => {
  if (err) {
    console.error(err)
  }

  fs.writeFile(
    './src/songs/index.json',
    JSON.stringify(
      files.filter(f => f !== 'index.json').map(f => f.replace('.json', ''))
    ),
    err => {
      if (err) {
        console.error(err)
      }

      console.log('Successfully build liedgut index.')
    }
  )
})
