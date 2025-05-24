import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import { toEuro } from '../utils/currency'
import rates from '../utils/rates'

const Page = dynamic(() => import('@lorren-js/core').then((p) => p.Page))
const Text = dynamic(() => import('@lorren-js/core').then((p) => p.Text))
const Box = dynamic(() => import('@lorren-js/core').then((p) => p.Box))
const Image = dynamic(() => import('@lorren-js/core').then((p) => p.Image))
const DateTime = dynamic(() =>
  import('@lorren-js/core').then((p) => p.DateTime)
)
const Br = dynamic(() => import('@lorren-js/core').then((p) => p.Br))

export default function Teilnahme({
  name,
  event,
  birthday,
  role,
  address,
  startDate,
  endDate,
}) {
  return (
    <Page size="A4" orientation="portrait" padding="20mm">
      <Box direction="row" space={4} justifyContent="space-between">
        <Box grow={1} shrink={1} basis={0} space={4} marginTop={0.75}>
          <Text variant="note" color="blue">
            BdP Landesverband Rheinland-Pfalz/Saar • Landesvorstand c/o Robin
            Weser • Rintheimer Hauptstraße 25, 76131 Karlsruhe
          </Text>
        </Box>
        <Box grow={0} shrink={0} basis={180}>
          <Text align="right" subStyle="emphasis" color="blue">
            Bund der Pfadfinderinnen
            <Br />
            und Pfadfinder e.V.
            <Br />
            Landesverband
            <Br />
            Rheinland-Pfalz/Saar
          </Text>
        </Box>
      </Box>
      <Box paddingTop={4}>
        <Text align="right" variant="paragraph">
          <DateTime format="dd. MMMM yyyy" locale="de-DE">
            {new Date()}
          </DateTime>
        </Text>
      </Box>
      <Box paddingTop={6} paddingBottom={6}>
        <Text subStyle="emphasis" style={{ fontSize: 18 }}>
          Teilnahmebestätigung
        </Text>
      </Box>
      <Box>
        <Text variant="paragraph">
          Hiermit bestätigte ich, dass {name}, geboren am{' '}
          <DateTime format="dd.MM.yyyy">{birthday}</DateTime> und wohnhaft in{' '}
          {address}, vom <DateTime format="dd.MM">{startDate}</DateTime> -{' '}
          <DateTime format="dd.MM.yyyy">{endDate}</DateTime> unsere
          Veranstaltung
          {event} als{' '}
          {role === 'leader' ? 'Veranstaltungsleitung' : 'Teilnehmer*in'}{' '}
          besucht hat.
          <Br />
          <Br />
          Für weitere Fragen stehe ich gerne zur Verfügung.
          <Br />
          <Br />
          Mit freundlichen Grüßen
        </Text>
        <Image
          src="https://forms.bdp-rps.app/images/unterschrift_robin.png"
          height={50}
          style={{ marginLeft: -8, marginTop: 10 }}
        />

        <Text variant="paragraph">
          Robin Weser
          <Br />
          Landesvorsitzender
          <Br />
          Landesverband Rheinland-Pfalz/Saar
          <Br />
          robin@bdp-rps.de
          <Br />
          +49 0151 64330341
        </Text>
        <Image
          src="https://forms.bdp-rps.app/images/stempel.png"
          height={130}
          style={{
            position: 'absolute',
            bottom: 0,
            marginBottom: 28,
            marginLeft: 90,
          }}
        />
      </Box>
    </Page>
  )
}
