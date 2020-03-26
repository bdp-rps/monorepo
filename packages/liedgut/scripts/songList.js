const fs = require('fs')

fs.readdir('./src/songs', (err, files) => {
  if (err) {
    console.error(err)
  }

  fs.writeFile(
    './src/index.js',
    'export default ' + JSON.stringify(files.map(f => f.replace('.json', ''))),
    err => {
      if (err) {
        console.error(err)
      }

      console.log('Successfully build liedgut index.')
    }
  )
})
