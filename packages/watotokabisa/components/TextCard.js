import React from 'react'
import { Box, useTheme } from '@bdp-rps/ui'

export default function TextCard({ children }) {
  const theme = useTheme()

  return (
    <Box
      grow={1}
      shrink={1}
      basis={0}
      bg="background.accent"
      padding={8}
      space={8}
      justifyContent="center"
      extend={{
        border: '2px solid black',
        borderRadius: theme.tokens.borderRadius,
      }}>
      {children}
    </Box>
  )
}
