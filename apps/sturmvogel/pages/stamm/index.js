import Head from 'next/head'

import { Text, Box } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Stamm Sturmvogel Birkenfeld Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich der Pfadfinder Stamm Sturmvogel Birkenfeld vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Box space={12}>
        <Box>
          <Text>
            Unser Stamm Sturmvogel wurde schon 1953 gegründet und besteht
            mittlerweile aus über 100 Mitgliedern. Unsere Gruppenstunden finden
            wöchentlich auf der Burg Birkenfeld statt und wir freuen uns immer
            über neue Gesichter! Wenn du Interesse hast, kontaktier uns gerne
            oder schau einfach mal vorbei:)
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
