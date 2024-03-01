import * as React from 'react'
import { Provider, createStyleRenderer } from '@bdp-rps/ui'
import { arrayEach } from 'fast-loops'

const staticStyle = [
  {
    selector: '*',
    style: {
      margin: 0,
      padding: 0,
    },
  },
  {
    selector: 'html',
    style: {
      WebkitTextSizeAdjust: '100%',
    },
  },
  {
    selector: '#__next, html, body',
    style: {
      minHeight: '100vh',
    },
  },
]

const clientRenderer = createStyleRenderer()

export default function AppWrapper({ renderer = clientRenderer, children }) {
  const [activeOverlayCount, setActiveOverlayCount] = React.useState(0)

  if (renderer) {
    arrayEach(staticStyle, ({ selector, style }) =>
      renderer.renderStatic(style, selector)
    )
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
  }

  return (
    <Provider
      theme="bdp"
      config={{ activeOverlayCount, setActiveOverlayCount }}>
      {children}
    </Provider>
  )
}
