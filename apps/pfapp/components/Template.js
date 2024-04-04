import * as React from 'react'
import { Box } from '@bdp-rps/ui'

import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'

export default function Template({ children }) {
  return (
    <Box grow={1}>
      <Header />
      <Layout>{children}</Layout>
      <Footer />
    </Box>
  )
}
