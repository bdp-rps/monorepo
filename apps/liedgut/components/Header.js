import React, { useState, useEffect } from 'react'
import { Box, Click, Button, Text, NavBar, NavBarItem } from '@bdp-rps/ui'
import { songs } from '@bdp-rps/liedgut'

import Layout from './Layout'

export default function Header({ id, title }) {
  const count = songs.length
  const index = Math.max(0, Math.floor(Math.random() * count))
  const shuffle = songs[index]

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
          <Box alignItems="flex-end" space={2} grow={1}>
            <Box alignSelf="flex-end" direction="row" space={2}>
              <NavBarItem href={'/' + shuffle}>Shuffle</NavBarItem>
              <NavBarItem href="/neu">Lied hinzufügen</NavBarItem>
            </Box>
          </Box>
        </Box>
      </Layout>
    </NavBar>
  )
}
