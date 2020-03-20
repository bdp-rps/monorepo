import React from 'react'

import Box from '../box'

export default function ScrollView({ style, extend = {}, children }) {
  return (
    <Box
      style={style}
      shrink={1}
      grow={1}
      maxHeight="100%"
      extend={{ overflow: 'auto', ...extend }}>
      {children}
    </Box>
  )
}
