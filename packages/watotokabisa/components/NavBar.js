import React from 'react'
import { Box } from '@bdp-rps/ui'

export default function NavBar({ children }) {
  return (
    <Box minHeight={40} extend={{ alignItems: 'flex-end' }} paddingRight={3}>
      {children}
    </Box>
  )
}

NavBar.propTypes = {}
