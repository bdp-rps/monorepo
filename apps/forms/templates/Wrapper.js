import React from 'react'
import { ThemeProvider, ConfigProvider, Text } from '@lorren-js/core'
import { Font } from '@react-pdf/renderer'

import theme from '../utils/theme'

Font.registerHyphenationCallback((word) => [word])

export default function Wrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
