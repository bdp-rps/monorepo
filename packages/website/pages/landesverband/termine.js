import {
  Box,
  Button,
  Text,
  Spacer,
  Tile,
  Link,
  DateTime,
  IconLocation,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import getEvents from '../../utils/getEvents'

export default function Page({ events }) {
  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text variant="subtitle">Termine</Text>

          <Box space={[8, 6]}>
            {events.map(
              ({ startDate, endDate, location, description, name, id }) => (
                <Box key={id} space={[0, 5]} direction={['column', 'row']}>
                  <Text color="blue" extend={{ width: 100 }}>
                    <DateTime format="dd.MM">{startDate}</DateTime>
                    {startDate !== endDate && (
                      <>
                        {' - '}
                        <DateTime format="dd.MM">{endDate}</DateTime>
                      </>
                    )}
                  </Text>
                  <Box>
                    <Text subStyle="emphasis">{name}</Text>
                    {description && (
                      <Text extend={{ fontStyle: 'italic' }}>
                        {description}
                      </Text>
                    )}
                    {location && (
                      <Box direction="row" alignItems="center" space={1}>
                        <IconLocation fill="grey2" extend={{ marginTop: -2 }} />
                        <Text color="grey3">{location}</Text>
                      </Box>
                    )}
                  </Box>
                </Box>
              )
            )}
          </Box>

          <Box paddingTop={6} space={2}>
            <Text>
              Keine Termine mehr verpassen?
              <br />
              Abonniere den LV-Kalender auf deinem Smartphone!
            </Text>
            <Box alignSelf="flex-start">
              <Button href="https://p113-caldav.icloud.com/published/2/NTc3MjYxODIwNTc3MjYxOL9EAXRUtN8Jk2TOJ4lytVjeXa1g5MooZp2-uuLqbgfCiUN_eh0zpHmy3xgMbPZEyjPgbw3-p8HkOAKvXJAc5gU">
                LV-Kalender abonnieren
              </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const events = await getEvents()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      events,
    },
  }
}
