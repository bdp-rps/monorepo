import * as React from 'react'

import { Leitsaetze } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => {
  return (
    <Template>
      <Layout
        paddingTop={10}
        paddingBottom={15}
        grow={1}
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Leitsaetze />
      </Layout>
    </Template>
  )
}
