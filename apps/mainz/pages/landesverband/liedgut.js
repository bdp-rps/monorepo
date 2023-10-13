import * as React from 'react'

import { Liedgut } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={10}>
      <Liedgut />
    </Layout>
  </Template>
)
