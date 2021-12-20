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
        <title>Abenteuer und prägende Erlebnisse</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout>
        <Box space={5} paddingTop={10} paddingBottom={10}>
          <Text intent="title" color={theme.colors.grey1}>
            Abenteuer und prägende Erlebnisse
          </Text>
          <Box
            as="img"
            width={300}
            src="/elemente/orange/element_7.png"
            marginTop={[-4, , -13]}
            extend={{
              position: 'absolute',

              marginLeft: 30,
              zIndex: -1,
            }}
          />
          <br />

          <Text>
            Kinder brauchen Herausforderungen, an denen sie wachsen können. Beim
            Spielen, Toben, Entdecken mit Gleichaltrigen machen junge Menschen
            wichtige und grundlegende Erfahrungen. Dazu gehört es auch, bei
            Rückschlägen nicht aufzugeben, sondern gemeinsam neue Wege zu suchen
            und es so am Ende doch zu schaffen. Dann können aus Schwierigkeiten
            Erfolgserlebnisse werden. So führen Abenteuer zu wertvollen
            Problemlösungskompetenzen und formen den Charakter.
          </Text>
        </Box>
      </Layout>
      <br />
      <Box
        paddingTop={15}
        paddingBottom={15}
        extend={{ backgroundColor: theme.colors.turquoise }}>
        <Layout>
          <Text
            intent="alternative"
            align="center"
            color={theme.colors.blue}
            extend={{ zIndex: 1 }}>
            Die Pandemie hat bei vielen Kindern zu Unterforderung und Langeweile
            geführt. Als Folge der Kontaktreduzierungen, abgesagten Angebote und
            geschlossenen Räume ist der Internetkonsum in der Freizeit erheblich
            gestiegen.
          </Text>
          <Box
            as="img"
            width={350}
            src="/elemente/blau/element_1.png"
            alignSelf="center"
            marginTop={[50, , 5]}
            marginLeft={[0, , '10%']}
            extend={{
              position: 'absolute',
              marginTop: 20,
              opacity: 0.3,
              zIndex: 0,
            }}
          />
        </Layout>
      </Box>

      <Box as="br" display={['none', , 'flex']} />
      <Box as="br" display={['none', , 'flex']} />
      <Box as="br" display={['none', , 'flex']} />
      <Box as="br" display={['none', , 'flex']} />
      <Layout paddingTop={15} paddingBottom={25}>
        <Text extend={{ zIndex: 1 }}>
          <Box
            as="img"
            width={[240, , 300]}
            src="/elemente/orange/element_4.png"
            extend={{
              display: 'inline',
              marginLeft: -100,
              marginRight: -10,
              marginTop: -20,
              opacity: 1,
              float: 'left',
            }}
          />
          Abenteuer erleben Pfadfinder*innen nicht nur an der Playstation. Wir
          gehen raus, spielen an der frischen Luft, singen, basteln und erleben
          die Natur hautnah. Unsere Zeltlager und Fahrten stecken voller kleiner
          und großer Abenteuer. Pfadfinder*innen lernen ihren Rucksack selbst zu
          packen und was sie brauchen, um unterwegs Spaß zu haben. Alle sind
          aktiv und alle packen mit an. Dabei kann es passieren, dass man auch
          mal nass wird, wenn es regnet. Sie lernen aber auch sich selber und
          die Freunde der eigenen Gruppe kennen.
          <Box
            as="img"
            width={400}
            src="/elemente/gelb/element_2.png"
            alignSelf="center"
            extend={{
              position: 'absolute',
              marginTop: -130,
              marginLeft: -50,
              zIndex: -1,
            }}
          />
          <br />
          <br />
          Wenn unsere Mitglieder von ihren Abenteuern nach Hause kommen, sind
          alle randvoll mit neuen Erlebnissen und wertvollen Erfahrungen. Durch
          Pfadfinden lernen junge Menschen Notwendigkeiten und Herausforderungen
          einzuschätzen und entwickeln ein hohes Maß an Selbstständigkeit.
        </Text>
      </Layout>
      <br />
    </Template>
  )
}
