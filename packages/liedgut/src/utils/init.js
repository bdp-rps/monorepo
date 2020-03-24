import path from 'path'
import { Font } from '@bdp-rps/react-pdf-renderer'

Font.register({
  family: 'Bell Gothic',
  src: path.join(__dirname, '../fonts/Bell_Gothic.ttf'),
})

Font.register({
  family: 'Bell Gothic Bold',
  src: path.join(__dirname, '../fonts/Bell_Gothic_Bold.ttf'),
  fontWeight: 'bold',
})
