import Head from 'next/head'

import { Box, Text, Button, Link } from '@bdp-rps/ui'

import Layout from '../components/Layout'
import Template from '../components/Template'

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
      <Box space={8}>
        <Text>
          Der folgende Button leitet dich weiter auf unseren digitalen
          Mitgliedsantrag. Nicht erschrecken, diese Anwendung liegt auf unserer
          Bundesseite! Bitte fülle diesen aus, um Mitglied zu werden. Wir werden
          den Antrag in den nächsten Tagen prüfen und schalten ihn frei oder
          kommen gegebenenfalls bei Nachfragen auf dich zurück! Bei Fragen
          kannst du auch jederzeit in der Gruppenstunde auf uns zu kommen oder
          eine Mail an{' '}
          <Link href="mailTo:pfadfinden@bdp-mainz.de">
            pfadfinden[at]bdp-mainz.de
          </Link>{' '}
          schreiben.
        </Text>
        <Box alignItems="center" alignSelf="center">
          <Button
            href="https://beitritt.pfadfinden.de/anmeldung/729"
            target="_blank">
            Zum digitalen Mitgliedsantrag
          </Button>
        </Box>
      </Box>
    </Layout>
  </Template>
)
