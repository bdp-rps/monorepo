import React from 'react'
import { Box } from '@bdp-rps/ui'

export default function NavBar({ children }) {
  return (
    <Box
      minHeight={50}
      bg="blue"
      width="100%"
      paddingTop={2}
      direction="row"
      justifyContent="start"
    >
      {children}
    </Box>
  )
}
