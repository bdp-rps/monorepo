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
      <title>Pfadfinder Aufbaugruppe Mainz Liedgut</title>
      <meta
        name="description"
        content="Pfadfinder Aufbaugruppe Mainz Bereich für Liedgut"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      In Kürze wieder verfügbar.
    </Layout>
  </Template>
)
