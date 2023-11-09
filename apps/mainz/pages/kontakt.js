import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
} from '@bdp-rps/ui'

import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Pfadfinder Aufbaugruppe Mainz Kontakt</title>
        <meta
          name="description"
          content="Kontakt für die Pfadfinder Aufbaugruppe Mainz Neustadt BdP"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box
          marginBottom={4}
          basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
          <Tile
            title="Die Menschen hinter der Aufbaugruppe"
            image={`/images/tilia_2023.jpeg`}
            imageHeight={600}>
            <Box>
              <Text>
                Wir sind die Menschen hinter der Aufbaugruppe Mainz. Kontaktiere
                uns doch gerne über{' '}
                <Link href="mailTo:pfadfinden@bdp-mainz.de">
                  pfadfinden[at]bdp-mainz.de
                </Link>
              </Text>
            </Box>
          </Tile>
        </Box>
      </Layout>
    </Template>
  )
}
