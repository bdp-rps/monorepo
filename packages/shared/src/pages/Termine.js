import * as React from 'react'

import { Box, Text, IconLocation, Button, DateTime } from '@bdp-rps/ui'

const EventItem = ({ events, year, type }) => {
  const getName = (name) => {
    switch (type) {
      case 'DEFAULT':
        return name
        break
      case 'ICON':
        return name.slice(0, -2)
        break

      default:
        break
    }
  }
  return (
    <Box space={4}>
      <Text variant="subtitle">{year}</Text>
      <Box space={[8, 6]}>
        {events[year].map(
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
                <Text subStyle="emphasis">{getName(name)<Icon}</Text>
                {description && (
                  <Text extend={{ fontStyle: 'italic' }}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
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
    </Box>
  )
}

export default ({ groupedEvents }) => {
  const { events, type } = groupedEvents

  return (
    <React.Fragment>
      <Box space={8} paddingBottom={10}>
        <Text variant="title">Termine</Text>
        <Box space={15}>
          {Object.keys(events).map((year) => (
            <EventItem events={events} year={year} type={type} />
          ))}
        </Box>

        <Box paddingTop={6} space={4}>
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
    </React.Fragment>
  )
}
