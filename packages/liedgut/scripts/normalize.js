const fs = require('fs')

const normalizeContent = (content) =>
  content
    .replace(/ /g, ' ')
    .replace(/’/g, "'")
    .replace(/‘/, "'")
    .replace(/ ́/g, "'")
    .replace(/„/g, '"')
    .replace(/“/g, '"')

fs.readdir('./src/songs', (err, files) => {
  if (err) {
    console.error(err)
  }

  files
    .filter((f) => f !== 'index.json')
    .map((f) => {
      const song = require('../src/songs/' + f)

      song.content = normalizeContent(song.content)
      song.translation = song.translation || []
      song.alternativeTitle = song.alternativeTitle || ''
      delete song.musicalKey

      fs.writeFile('./src/songs/' + f, JSON.stringify(song, null, 2), (err) => {
        if (err) {
          console.error(err)
        }

        console.log('Successfully normalized ' + f + '.')
      })
    })
})
