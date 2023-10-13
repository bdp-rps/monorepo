import Head from 'next/head'

import { Text } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Aufbaugruppe Rotfüchse Herxheim Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich die Pfadfinder Aufbaugruppe Rotfüchse Herxheim BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Text>HIER NOCH MEHR TEXT ÜBER EUCH</Text>
    </Layout>
  </Template>
)
