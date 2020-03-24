import React from 'react'
import { Document } from '@bdp-rps/react-pdf-renderer'

import Song from './Song'

const songs = [
  'Moselfahrt',
  'Die Tippelei',
  'Abends',
  'Abends treten Elche',
  'Die Sandbank',
  'Am Ural',
  'Kanadischer Herbst',
  'Das Wochenlied',
  'Andre, die das Land',
  'Nicht nur nebenbei',
  'Auf vielen Straßen',
  'Fiddlers Green',
  'Freundschaft',
  'Hoch im Norden',
  'Winterlied',
  'An Land',
  'In die Sonne',
  'Die Weber',
  'Die Ballade vom roten Haar',
  'Molly Malone',
  'Sturm und Drang',
  'Joerg von Frundsberg',
  'Piratenlied',
  'Nehmt Abschied Brueder',
  'Ziehharmonika',
  'Nordwaerts',
]

const songData = songs.map(song => require('../songs/' + song + '.js').default)

const normalizeContent = content =>
  content.replace(/{[a-z0-9]}/gi, '').toLowerCase()

export default () => (
  <Document>
    {songData
      .sort((a, b) => {
        const tA = normalizeContent(a.content)
        const tB = normalizeContent(b.content)

        return tA > tB ? 1 : -1
      })
      .map(data => (
        <Song key={data.title} {...data} />
      ))}
  </Document>
)
