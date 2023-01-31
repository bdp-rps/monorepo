import React from 'react'
import ReactPDF, { render, Document } from '@bdp-rps/react-pdf-renderer'

import '../src/utils/init'

import Song from '../src/templates/Song'

const fileName = process.argv[2]

let data

try {
  data = require('../src/songs/' + fileName + '.json')
} catch (e) {
  if (!data) {
    console.error('A song with this name does not exist!')
    process.exit(1)
  }
}

render(
  <Document>
    <Song {...data} />
  </Document>,
  `${__dirname}/../dist/${fileName}.pdf`
)
