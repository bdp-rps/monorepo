import React, { useState } from 'react'

import ConfigContext from './ConfigContext'

export default function ConfigProvider({ config, children }) {
  const [activeOverlayCount, setActiveOverlayCount] = useState(0)

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        activeOverlayCount,
        setActiveOverlayCount,
      }}>
      {children}
    </ConfigContext.Provider>
  )
}
