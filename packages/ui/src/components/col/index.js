import React from 'react'

import Box from '../box'

export default function Col({ size = 12, style, extend, children }) {
  const width = (size / 12) * 100 + '%'

  return (
    <Box
      style={style}
      extend={extend}
      paddingLeft={4}
      paddingRight={4}
      basis={['100%', , , width]}
      maxWidth={['100%', , , width]}>
      {children}
    </Box>
  )
}
