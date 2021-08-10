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
      <Layout>
        <Box space={5} paddingTop={10} paddingBottom={10}>
          <Text intent="title" color={theme.colors.black}>
            Naturerfahrungen und Klimaschutz
          </Text>
          <Box
            as="hr"
            width={250}
            marginTop={2}
            extend={{
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: theme.colors.turquoise,
            }}
          />
          <br />
          <Text extend={{ zIndex: 1 }}>
            Naturerlebnisse können Kinder und Jugendliche intellektuell,
            spirituell und emotional berühren. Außerdem lehren sie Achtsamkeit,
            Ausgeglichenheit, Wertschätzung und Respekt. Das sind elementare
            Erfahrungen für die junge Generation, die von den Folgen des
            Klimawandels betroffen sein wird. Wer die Natur nicht nur aus
            Schulbüchern kennt, ist sensibler für umweltbewusstes Verhalten und
            motiviert zum Engagement für den Klimaschutz.
          </Text>
        </Box>
      </Layout>
      <br />
      <br />
      <Box
        paddingTop={10}
        paddingBottom={15}
        extend={{ backgroundColor: theme.colors.turquoise }}>
        <Layout>
          <Text
            intent="alternative"
            align="center"
            color={theme.colors.grey1}
            extend={{ zIndex: 1 }}>
            Viele Menschen haben während der Pandemie die Natur bei
            Spaziergängen neu entdeckt. Naturerlebnis ist aber mehr. Es
            ermöglicht ein Durchatmen und Innehalten im hektischen Alltag. So
            kann eine achtsame Verbindung von Mensch und Umwelt entstehen.
            <br />
            Nicht nur im urbanen Raum gat die Einschränkung der Mobilität Kinder
            und Jugendliche diese Erlebnisse erschwert.
          </Text>
          <Box
            as="img"
            alignSelf="flex-start"
            src="/elemente/blau/element_1.png"
            width={300}
            extend={{
              marginTop: -110,
              position: 'absolute',
              opacity: 0.3,
              zIndex: 0,
            }}
          />
        </Layout>
      </Box>

      <br />
      <Box as="br" display={['none', , 'flex']} />
      <Layout paddingTop={15} paddingBottom={15}>
        <Box
          as="img"
          width={[300, , 400]}
          src="elemente/blau/element_7.png"
          alignSelf="center"
          marginTop={[-52, , -61]}
          marginLeft={['5%', , '10%']}
          extend={{
            position: 'absolute',
            zIndex: 0,
          }}
        />
        <Text>
          <Box
            as="img"
            width={[240, , 280]}
            src="elemente/türkis/element_4.png"
            extend={{
              display: 'inline',
              marginLeft: -100,
              marginRight: -10,
              marginTop: -20,
              opacity: 1,
              float: 'left',
            }}
          />
          Pfadfinden findet wo immer möglich draußen statt. Wir schlafen im Zelt
          oder gar unter freiem Himmel mit Blick in die Sterne. Wir lauschen in
          den nächtlichen Wald und sitzen gemütlich ums Lagerfeuer. Auf unseren
          Lagern und Fahrten nehmen wir unsere Umwelt ganz bewusst mit allen
          Sinnen wahr. Seit jeher treten Pfadfinder*innen auf der ganzen Welt
          für den Umweltschutz ein. Wir versuchen, mit der Natur zu leben statt
          sie immer weiter zurückzudrängen.
        </Text>
      </Layout>
    </Template>
  )
}
