import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'

export default function NavBar({ children }) {
  const { theme } = useFela()

  return (
    <Box
      width="100%"
      minHeight={40}
      extend={{ backgroundColor: theme.tokens.primary }}>
      {children}
    </Box>
  )
}

NavBar.propTypes = {}
