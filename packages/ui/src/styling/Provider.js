import React from 'react'
import { StyleProvider, ThemeProvider, ConfigProvider } from 'ambrose'

import createStyleRenderer from './createStyleRenderer'

import config from './config'

const clientRenderer = createStyleRenderer()

export default function Provider({
  children,
  renderer = clientRenderer,
  theme,
}) {
  return (
    <ConfigProvider config={config}>
      <StyleProvider renderer={renderer}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyleProvider>
    </ConfigProvider>
  )
}
