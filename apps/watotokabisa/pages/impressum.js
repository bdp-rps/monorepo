import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
} from '@bdp-rps/ui'

import Head from 'next/head'
import Layout from '../components/Layout'
import Template from '../components/Template'
import Link from '../components/Link'

export default () => {
  const theme = useTheme()

  return (
    <Template heroHeight="60vh">
      <Box bg="background.primary">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <Box space={8} paddingBottom={10}>
            <Text variant="subtitle">Impressum</Text>
            <Text>
              <b>Watoto Kabisa e.V.</b>
              <br />
              <br />
              <br />
              <b>Wiebke Spieß</b>
              <br />
              Arenberger Straße 137a
              <br />
              56077 Koblenz
              <br />
              <Link variant="body" href="mailto:vorstand@watoto-kabisa.de">
                vorstand@watoto-kabisa.de
              </Link>
            </Text>
            <Text>
              <b>Gesetzliche Vertreter:</b>
              <br />
              Wiebke Spieß
              <br />
              Robin Weser
              <br />
              Anahita Emminghaus
              <br />
              Timon Flick
              <br />
              <br />
              Es sind jeweils zwei Vorstandsmitglieder gemeinsam zur Vertretung
              befugt.
              <br />
              <br />
            </Text>
            <Text>
              <b>
                Verantwortlicher Redakteur für die Inhalte dieser Internetseite:
              </b>{' '}
              Timon Flick
            </Text>
          </Box>
        </Layout>
      </Box>
    </Template>
  )
}
