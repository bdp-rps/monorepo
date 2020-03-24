import React from 'react'
import { Document } from '@bdp-rps/react-pdf-renderer'

import Song from './Song'

import songs from '../index'

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
