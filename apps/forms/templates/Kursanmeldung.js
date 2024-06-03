import React from 'react'
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

export default function Kursanmeldung({
  name,
  pfadiname,
  landesverband,
  startDate,
  endDate,
  date,
  iban,
  note,
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
          Kursanmeldung
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
        <DataDisplay label="Pfadiname">{pfadiname}</DataDisplay>
        <DataDisplay label="Landesverband">{landesverband}</DataDisplay>
      </Box>
      <Box paddingTop={5} paddingBottom={5}></Box>
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
