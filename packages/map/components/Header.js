import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Click, Button, Text, NavBar, NavBarItem } from '@bdp-rps/ui'

import Layout from './Layout'

export default function Header() {
  const router = useRouter()
  const [title, setTitle] = useState()

  return (
    <Layout>
      <Box direction={['column', , 'row']}>
        <Box>
          <Button href="/neu">Ort hinzufügen</Button>
        </Box>
      </Box>
    </Layout>
  )
}
