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
            <b>Watoto Kabisa e.V.</b>
            <br />
            <br />
            <br />
            <b>Wiebke Spieß</b>
            <br />
            Deine Adresse Wiebke :)
            <br />
            <Link href="mailto:?">Deine Mailadresse</Link>
          </Text>
          <Text>
            <b>Gesetzliche Vertreter:</b>
            <br />
            Liste mit Namen aus dem Vorstand
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
            </b>
            Hier kann auch ich rein :)
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
