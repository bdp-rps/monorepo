import React, { useState } from 'react'

export * from '@bdp-rps/ui'

export function PlayroomState({ defaultValue, children }) {
  const [state, setState] = useState(defaultValue)
  return children({ state, setState })
}
