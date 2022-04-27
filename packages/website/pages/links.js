import { Box, Button, Text, Spacer, Tile, Link } from '@bdp-rps/ui'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text variant="subtitle">Links</Text>
          <Box space={4}>
            <Button href="/blog">Blogbeiträge</Button>
            <Button href="/bdp/ausbildung">Ausbildung</Button>
            <Button href="https://www.watoto-kabisa.de/">Keniaprojekt</Button>
            <Button href="https://www.pfadfinden.de/">
              Unsere Bundesseite
            </Button>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
