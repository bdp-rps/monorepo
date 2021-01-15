import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/digital/downloads')
  }, [])

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        Digital
      </Layout>
    </Template>
  )
}
