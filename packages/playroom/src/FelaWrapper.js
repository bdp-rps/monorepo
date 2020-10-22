import React from 'react'

import { StyleProvider } from '@bdp-rps/ui'
import theme from '@bdp-rps/ui/lib/themes/light'

export default function FelaWrapper({ children }) {
  return <StyleProvider theme={theme}>{children}</StyleProvider>
}
