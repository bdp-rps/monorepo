import { Box, Button, Text, Spacer, Tile, Link } from '@bdp-rps/ui'

import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  return (
    <Template>
      <Head>
        <title>Pfadfinderaufbau Gruppe Mainz Links</title>
        <meta
          name="description"
          content="Links für die Pfadfinderaufbaugruppe Mainz"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text variant="subtitle">Links</Text>
          <Box space={4}>
            <Button href="https://wa.me/message/AFS5J32ZUO6ZI1">
              Whatsapp
            </Button>
            <Button href="mailTo:pfadfinden@bdp-mainz.de">
              pfadfinden[at]bdp-mainz.de
            </Button>
            <Button href="https://instagram.com/pfadfinden_mainz/">
              Instagram
            </Button>
            <Button href="/landesverband/blog/">
              Blogbeiträge Landesverband
            </Button>
            <Button href="/blog/stamm">Blogbeiträge Aufbaugruppe</Button>
            <Button href="/bdp/ausbildung">Ausbildung</Button>
            <Button href="https://www.watoto-kabisa.de/">Keniaprojekt</Button>
            <Button href="https://www.pfadfinden.de/">
              Unsere Bundesseite
            </Button>
            <Button href="https://p113-caldav.icloud.com/published/2/NTc3MjYxODIwNTc3MjYxOL9EAXRUtN8Jk2TOJ4lytVjeXa1g5MooZp2-uuLqbgfCiUN_eh0zpHmy3xgMbPZEyjPgbw3-p8HkOAKvXJAc5gU">
              LV-Kalender abonnieren
            </Button>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
