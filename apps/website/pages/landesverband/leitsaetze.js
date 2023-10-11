import * as React from 'react'

import { Leitsaetze } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => {
  const { theme } = useFela()

  return (
    <Template>
      <Layout paddingTop={5} paddingBottom={10}>
        <Leitsaetze />
      </Layout>
    </Template>
  )
}
