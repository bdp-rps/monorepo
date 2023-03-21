const fs = require('fs')

const OPENING_REPEAT_SIGN = /(\|{1,2}\:|\/\/\:)/g
const CLOSING_REPEAT_SIGN = /(\:\|{1,2}|\/\/\:)/g
const APOSTROPHE_REGEX = /(’|‘| ́|„|“)/g

const normalizeContent = (content) =>
  content
    .replace(/ /g, ' ')
    .replace(APOSTROPHE_REGEX, "'")
    .replace(OPENING_REPEAT_SIGN, '/:')
    .replace(CLOSING_REPEAT_SIGN, ':/')

fs.readdir('./src/songs', (err, files) => {
  if (err) {
    console.error(err)
  }

  files
    .filter((f) => !f.startsWith('index.js'))
    .map((f) => {
      const song = require('../src/songs/' + f)

      song.content = normalizeContent(song.content)
      song.translation = song.translation || []
      song.alternativeTitle = song.alternativeTitle || ''

      fs.writeFile('./src/songs/' + f, JSON.stringify(song, null, 2), (err) => {
        if (err) {
          console.error(err)
        }

        console.log('Successfully normalized ' + f + '.')
      })
    })
})
