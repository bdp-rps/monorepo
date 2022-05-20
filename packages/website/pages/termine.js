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

import Layout from '../components/Layout'
import Template from '../components/Template'

import getEvents from '../utils/getEvents'

export default function Page({ events }) {
  console.log(events)

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text variant="subtitle">Termine</Text>
          <Box space={4}>
            {events.map(
              ({ startDate, endDate, location, description, name, id }) => (
                <Box key={id} space={5} direction="row">
                  <Text color="blue">
                    <DateTime format="dd.MM">{startDate}</DateTime>
                    {' - '}
                    <DateTime format="dd.MM">{endDate}</DateTime>
                  </Text>
                  <Box>
                    <Text>{name}</Text>
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
