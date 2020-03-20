import React from 'react'

import Box from '../box'

export default function Grid({ children }) {
  return (
    <Box
      maxWidth={1100}
      width="100%"
      marginTop={0}
      marginBottom={0}
      marginRight="auto"
      marginLeft="auto"
      grow={0}
      paddingLeft={4}
      paddingRight={4}>
      {children}
    </Box>
  )
}
