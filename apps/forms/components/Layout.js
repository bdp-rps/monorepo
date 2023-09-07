import React from 'react'
import { Box, useTheme } from '@bdp-rps/ui'

export default function Layout({ children, ...props }) {
  const theme = useTheme()

  return (
    <Box alignItems="center">
      <Box
        paddingHorizontal={[4, , , 0]}
        {...props}
        maxWidth={800}
        width="100%">
        {children}
      </Box>
    </Box>
  )
}
