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
        <title>Werte und Verantwortung</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={5}>
          <Text intent="title">Werte und Verantwortung</Text>
          <br />
          <Box
            as="img"
            width={250}
            src="elemente/rosa/element_4.png"
            extend={{
              position: 'absolute',
              marginTop: -20,
              zIndex: -1,
              opacity: 0.4,
            }}
          />
          <Text>
            Die Gesellschaft, in die Kinder und Jugendliche hineinwachsen, ist
            im Fluss. Alte Gewissheiten werden zunehmend in Frage gestellt. Neue
            Perspektiven und Entwürfe entwickeln sich. Dabei kann es für junge
            Menschen schwer sein, einen eigenen Standpunkt zu entwickeln. Dabei
            sehnen sie sich nach Orientierung und verlässlichen Werten, an denen
            sie ihr Verhalten ausrichten können. Hilfreich ist der Austausch mit
            anderen Jugendlichen. In der Gruppe können Wertvorstellungen
            diskutiert und hinterfragt werden. Auf dieser Basis kann dann auch
            die Bereitschaft entstehen, Verantwortung für sich selbst und für
            andere zu übernehmen.
          </Text>
        </Box>
      </Layout>
      <br />
      <br />
      <Box
        paddingTop={15}
        paddingBottom={25}
        extend={{ backgroundColor: theme.colors.rose }}>
        <Layout>
          <Box
            as="img"
            width={300}
            src="elemente/blau/element_5.png"
            extend={{
              position: 'absolute',
              marginTop: -180,
              zIndex: 0,
            }}
          />
          <Text intent="alternative" align="center" color={theme.colors.grey1}>
            Außerschulische Jugendgruppen mussten während der Pandemie ihre
            Arbeit weitgehend einstellen. Viele Gruppenleitungen im BdP haben
            aber durch digitale Angebote für ihre Mitglieder den Lockdown
            erleichtert. Die meisten Kinder und Jugendlichen konnten aber
            während der Pandemie nicht selbst an der Ausgestaltung ihres
            Umfeldes mitwirken. Sie mussten viel Verantwortung übernehmen-
            beispielsweise für ihren schulischen Lernerfolg. Nach ihrer Meinung
            wurden sie dabei viel zu selten gefragt.
          </Text>
        </Layout>
      </Box>
      <br />

      <Layout paddingTop={15} paddingBottom={20}>
        <Box
          as="img"
          width={600}
          src="elemente/blau/element_6.png"
          alignSelf="center"
          extend={{
            position: 'absolute',
            marginLeft: '5%',
            marginTop: -230,
            opacity: 0.4,
            zIndex: 0,
          }}
        />
        <Text extend={{ zIndex: 1 }}>
          Werte wie Freundschaft, Rücksichtnahme und Respekt sind bei den
          Pfadfindern keine leeren Worte. Sie sind für uns selbstverständlich
          und werden, ohne moralischen Zeigefinger oder Druck, von den Älteren
          an die Jüngeren weitergegeben. Unsere Gruppenleitungen sind keine
          Superhelden, aber positive Beispiele, an denen sich Kinder und
          Jugendliche orientieren können. Sie arbeiten 100% ehrenamtlich und
          immer authentisch. Wir machen Werte altersgerecht erlebbar und geben
          damit die Möglichkeit, sie gemeinsam zu diskutieren und
          auszugestalten. So werden sie zur selbstverständlichen Grundlage
          unseres Umgangs miteinander.
          <Box
            as="img"
            width={400}
            src="elemente/rosa/element_7.png"
            alignSelf="center"
            extend={{
              marginLeft: '5%',
              marginTop: -80,
              marginBottom: -80,
              zIndex: 0,
            }}
          />
          Kinder und Jugendliche übernehmen im BdP gerne Verantwortung. Denn in
          unseren Gruppen bekommen sie schon früh die Möglichkeit, Schritt für
          Schritt Verantwortung zu übernehmen. Für sich selbst, für die eigene
          Gruppe und später als Gruppenleitung auch für Jüngere. Dies geschieht
          nach verlässlichen Spielregeln und mit Unterstützung durch erfahrene
          Ältere. So wird niemand überfordert und alle wachsen an ihren
          Aufgaben.
        </Text>
      </Layout>
    </Template>
  )
}
