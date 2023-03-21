const fs = require('fs')

fs.readdir('./src/songs', (err, files) => {
  if (err) {
    console.error(err)
  }

  const songs = files
    .filter((f) => !f.startsWith('index.js'))
    .map((f) => f.replace('.json', ''))

  fs.writeFile('./src/songs/index.json', JSON.stringify(songs), (err) => {
    if (err) {
      console.error(err)
    }

    console.log('Successfully build liedgut index.')
  })

  fs.writeFile(
    './src/songs/index.js',
    [
      songs
        .map((song, index) => `import Song${index} from "./${song}.json"`)
        .join('\n'),
      'export default {',
      songs.map((song, index) => `"${song}": Song${index}`).join(',\n'),
      '}',
    ].join('\n'),
    (err) => {
      if (err) {
        console.error(err)
      }

      console.log('Successfully build liedgut export.')
    }
  )
})
