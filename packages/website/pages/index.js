import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
  Button,
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
      <Layout paddingTop={5} paddingBottom={5}>
        <Text>
          <Text intent="category">Willkommen bei den Pfadfindern.</Text>
          <br />
          Der Bund der Pfadfinderinnen und Pfadfinder ist der größte
          interkonfessionelle Pfadfinderbund in Deutschland.
          <br />
          In Rheinland-Pfalz und im Saarland sind wir mit 20 Gruppen präsent.
        </Text>
      </Layout>
      <Layout
        grow={1}
        paddingTop={5}
        paddingBottom={10}
        alignSelf="stretch"
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text intent="subtitle">Das läuft bei uns.</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <Tile title="Aktueller Post" image="/images/bg.jpg" highlight>
              Das ist der aktuelle Post, der wird gehighlighted.
            </Tile>
          </Box>
          <Box grow={1} space={4}>
            <Tile title="Aktueller Post" image="/images/bg.jpg">
              Das ist der aktuelle Post, der wird gehighlighted.
            </Tile>
            <Tile title="Aktueller Post" image="/images/bg.jpg">
              Das ist der aktuelle Post, der wird gehighlighted.
            </Tile>
          </Box>
        </Box>

        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/blog" size="large">
            Weitere Beiträge
          </Button>
        </Box>
      </Layout>
      <Layout paddingTop={10} paddingBottom={12}>
        <Text intent="subtitle">Das steht an.</Text>

        <Box
          paddingTop={5}
          space={[8, , , 0]}
          direction={['column', , , 'row']}>
          <Box grow={1}>
            <TextBox>April</TextBox>
            <Text>10-12. LV</Text>
            <Text>10-12. SST</Text>
          </Box>
          <Box grow={1}>
            <TextBox>Mai</TextBox>
            <Text>10-12. LaWöLa</Text>
          </Box>
          <Box grow={1}>
            <TextBox>Juni</TextBox>
            <Text>10-12. Landesfahrt</Text>
            <Text>10-12. SST</Text>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
