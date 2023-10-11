import * as React from 'react'
import { Staemme } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import staemme from '../../data/staemme.json'

export default () => (
  <Template>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      grow={1}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <Staemme />
    </Layout>
  </Template>
)
