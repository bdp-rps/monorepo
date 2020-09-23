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
    if (songId) {
      const songData = require('../src/songs/' + songId + '.json')
      setTitle(songData.title)
    }
  }, [])

  return (
    <NavBar>
      <Layout>
        <Box direction="row" alignItems="center">
          <NavBarItem href="/">Liedgut</NavBarItem>
          {!title ? null : (
            <>
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
            </>
          )}
          <Box alignItems="flex-end" grow={1}>
            <NavBarItem href="/neu">Lied hinzufügen</NavBarItem>
          </Box>
        </Box>
      </Layout>
    </NavBar>
  )
}
