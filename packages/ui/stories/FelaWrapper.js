import React from 'react'
import FelaProvider from '../src/styling/FelaProvider'
import theme from '../src/themes/light'

export default function FelaWrapper({ children }) {
  return <FelaProvider theme={theme}>{children}</FelaProvider>
}
