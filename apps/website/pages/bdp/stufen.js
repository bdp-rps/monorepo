import * as React from 'react'

import { Stufen } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      grow={1}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <Stufen />
    </Layout>
  </Template>
)
