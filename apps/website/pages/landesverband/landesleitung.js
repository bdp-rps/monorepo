import * as React from 'react'

import Layout from '../../components/Layout'
import Template from '../../components/Template'
import { Landesleitung } from '@bdp-rps/shared'

export default () => (
  <Template>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      grow={1}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <Landesleitung />
    </Layout>
  </Template>
)
