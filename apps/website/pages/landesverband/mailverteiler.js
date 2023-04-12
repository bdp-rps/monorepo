import * as React from 'react'

import { Box, Text, Tile } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'
import DistributionForm from '../../components/distributionForm.js'

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={10}>
      <Box space={2}>
        <Text variant="subtitle">Mail Verteiler</Text>
        <Text>
          Hier könnt ihr euch für die LV-Mailverteiler an- und abmelden. Tragt
          dazu euren Namen, den Stammesnamen und eure Mailadresse ein.
        </Text>
      </Box>
    </Layout>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <Box space={8}>
        <Tile>
          <DistributionForm />
        </Tile>
      </Box>
    </Layout>
  </Template>
)
