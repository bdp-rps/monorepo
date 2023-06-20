import React, { Fragment } from 'react'
import { Page, Text, Box } from '@lorren-js/core'

function DataDisplay({ label, children }) {
  return (
    <Box direction="row" space={4}>
      <Box width={130}>
        <Text>{label}:</Text>
      </Box>
      <Box>
        <Text>{children}</Text>
      </Box>
    </Box>
  )
}

export default function Reisekosten({
  name,
  event,
  location,
  startDate,
  endDate,
  destination,
}) {
  return (
    <Page
      size="A4"
      orientation="portrait"
      padding="15mm"
      extend={{
        fontSize: 12,
        lineHeight: 1.2,
      }}>
      <Box direction="row" space={4} justifyContent="space-between">
        <Text>Bund der Pfadfinderinnen und Pfadfinder</Text>
        <Text>Landesverband Rheinland-Pfalz/Saar</Text>
      </Box>
      <Box alignSelf="center" paddingTop={5} paddingBottom={5}>
        <Text subStyle="emphasis">Reisekostenabrechnung RPS</Text>
      </Box>
      <Box
        space={1}
        paddingBottom={3}
        style={{
          borderBottomStyle: 'solid',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}>
        <DataDisplay label="Name">{name}</DataDisplay>
        <DataDisplay label="Veranstaltung">{event}</DataDisplay>
        <DataDisplay label="Veranstaltungsort">{location}</DataDisplay>
        <DataDisplay label="Veranstaltungstermin">
          {startDate} - {endDate}
        </DataDisplay>
        <DataDisplay label="Reiseweg">{destination}</DataDisplay>
      </Box>
    </Page>
  )
}
