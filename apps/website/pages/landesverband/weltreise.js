import * as React from 'react'

import { WatotoKabisa } from '@bdp-rps/shared'
import { Text, Spacer, Link, Box, Button, Card, useTheme } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={15} grow={1}>
        <Box space={8}>
          <Box space={4}>
            <Box space={2}>
              <Text variant="subtitle">RPS Weltreise</Text>

              <Box space={1}>
                <Box direction="row" justifyContent="space-between">
                  <Text>0%</Text>
                  <Text>0 / 42.000 km</Text>
                </Box>
                <Box width="100%" height={25} bg="rgb(200, 200, 200)">
                  <Box width="0%" height={25} bg={theme.tokens.primary} />
                </Box>
              </Box>
            </Box>
            <Card>
              <Text variant="category">Das ist so viel wie:</Text>
              <Text>
                Es sind noch nicht genug Fahrten eingereicht, um eine Auswertung
                anzuzeigen.
              </Text>
            </Card>
            <Text>Projektbeschreibung.</Text>
            <Box alignSelf="flex-start">
              <Button href="">Fahrt einreichen</Button>
            </Box>
          </Box>

          <hr />

          <Box space={4}>
            <Text variant="category">Fahrtenbuch</Text>
            <Text>Bisher wurden noch keine Fahrten eingereicht.</Text>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
