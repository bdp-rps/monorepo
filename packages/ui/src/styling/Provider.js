import React from 'react'
import { StyleProvider, ThemeProvider, ConfigProvider } from '@bdp-rps/ambrose'

import createStyleRenderer from './createStyleRenderer'

import defaultConfig from './config'

const clientRenderer = createStyleRenderer()

export default function Provider({
  config = {},
  children,
  renderer = clientRenderer,
  theme,
}) {
  return (
    <ConfigProvider config={{ ...defaultConfig, ...config }}>
      <StyleProvider renderer={renderer}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyleProvider>
    </ConfigProvider>
  )
}
