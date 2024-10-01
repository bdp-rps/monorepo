import Head from 'next/head'

import { Box, Text, Link } from '@bdp-rps/ui'

import Layout from '../../../components/Layout'
import Template from '../../../components/Template'

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Aufbaugruppe Tilia Mainz Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich die Pfadfinder Aufbaugruppe Tilia Mainz Neustadt BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Text>
        Wir konnten dein Interesse wecken und du hast Bock, bei uns mit zu
        machen?
        <br />
        Dann schreib uns eine Mail an{' '}
        <Link href="mailto:pfadfinden@bdp-mainz.de">
          pfadfinden[at]bdp-rps.de
        </Link>{' '}
        oder kontaktiere uns über Instagram unter @pfadfinden_mainz. Wir freuen
        uns auf dich in unseren Gruppenstunden!
        <br />
        <br />
        Oder kommst du schon regelmäßig zu unseren Gruppenstunden und hast genug
        Pfadfinderluft geschnuppert um zu wissen, dass du ein vollwertiges
        Mitglied werden möchtest? Dann klicke auf diesen{' '}
        <Link href="https://beitritt.pfadfinden.de/anmeldung/729">
          Link
        </Link>{' '}
        und fülle unseren digitalen Mitgliedsantrag aus!
      </Text>
    </Layout>
  </Template>
)
