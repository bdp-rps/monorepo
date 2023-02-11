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

const TextBox = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      paddingTop={0.5}
      paddingBottom={0.5}
      paddingLeft={2}
      paddingRight={2}
      alignSelf="flex-start"
      extend={{ backgroundColor: theme.tokens.secondary }}>
      <Text variant="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Pfadfinder Aufbaugruppe Tilia Mainz Impressum</title>
        <meta
          name="description"
          content="Impressum für die Pfadfinder Aufbaugruppe Tilia Mainz Neustadt BdP"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text variant="subtitle">Impressum</Text>
          <Text>
            <b>Bund der Pfadfinderinnen und Pfadfinder (BdP)</b>
            <br />
            <b>Landesverband Rheinland-Pfalz/Saar</b>
            <br />
            <br />
            <b>Aufbaugruppe Tilia Mainz</b>
            <br />
            <br />
            <b>Timon Flick</b>
            <br />
            Josefsstraße 18
            <br />
            55118 Mainz
            <br />
            <Link action="mailto:timon@bdp-rps.de">timon@bdp-rps.de</Link>
            <br />
            <br />
            Jugendverband
          </Text>
          <Text>
            <b>Gesetzliche Vertreter*innen:</b>
            <br />
            <br />
            Wiebke Spieß
            <br />
            Konstantin Iland
            <br />
            Timon Flick
            <br />
            <br />
            <br />
            Der BdP Rheinland-Pfalz/Saar ist ein nichtrechtsfähiger Verein mit
            Sitz in Mainz. Er ist eine selbständige Untergliederung des Bundes
            der Pfadfinderinnen und Pfadfinder e.V. (BdP) mit Sitz in
            Immenhausen.
          </Text>
          <Text>
            <b>
              Verantwortlicher Redakteur für die Inhalte dieser Internetseite:
            </b>
            <br />
            Timon Flick
            <br />
            <Link action="mailto:timon@bdp-rps.de">timon@bdp-rps.de</Link>
            <br />
          </Text>
          <Text>
            <b>Haftungshinweis:</b>
            <br />
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links.
            <br />
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber*innen verantwortlich.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
