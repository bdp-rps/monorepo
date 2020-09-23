import React from 'react'

import { FelaProvider } from '@bdp-rps/ui'
import theme from '@bdp-rps/ui/lib/themes/light'

export default function FelaWrapper({ children }) {
  return <FelaProvider theme={theme}>{children}</FelaProvider>
}
