import React from 'react'
import { useTheme } from '@bdp-rps/ambrose'

import Box from '../box'

export default function NavBar({ children, intent = 'primary' }) {
  const theme = useTheme()

  return (
    <Box
      width="100%"
      minHeight={40}
      extend={{
        backgroundColor:
          theme.tokens[intent === 'primary' ? 'primary' : 'primaryLight'],
      }}
    >
      {children}
    </Box>
  )
}

NavBar.propTypes = {}
