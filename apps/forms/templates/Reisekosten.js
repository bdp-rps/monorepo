import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import { toEuro } from '../utils/currency'
import rates from '../utils/rates'

const Page = dynamic(() => import('@lorren-js/core').then((p) => p.Page))
const Text = dynamic(() => import('@lorren-js/core').then((p) => p.Text))
const Box = dynamic(() => import('@lorren-js/core').then((p) => p.Box))
const DateTime = dynamic(() =>
  import('@lorren-js/core').then((p) => p.DateTime)
)
const Br = dynamic(() => import('@lorren-js/core').then((p) => p.Br))

function DataDisplay({ label, children }) {
  return (
    <Box direction="row" space={4}>
      <Box width={140}>
        <Text>{label}:</Text>
      </Box>
      <Box>
        <Text>{children}</Text>
      </Box>
    </Box>
  )
}

function Cell({ children, isLast }) {
  return (
    <Box
      grow={1}
      shrink={1}
      basis={0}
      style={{
        borderStyle: 'solid',
        borderColor: 'rgb(100, 100, 100)',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 0,
        borderRightWidth: isLast ? 1 : 0,
        textAlign: 'right',
      }}
      padding={2}>
      <Text>{children}</Text>
    </Box>
  )
}
function Row({ values, isLast }) {
  return (
    <Box
      direction="row"
      style={{
        borderBottomWidth: isLast ? 1 : 0,
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgb(100, 100, 100)',
      }}>
      <Cell>{values[0]}</Cell>
      <Cell>{values[1]}</Cell>
      <Cell isLast>{values[2]}</Cell>
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
  place,
  date,
  iban,
  note,
  routes,
}) {
  const totalPrice = routes.reduce(
    (total, { kilometer, personen }) => total + kilometer * rates[personen],
    0
  )

  return (
    <Page size="A4" orientation="portrait" padding="15mm">
      <Box direction="row" space={10} justifyContent="space-between">
        <Text subStyle="emphasis">
          Bund der Pfadfinderinnen
          <Br />
          und Pfadfinder e.V.
        </Text>

        <Text align="right" subStyle="emphasis">
          Landesverband
          <Br />
          Rheinland-Pfalz/Saar
        </Text>
      </Box>
      <Box alignSelf="center" paddingTop={10} paddingBottom={10}>
        <Text subStyle="emphasis" style={{ fontSize: 18 }}>
          Reisekostenabrechnung - Auto
        </Text>
      </Box>
      <Box
        space={2}
        paddingBottom={6}
        style={{
          borderBottomStyle: 'solid',
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
        }}>
        <DataDisplay label="Name">{name}</DataDisplay>
        <DataDisplay label="Veranstaltung">{event}</DataDisplay>
        <DataDisplay label="Veranstaltungsort">{location}</DataDisplay>
        <DataDisplay label="Veranstaltungstermin">
          <DateTime format="dd.MM.yyyy">{startDate}</DateTime> -{' '}
          <DateTime format="dd.MM.yyyy">{endDate}</DateTime>
        </DataDisplay>
        <DataDisplay label="Reiseweg">{destination}</DataDisplay>
        {note && <DataDisplay label="Kommentar">{note}</DataDisplay>}
        <DataDisplay label="IBAN">
          {iban.length > 0 ? iban.replace(/ /g, '') : 'bekannt'}
        </DataDisplay>
      </Box>
      <Box paddingTop={5} paddingBottom={5}>
        <Box paddingBottom={2}>
          <Text style={{ fontSize: 12 }}>
            1 = 0,17€ • 2 = 0,18€ • 3 = 0,20€ • 4 = 0,22€ • 5 = 0,25€ • 6+ =
            0,28€
          </Text>
        </Box>
        <Box>
          <Row values={['Kilometer', 'Anzahl', 'Betrag']} isLast />
          {routes.map(({ kilometer, personen }, index) => (
            <Row
              values={[
                kilometer + ' km',
                personen,
                toEuro(kilometer * rates[personen]),
              ]}
              isLast={index === routes.length - 1}
            />
          ))}
        </Box>
        <Box alignItems="flex-end" padding={2} paddingRight={2.25}>
          <Text subStyle="emphasis" style={{ fontSize: 16 }}>
            {toEuro(totalPrice)}
          </Text>
        </Box>
      </Box>
      <Box
        fixed
        position="absolute"
        padding="15mm"
        bottom={0}
        left={0}
        right={0}>
        <Box
          direction="row"
          alignItems="baseline"
          justifyContent="space-between">
          <Box>
            <Box
              width={200}
              paddingBottom={1}
              style={{ borderBottom: '1px solid lightgrey' }}>
              <Text>
                {place}, <DateTime format="dd.MM.yyyy">{date}</DateTime>
              </Text>
            </Box>
            <Box paddingTop={1}>
              <Text>Ort, Datum</Text>
            </Box>
          </Box>

          <Box>
            <Box
              width={250}
              paddingBottom={1}
              style={{ borderBottom: '1px solid lightgrey' }}>
              <Text>digital erstellt</Text>
            </Box>
            <Box paddingTop={1}>
              <Text>Unterschrift</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  )
}
