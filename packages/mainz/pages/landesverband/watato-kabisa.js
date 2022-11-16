import { useRouter } from 'next/router'
import Head from 'next/head'

import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => {
  const router = useRouter()

  return (
    <Template>
      <Head>
        <title>Pfadfinder Aufbaugruppe Mainz Watoto Kabisa</title>
        <meta
          name="description"
          content="Pfadfinder Aufbaugruppe Mainz Bereich für unser soziales Kenia Projekt Watoto Kabisa"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={15}>
        <Text variant="subtitle">Watoto Kabisa</Text>
        <Spacer size={4} />
        <Box space={6}>
          <Box space={2}>
            <Text variant="category">Keniaprojekt</Text>

            <Text>
              Wir sind der Förderverein Watoto Kabisa! 2010 begannen die
              Pfadfinder des Landesverbands Rheinland-Pfalz/Saar im BdP, gezielt
              Projekte in Kenia zu unterstützen oder sogar zu initiieren. Wir
              arbeiten komplett ehrenamtlich und sorgen so dafür, dass hundert
              Prozent der Spenden auch nach Kenia gehen.
              <br />
              Unsere Partnerorganisation WONESU investiert das Geld vor Ort in
              verschiedene Projekte, die mehreren tausend Kindern eine stabile,
              gesunde Lebens- und Lernumgebung verschaffen.
              <br />
              <Link href="https://www.instagram.com/watotokabisa/">
                Hier
              </Link>{' '}
              geht es zum Watoto Kabisa Instagram-Kanal.
            </Text>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
