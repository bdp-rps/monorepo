import { Box, Text, useTheme, Link } from '@bdp-rps/ui'

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
      <Text variant="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  return (
    <Template>
      <Head>
        <title>Pfadfinder Aufbaugruppe Rotfüchse Herxheim Impressum</title>
        <meta
          name="description"
          content="Impressum für die Pfadfinder Aufbaugruppe  Rotfüchse Herxheim BdP"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text variant="subtitle">Impressum</Text>
          <Text>
            <b>Bund der Pfadfinderinnen und Pfadfinder (BdP)</b>
            <br />
            <b>Landesverband Rheinland-Pfalz/Saar</b>
            <br />
            <br />
            <b>Aufbaugruppe Rotfüchse Herxheim</b>
            <br />
            <br />
            <b>EIN NAME VON EUCH</b>
            <br />
            STRASSE
            <br />
            PLZ <br />
            <Link href="mailto:timon@bdp-rps.de">MAIL</Link>
            <br />
            <br />
            Jugendverband
          </Text>
          <Text>
            <b>Gesetzliche Vertreter*innen:</b>
            <br />
            <br />
            NOCHMAL NAMEN
            <br />
            NOCHMAL NAMEN
            <br />
            NOCHMAL NAMEN
            <br />
            <br />
            <br />
            Der BdP Rheinland-Pfalz/Saar ist ein nichtrechtsfähiger Verein mit
            Sitz in Mainz. Er ist eine selbständige Untergliederung des Bundes
            der Pfadfinderinnen und Pfadfinder e.V. (BdP) mit Sitz in
            Immenhausen.
          </Text>
          <Text>
            <b>
              Verantwortlicher Redakteur für die Inhalte dieser Internetseite:
            </b>
            <br />
            NOCHMAL NAMEN
            <br />
            <Link href="mailto:timon@bdp-rps.de">MAIL</Link>
            <br />
          </Text>
          <Text>
            <b>Haftungshinweis:</b>
            <br />
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links.
            <br />
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren
            Betreiber*innen verantwortlich.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
