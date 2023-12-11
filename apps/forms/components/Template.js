import * as React from 'react'
import { Box } from '@bdp-rps/ui'

import Header from './Header'
import Footer from './Footer'

export default function Template({ children }) {
  return (
    <Box
      grow={1}
      minHeight="100vh"
      extend={{ backgroundColor: 'rgb(245,245,245)' }}>
      <Header />
      <Box grow={1}>{children}</Box>
      <Footer />
    </Box>
  )
}
