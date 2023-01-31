import React, { useState, useEffect } from 'react'
import { Box, Click, Button, Text, NavBar, NavBarItem } from '@bdp-rps/ui'

import Layout from './Layout'

export default function Header({ id, title }) {
  return (
    <NavBar>
      <Layout>
        <Box direction={['column', , 'row']}>
          <NavBarItem href="/">Liedgut</NavBarItem>
          {!title ? null : (
            <Box
              alignItems="center"
              direction="row"
              display={['none', , 'flex']}>
              <Text
                color="white"
                extend={{ fontSize: 16, lineHeight: 1, paddingTop: 2 }}>
                /
              </Text>
              <NavBarItem href={'/' + id}>
                <span style={{ fontSize: 16, lineHeight: 1, paddingTop: 2 }}>
                  {title}
                </span>
              </NavBarItem>
            </Box>
          )}
          <Box alignItems="flex-end" grow={1} extend={{ textAlign: 'right' }}>
            <NavBarItem href="/neu">Lied hinzufügen</NavBarItem>
          </Box>
        </Box>
      </Layout>
    </NavBar>
  )
}
