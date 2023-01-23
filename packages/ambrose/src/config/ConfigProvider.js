import React from 'react'
import { objectMergeDeep } from 'fast-loops'

import ConfigContext from './ConfigContext'
import defaultConfig from './defaultConfig'

export default function ConfigProvider({ config, children }) {
  const mergedConfig = objectMergeDeep({}, defaultConfig, config)

  return (
    <ConfigContext.Provider value={mergedConfig}>
      {children}
    </ConfigContext.Provider>
  )
}
