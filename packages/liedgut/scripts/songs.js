import { execSync } from 'child_process'

import songs from '../src/songs/index.json'

songs
  .filter(s => s !== 'index.json')
  .forEach(song => {
    try {
      execSync('yarn build:song ' + song)
      console.log('Successfully built ' + song)
    } catch (e) {
      console.error('Failed building ' + song)
    }
  })
