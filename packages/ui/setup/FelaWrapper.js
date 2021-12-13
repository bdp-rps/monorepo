import React from 'react'
import { StyleProvider, ThemeProvider, ConfigProvider } from 'ambrose'

import createStyleRenderer from '../src/styling/createStyleRenderer'

const renderer = createStyleRenderer()

export default function FelaWrapper({ children }) {
  renderer.renderFont('Aleo', ['/fonts/Aleo-Regular.ttf'], {
    fontWeight: 400,
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-Italic.ttf'], {
    fontWeight: 400,
    fontStyle: 'italic',
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-Bold.ttf'], {
    fontWeight: 700,
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-BoldItalic.ttf'], {
    fontWeight: 700,
    fontStyle: 'italic',
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-Light.ttf'], {
    fontWeight: 200,
  })
  renderer.renderFont('Aleo', ['/fonts/Aleo-LightItalic.ttf'], {
    fontWeight: 200,
    fontStyle: 'italic',
  })

  renderer.renderFont('Immenhausen', ['/fonts/Immenhausen-Regular.ttf'])

  return (
    <Provider theme="bdp" renderer={renderer}>
      {children}
    </Provider>
  )
}
