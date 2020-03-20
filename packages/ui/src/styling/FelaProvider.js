import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { RendererProvider, ThemeProvider, RendererContext } from 'react-fela'
import getFelaRenderer from './getFelaRenderer'

const clientRenderer = getFelaRenderer()

export default function FelaProvider({
  renderer = clientRenderer,
  theme,
  children,
}) {
  const contextRenderer = useContext(RendererContext)

  if (contextRenderer) {
    return children
  }

  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  )
}
