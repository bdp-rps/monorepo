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
        <title>Endlich wieder Raus</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={2} paddingBottom={5}>
        <Box space={2}>
          <Text intent="title">
            Endlich wieder raus, endlich wieder Pfadfinden!
          </Text>
          <Text>
            Kinder und Jugendliche leiden besonders unter den Folgen der
            Pandemiemaßnahmen. Sie werden in ihrer Entwicklung ausgebremst.
            Unsere Jugendarbeit fördert Kreativität, Sozialkompetenz und
            Selbstbewusstsein. Seit über einem Jahr ist das nicht möglich.
            Pfadfinden fehlt!
            <br />
            <br />
            Für ihre mentale Gesundheit und Persönlichkeitsentwicklung brauchen
            Kinder und Jugendliche Pfadfinden im Bund der Pfadfinderinnen und
            Pfadfinder ist ein bewährtes ganzheitliches Programm für Kinder und
            Jugendliche. Es leistet seit Jahrzehnten einen wertvollen Beitrag
            zur Persönlichkeitsentwicklung von Millionen junger Menschen.
            Pfadfinden fördert die emotionalen, sozialen, intellektuellen und
            physischen Fähigkeiten. Es stärkt Kreativität, Teamfähigkeit und
            mentale Gesundheit. Es ist genau das richtige Programm, das
            unzählige Kinder und Jugendliche genau jetzt brauchen.
            <br />
            <br />
            <Text intent="subtitle" align="center" color={theme.colors.red}>
              Wir, die rund 30.000 Kinder, Jugendliche und junge Erwachsene im
              Bund der Pfadfinderinnen und Pfadfinder e.V. mit unseren über 300
              Stämmen in fast Deutschland, wollen Endlich wieder raus!
            </Text>
            <br />
            Mach mit und erlebe jetzt das Abenteuer Pfadfinden!
          </Text>
          <Box maxWidth={300}>
            <Button intent="secondary">
              Suche Jetzt einen Stamm in deiner Nähe!{' '}
            </Button>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
