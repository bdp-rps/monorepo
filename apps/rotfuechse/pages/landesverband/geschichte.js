import { useRouter } from 'next/router'
import Head from 'next/head'

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

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Stamm Rotfüchse Herxheim Geschichte</title>
      <meta
        name="description"
        content="Pfadfinder Stamm Rotfüchse Herxheim Geschichte der Pfadfinderei"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      Geschichte
    </Layout>
  </Template>
)
