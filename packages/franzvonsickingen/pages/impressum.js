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
            <b>Stamm Franz von Sickingen</b>
            <br />
            <br />
            <b>Daniel Christmann</b>
            <br />
            Kurfürstenstraße 21<br />
            67549 Worms
            <br />
            <Link href="mailto:christmanndaniel1@gmail.com">christmanndaniel1@gmail.com</Link>
            <br />
            <br />
          </Text>
          <Text>
            <b>Gesetzliche Vertreter:</b>
            <br />
            Daniel Christmann
            <br />
            Horst Stauffer-Bescher
            <br />
            Miriam Ebel
            <br />
            <br />
          </Text>
          <Text>
            <b>
              Verantwortlicher Redakteur für die Inhalte dieser Internetseite:
            </b>
            <br />
            Jenny Christmann
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
