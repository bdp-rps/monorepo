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
// name: name.value,
// event: event.value,
// gender: gender.value,
// boss: boss.value,
// group: group.value,
// startDate: startDate.value,
// endDate: endDate.value,
export default function Sonderurlaub({
  name,
  event,
  gender,
  boss,
  birthday,
  group,
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
          <Text variant="address">{boss}</Text>
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
          Antrag auf Sonderurlaub
        </Text>
      </Box>
      <Box>
        <Text variant="paragraph">
          Der Bund der Pfadfinderinnen und Pfadfinder ist mit ca. 30 000
          Mitgliedern der größte interkonfessionelle Pfadfinderverband in der
          Bundesrepublik. Mit seiner ehrenamtlichen Jugendarbeit ist der BdP mit
          seinen Gruppen in allen Bundesländern vertreten.
          <Br />
          <Br />
          Ein wichtiger Bestandteil des Verbandslebens sind die regelmäßigen
          Lager, Fahrten und Ausbildungskurse. Auch dieses Jahr finden wieder
          einige davon statt. So auch vom{' '}
          <DateTime format="dd.MM">{startDate}</DateTime> -{' '}
          <DateTime format="dd.MM.yyyy">{endDate}</DateTime> unser {event}.
          <Br />
          <Br />
          {gender === 'female' ? 'Ihre Mitarbeiterin' : 'Ihr Mitarbeiter'}{' '}
          {name}, wohnhaft in {address}, geboren am{' '}
          <DateTime format="dd.MM.yyyy">{birthday}</DateTime>, ist seit vielen
          Jahren aktives Mitglied in unserem Landesverband und übernimmt seitdem
          ehrenamtlich Verantwortung im BdP Stamm {group}. Als wichtige
          Führungskraft ist {gender === 'female' ? 'sie' : 'er'} für die Planung
          im Vorfeld sowie die erfolgreiche Durchführung der oben genannten
          Aktion unentbehrlich.
          <Br />
          <Br />
          Ich möchte Sie daher herzlich bitten,{' '}
          {gender === 'female' ? 'Frau' : 'Herrn'} {name} in der Zeit vom{' '}
          <DateTime format="dd.MM">{startDate}</DateTime> -{' '}
          <DateTime format="dd.MM.yyyy">{endDate}</DateTime> Sonderurlaub gemäß
          §3 Abs. 3 des Gesetzes Nr. 1412 über Sonderurlaub für ehrenamtliche
          Mitarbeiterinnen und Mitarbeiter in der Jugendarbeit vom 08. Juli 1998
          zu gewähren. Sie würden damit einen wichtigen Beitrag zur
          Unterstützung unserer Jugendarbeit leisten.
          <Br />
          <Br />
          Für weitere Fragen stehe ich gerne zur Verfügung.
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
