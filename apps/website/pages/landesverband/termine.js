import * as React from 'react'
import { Termine } from '@bdp-rps/shared'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import getEvents from '../../utils/getEvents'

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
export default function Page({ events }) {
  const groupedEvents = groupEvents(events)

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Termine groupedEvents={groupedEvents} />
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
