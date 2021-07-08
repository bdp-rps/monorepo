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
        <title>Wirksamkeit und persönliche Entwicklung</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={2} paddingBottom={5}>
        <Box space={2}>
          <Text intent="title">Wirksamkeit und persönliche Entwicklung</Text>
          <Text>
            Kinder und Jugendlichen brauchen geschützte Freiräume für ihre
            soziale und persönliche Weiterentwicklung. Sie wollen mitbestimmen
            und Verantwortung für ihr Handeln übernehmen. Dadurch erkennen sie
            eigene Stärken und Schwächen und erfahren ihre eigene Wirksamkeit.
            Diese wichtige Erfahrung vermittelt ein positives Selbstbild.
            <br />
            <br />
            <Text intent="subtitle" align="center" color={theme.colors.red}>
              In der Pandemie mussten viele Eltern Home schooling,
              Berufstätigkeit und Haushalt unter einen Hut zu bringen. Dies ging
              oft zu Lasten der gemeinsamen unbeschwerten Familienzeit. In ihrer
              sozialen und körperlichen Entwicklung waren Kinder und Jugendliche
              oft unterfordert. Andererseits waren sie wegen fehlender Zuwendung
              und der mentalen Dauerbelastung emotional überfordert. Insgesamt
              hat die Entwicklung junger Menschen hat in allen Bereichen einen
              Dämpfer erhalten.
            </Text>
            <br />
            Pfadfinden im BdP fordert und fördert den ganzen Menschen. Wir
            unterstützen die intellektuelle, soziale und emotionale Entwicklung
            wird durch Pfadfinden unterstützt. In jeder Gruppenstunde erleben
            Pfadfinder*innen neue Herausforderungen, die sie mit Kreativität und
            Einfallsreichtum lösen und an denen sie wachsen. So stärkt
            Pfadfinden das Selbstbewusstsein und Sozialkompetenz.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
