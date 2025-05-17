import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
  Grid,
} from '@bdp-rps/ui'

import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Pfadfinder Stamm Sturmvogel Birkenfeld Kontakt</title>
        <meta
          name="description"
          content="Kontakt für die Pfadfinder Pfadfinder Stamm Sturmvogel Birkenfeld BdP"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={4}>
          <Text variant="subtitle">Kontakt</Text>
          <Tile>
            <Box space={4}>
              <Grid columns={['1fr', , '1fr']} gap={4}>
                <Box space={2}>
                  <Text variant="note">Stammesführung</Text>
                  <Text>Alina Bauer (01517-0893206)</Text>
                  <Text variant="note">Email</Text>
                  <Text>alinabauer264@gmail.com</Text>
                </Box>
                <Box space={2}>
                  <Text variant="note">Gruppen</Text>
                  <Text>
                    Wölflinge (7-10 Jährige): Flo Maul (01520-346161673)
                  </Text>
                  <Text>
                    Pfadfinder*innen (11-15jährige): Finn Schau (0176-84978966)
                  </Text>
                  <Text>
                    Ranger und Rover (ab 16 Jahre): Nicole Erschow (01575
                    5083500)
                  </Text>
                </Box>
              </Grid>
              <Box
                extend={{
                  borderTop: '1px solid',
                  borderColor: 'grey',
                }}
              />
              <Box>
                <Text variant="note">Social Media</Text>
                <Link
                  href="https://instagram.com/bdp_stammsturmvogel"
                  target="_blank">
                  Instagram @bdp_stammsturmvogel
                </Link>
              </Box>
            </Box>
          </Tile>
        </Box>
      </Layout>
    </Template>
  )
}
