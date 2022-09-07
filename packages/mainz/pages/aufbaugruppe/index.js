import { useRouter } from 'next/router'

import { Box, Text } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={10}>
      <Text> Kommt ;)</Text>
    </Layout>
  </Template>
)
