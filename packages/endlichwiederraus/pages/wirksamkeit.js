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
        <title>Wirksamkeit und persönliche Entwicklung</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout>
        <Box space={5} paddingTop={10} paddingBottom={10}>
          <Text intent="title">Wirksamkeit und persönliche Entwicklung</Text>
          <Box
            as="img"
            width={250}
            src="/elemente/blau/element_4.png"
            alignSelf="flex-end"
            extend={{
              position: 'absolute',
              marginLeft: '-12%',

              marginTop: -20,
              zIndex: -1,
              opacity: 0.4,
            }}
          />
          <br />
          <Text>
            Kinder und Jugendlichen brauchen geschützte Freiräume für ihre
            soziale und persönliche Weiterentwicklung. Sie wollen mitbestimmen
            und Verantwortung für ihr Handeln übernehmen. Dadurch erkennen sie
            eigene Stärken und Schwächen und erfahren ihre eigene Wirksamkeit.
            Diese wichtige Erfahrung vermittelt ein positives Selbstbild.
          </Text>
        </Box>
      </Layout>
      <br />
      <br />
      <Box>
        <Layout
          paddingTop={15}
          paddingBottom={15}
          extend={{ backgroundColor: theme.colors.yellow }}>
          <Text intent="alternative" color={theme.colors.blue}>
            <Box
              as="img"
              width={[220, , 300]}
              src="/elemente/blau/element_8.png"
              marginLeft={[-22, , -30]}
              extend={{
                display: 'inline',
                marginRight: -30,
                marginTop: -20,
                opacity: 1,
                float: 'left',
              }}
            />
            In der Pandemie mussten viele Eltern Distanzunterricht,
            Berufstätigkeit und Haushalt unter einen Hut zu bringen. Dies ging
            oft zu Lasten der gemeinsamen unbeschwerten Familienzeit.
            <br />
            In ihrer sozialen und körperlichen Entwicklung waren Kinder und
            Jugendliche oft unterfordert. Andererseits waren sie wegen fehlender
            Zuwendung und der mentalen Dauerbelastung emotional überfordert.
            <br />
            Insgesamt hat die Entwicklung junger Menschen in allen Bereichen
            einen Dämpfer erhalten.
          </Text>
        </Layout>
      </Box>
      <br />

      <Layout paddingTop={10} paddingBottom={10}>
        <Box
          as="img"
          width={400}
          src="/elemente/blau/element_2.png"
          alignSelf="flex-end"
          extend={{
            position: 'absolute',
            transform: 'rotate(90deg)',
            marginLeft: -100,
            marginRight: -30,
            marginTop: -200,
            zIndex: 0,
            opacity: 0.5,
          }}
        />
        <Text>
          Pfadfinden im BdP fordert und fördert den ganzen Menschen. Wir
          unterstützen die intellektuelle, soziale und emotionale Entwicklung
          unserer Mitglieder. In jeder Gruppenstunde erleben Pfadfinder*innen
          neue Herausforderungen, die sie mit Kreativität und Einfallsreichtum
          lösen und an denen sie wachsen. So stärkt Pfadfinden das
          Selbstbewusstsein und Sozialkompetenz.
        </Text>
        <Box
          as="img"
          width={200}
          src="/elemente/blau/element_5.png"
          extend={{
            zIndex: 0,
          }}
        />
      </Layout>
    </Template>
  )
}
