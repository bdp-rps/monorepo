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
  ScrollView,
} from '@bdp-rps/ui'
import NextLink from 'next/link'
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
      <Head>
        <title>Naturerfahrungen und Klimaschutz</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={2} paddingBottom={5}>
        <Box space={2}>
          <Text intent="title">Naturerfahrungen und Klimaschutz</Text>
          <Text>
            Naturerlebnisse können Kinder und Jugendliche intellektuell,
            spirituell und emotional berühren. Außerdem lehren sie Achtsamkeit,
            Ausgeglichenheit, Wertschätzung und Respekt. Das sind elementare
            Erfahrungen für die junge Generation, die von den Folgen des
            Klimawandels betroffen sein wird. Wer die Natur nicht nur aus
            Schulbüchern kennt, ist sensibler für umweltbewusstes Verhalten und
            motiviert zum Engagement für den Klimaschutz.
            <br />
            <br />
            <Text intent="subtitle" align="center" color={theme.colors.red}>
              Viele Menschen haben während der Pandemie die Natur bei
              Spaziergängen neu entdeckt. Naturerlebnis ist aber mehr. Es
              ermöglicht ein Durchatmen und Innehalten im hektischen Alltag. So
              kann eine achtsame Verbindung von Mensch und Umwelt entstehen.
              Nicht nur im urbanen Raum haben die Einschränkung der Mobilität
              Kinder und Jugendliche dieser Erlebnisse erschwert.
            </Text>
            <br />
            Pfadfinden finden wo immer möglich draußen statt. Wir schlafen im
            Zelt oder gar unter freiem Himmel mit Blick in die Sterne. Wir
            lauschen in den nächtlichen Wald und sitzen gemütlich ums
            Lagerfeuer. Auf unseren Lagern und Fahrten nehmen wir unsere Umwelt
            ganz bewusst mit allen Sinnen wahr. Seit jeher treten
            Pfadfinder*innen auf der ganzen Welt für den Umweltschutz ein. Wir
            versuchen, mit der Natur zu leben statt sie immer weiter
            zurückzudrängen.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
