import React from 'react'

import { Provider } from '@bdp-rps/ui'

export default function FelaWrapper({ children, theme }) {
  return <Provider theme={theme}>{children}</Provider>
}
