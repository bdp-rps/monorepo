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

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Aufbaugruppe Tilia Mainz Liedgut</title>
      <meta
        name="description"
        content="Pfadfinder Aufbaugruppe Tilia Mainz Bereich für Liedgut"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Text>
        Wir sind der AK Liedgut des LV RPS. Wir möchten die musische Arbeit in
        unserem Landesverband stärken, neue Lieder in den LV bringen und
        Gitarrenspieler fördern. Eines unserer Projekte ist die Liedgut-App die
        unter folgendem Link für Landesverbands-Mitglieder zur Verfügung steht:{' '}
        <Link href="liedgut.bdp-rps.app">liedgut.bdp-rps.app</Link>. Als
        Arbeitskreis stehen wir euch zu allen Fragen und Anliegen zum Thema
        Liedgut als Ansprechpartner zur Seite. Wir sind erreichbar unter{' '}
        <Link href="mailto:liedgut@bdp-rps.de">liedgut[at]bdp-rps.de</Link>.
      </Text>
    </Layout>
  </Template>
)
