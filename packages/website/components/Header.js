import React from 'react'
import NextLink from 'next/link'
import { Box } from '@bdp-rps/ui'

import Layout from './Layout'
import NavBar from './NavBar'
import NavBarItem from './NavBarItem'

export default function Header() {
  return (
    <NavBar>
      <Layout>
        <Box direction="row" space={[2, , , 4]}>
          <NextLink href="/" passHref>
            <NavBarItem>Home</NavBarItem>
          </NextLink>
          <NextLink href="/liedgut" passHref>
            <NavBarItem>Liedgut</NavBarItem>
          </NextLink>
        </Box>
      </Layout>
    </NavBar>
  )
}
