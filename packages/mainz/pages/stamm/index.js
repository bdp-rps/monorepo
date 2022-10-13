import { useRouter } from 'next/router'
import Head from 'next/head'

import { Box, Text } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Aufbaugruppe Mainz Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich die Pfadfinder Aufbaugruppe Mainz Neustadt BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Text> Kommt ;)</Text>
    </Layout>
  </Template>
)
