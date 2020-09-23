import { exec } from 'child_process'

import songs from '../src/songs/index.json'

console
songs
  .filter(s => s !== 'index.json')
  .forEach(song =>
    exec('yarn build:song ' + song, (error, stdout, stderr) => {
      if (error !== null) {
        console.error('Failed building ' + song)
      } else {
        console.log('Successfully built ' + song)
      }
    })
  )
