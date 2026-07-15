import * as React from 'react'

import { Stufen } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Layout paddingTop={6} paddingBottom={6}>
      <Stufen />
    </Layout>
  </Template>
)
