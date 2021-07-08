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
        <title>Abenteuer und prägende Erlebnisse</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={2} paddingBottom={5}>
        <Box space={2}>
          <Text intent="title">Abenteuer und prägende Erlebnisse</Text>
          <Text>
            Kinder brauchen Herausforderungen, an denen sie wachsen können. Beim
            Spielen, Toben, Entdecken mit Gleichaltrigen machen junge Menschen
            wichtige und grundlegende Erfahrungen. Dazu gehört es auch, bei
            Rückschlägen nicht aufzugeben, sondern gemeinsam neue Wege zu suchen
            und es so am Ende doch zu schaffen. Dann können aus Schwierigkeiten
            Erfolgserlebnisse werden. So führen Abenteuer zu wertvollen
            Problemlösungskompetenzen und formen den Charakter.
            <br />
            <br />
            <Text intent="subtitle" align="center" color={theme.colors.red}>
              Die Pandemie hat bei vielen Kindern zu Unterforderung und
              Langeweile geführt. Als Folge der Kontaktreduzierungen, abgesagten
              Angebote und geschlossenen Räume ist der Internetkonsum in der
              Freizeit erheblich gestiegen.
            </Text>
            <br />
            Abenteuer erleben Pfadfinder*innen nicht nur an der Playstation. Wir
            gehen raus, spielen an der frischen Luft, singen, basteln und
            erleben die Natur hautnah. Unsere Zeltlager und Fahrten stecken
            voller kleiner und großer Abenteuer. Pfadfinder*innen lernen ihren
            Rucksack selbst zu packen und was sie brauchen, um unterwegs Spaß zu
            haben. Alle sind aktiv und alle packen mit an. Dabei kann es
            passieren, dass am auch mal nass wird wenn es regnet. Sie lernen
            aber auch sich selber und die Freunde der eigenen Gruppe kennen.
            <br />
            <br />
            Aber wenn unsere Mitglieder von ihren Abenteuern nach Hause kommen,
            sind alle randvoll mit neuen Erlebnissen und wertvollen Erfahrungen.
            Durch Pfadfinden lernen junge Menschen Notwendigkeiten und Gefahren
            einzuschätzen und entwickeln ein hohes Maß an Selbstständigkeit.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
