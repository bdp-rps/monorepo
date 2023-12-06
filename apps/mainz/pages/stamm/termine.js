import * as React from 'react'
import { Termine } from '@bdp-rps/shared'
import { Tile, Text, Box, IconWolfskopf, IconLilie, IconRr } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import getEvents from '../../utils/getTiliaEvents'

function groupEvents(events) {
  return events.reduce((groups, event) => {
    const year = new Date(event.startDate).getFullYear()

    if (!groups[year]) {
      groups[year] = []
    }

    groups[year].push(event)
    return groups
  }, {})
}

const Legende = () => {
  const iconSize = 20
  return (
    <Tile
      title="Legende"
      extend={{ position: 'fixed', top: '10px', right: '10px' }}>
      <Box space={2}>
        <Box direction="row" alignItems="center" space={2}>
          <IconWolfskopf size={iconSize} />
          <Text variant="note">alle Kinder die in einer Meute sind</Text>
        </Box>
        <Box direction="row" alignItems="center" space={2}>
          <IconLilie size={iconSize} />
          <Text variant="note">alle Kinder die in einer Sippe sind</Text>
        </Box>
        <Box direction="row" alignItems="center" space={2}>
          <IconRr size={iconSize} />
          <Text variant="note">alle Personen aus dem Stammesrat</Text>
        </Box>
      </Box>
    </Tile>
  )
}
export default function Page({ events }) {
  const groupedEvents = groupEvents(events)

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Legende />
        <Termine groupedEvents={groupedEvents} type="ICON" />
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const events = await getEvents()

  return {
    // alle 2 minuten
    revalidate: 120,
    props: {
      events,
    },
  }
}
