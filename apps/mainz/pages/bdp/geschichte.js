import * as React from 'react'
import { useRouter } from 'next/router'
import { Geschichte } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={15}>
      <Geschichte />
    </Layout>
  </Template>
)
