import React from 'react'
import { Provider, createStyleRenderer } from '@bdp-rps/ui'
import { LayerContextProvider } from 'react-scroll-blocking-layers'
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
  {
    selector: 'body',
    style: {
      overflowY: 'scroll',
    },
  },
]

const clientRenderer = createStyleRenderer()

export default function AppWrapper({ renderer = clientRenderer, children }) {
  if (renderer) {
    arrayEach(staticStyle, ({ selector, style }) =>
      renderer.renderStatic(style, selector)
    )

    renderer.renderFont('Amatic', ['/fonts/AmaticSC-Regular.ttf'], {
      fontWeight: 400,
    })
    renderer.renderFont('Amatic', ['/fonts/AmaticSC-Bold.ttf'], {
      fontWeight: 700,
    })

    renderer.renderFont('Assistant', ['/fonts/Assistant-Bold.ttf'], {
      fontWeight: 700,
    })

    renderer.renderFont('Assistant', ['/fonts/Assistant-Light.ttf'], {
      fontWeight: 200,
    })

    renderer.renderFont('Assistant', ['/fonts/Assistant-Regular.ttf'], {
      fontWeight: 400,
    })

    renderer.renderFont('Immenhausen', ['/fonts/Immenhausen-Regular.ttf'])
  }

  return (
    <Provider theme="kabisa" renderer={renderer}>
      <LayerContextProvider>{children}</LayerContextProvider>
    </Provider>
  )
}
