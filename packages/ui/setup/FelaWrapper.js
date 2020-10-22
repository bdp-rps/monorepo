import React from 'react'

import StyleProvider from '../src/styling/StyleProvider'
import theme from '../src/themes/light'

export default function FelaWrapper({ children }) {
  return <StyleProvider theme={theme}>{children}</StyleProvider>
}
