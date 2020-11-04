import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Button, Text, NavBar, NavBarItem } from '@bdp-rps/ui'

import Layout from './Layout'

export default function Header() {
  const router = useRouter()
  const [title, setTitle] = useState()

  const songId = router.query.songId

  useEffect(() => {
     
  }, [])

  return (
    <NavBar>
      <Layout>
        <Box direction={['column', , 'row']}>
          <NavBarItem href="/">Filtern</NavBarItem>
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
              <NavBarItem href={'/' + songId}>
                <span style={{ fontSize: 16, lineHeight: 1, paddingTop: 2 }}>
                  {title}
                </span>
              </NavBarItem>
            </Box>
          )}
          <Box alignItems="flex-end" grow={1} extend={{ textAlign: 'right' }}>
            <NavBarItem href="/neu">Hinzufügen</NavBarItem>
          </Box>
        </Box>
      </Layout>
    </NavBar>
  )
}
