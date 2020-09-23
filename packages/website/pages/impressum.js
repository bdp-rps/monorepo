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
      <Text intent="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text intent="subtitle">Impressum</Text>
          <Text>
            <b>Bund der Pfadfinderinnen und Pfadfinder (BdP)</b>
            <br />
            <b>Landesverband Rheinland-Pfalz/Saar</b>
            <br />
            <br />
            <b>Stefan Schmidt</b>
            <br />
            Dreiweidenstraße 3<br />
            65195 Wiesbaden
            <br />
            <Link href="mailto:mefan@bdp-rps.de">mefan@bdp-rps.de</Link>
            <br />
            <br />
            Jugendverband
          </Text>
          <Text>
            <b>Gesetzliche Vertreter:</b>
            <br />
            Stefan Schmidt
            <br />
            Linda Flohrer
            <br />
            Hannes Müller
            <br />
            Dominik Meisinger
            <br />
            Anne Wendel
            <br />
            <br />
            Es sind jeweils zwei Vorstandsmitglieder gemeinsam zur Vertretung
            befugt.
            <br />
            <br />
            Der BdP Rheinland-Pfalz/Saar ist ein nichtrechtsfähiger Verein mit
            Sitz in Wiesbaden. Er ist eine selbständige Untergliederung des
            Bundes der Pfadfinderinnen und Pfadfinder e.V. (BdP) mit Sitz in
            Immenhausen.
          </Text>
          <Text>
            <b>
              Verantwortlicher Redakteur für die Inhalte dieser Internetseite:
            </b>
            <br />
            Robin Weser
            <br />
            <Link href="mailto:robin@bdp-rps.de">robin@bdp-rps.de</Link>
            <br />
            <Link href="https://weser.io">https://weser.io</Link>
          </Text>
          <Text>
            <b>Haftungshinweis:</b>
            <br />
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links.
            <br />
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber verantwortlich.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
