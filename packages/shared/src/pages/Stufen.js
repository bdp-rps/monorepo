import * as React from 'react'

import { Box, Grid, Text, Tile } from '@bdp-rps/ui'

export default () => (
  <Box space={6}>
    <Box>
      <Text>
        <Text variant="category">Die Stufen Gruppeneinteilung im BdP</Text>
        <br />
        Im Bund der Pfadfinderinnen und Pfadfinder gibt es für Kinder,
        Jugendliche und junge Erwachsene jeweils eine eigene Stufe mit eigenem
        Programm und eigenen Zielen. Hier ein kurzer Überblick.
        <br />
      </Text>
    </Box>
    <Grid gap={4} columns={['1fr', , '1fr 1fr']}>
      <Tile
        title="Wölflinge (6 - 10 Jahre)"
        image="/images/wasserbomben.jpg"
        imageHeight={400}
        highlight>
        Die Jüngsten nennen sich Wölflinge und bilden Meuten mit zehn bis 30
        Kindern. Die Spielidee
        <br />
        liefert, wie man an den Namen erkennen kann, unter anderem das
        Dschungelbuch von Rudyard
        <br />
        Kipling. Spiele, Ausflüge, Zeltlager, Basteln, Verkleiden und noch
        vieles mehr sind Aktivitäten bei
        <br />
        den Meutentreffen. Wölflinge knüpfen Freundschaften, lernen sich in die
        Gruppe zu integrieren
        <br />
        und gestalten diese aktiv mit
      </Tile>
      <Tile
        title="Pfadfinder (11 - 15 Jahre)"
        image="/images/fahrt_landschft_2.jpg"
        imageHeight={400}
        highlight>
        Ungefähr Sechs bis acht Pfadfinderinnen und Pfadfinder bilden eine
        Sippe. Geländespiele, <br />
        Pfadfindertechniken, Naturkunde und vor allem gemeinsame Fahrten –
        einfach mit einem
        <br />
        Rucksack für ein Wochenende oder länger fortzufahren – sind Erlebnisse
        von denen noch lange
        <br />
        am Lagerfeuer erzählt wird. Dabei lernen die Jugendlichen, wie es ist,
        für sich und für andere
        <br />
        Verantwortung zu übernehmen. Sie gestalten ihre Gruppe und ihre
        Aktivitäten zunehmend selbst.
      </Tile>
      <Tile
        title="Ranger/Rover (16 - 25 Jahre)"
        image="/images/fahrt_landschft_3.jpg"
        imageHeight={400}
        highlight>
        Ranger und Rover sind die jungen Erwachsenen in unserem Bund. Die
        Meisten von ihnen haben <br />
        ein Amt inne, so sind sie zum Beispiel in der Gruppenleitung oder in der
        Stammesführung aktiv.
        <br />
        Sie übernehmen Verantwortung für Jüngere und für Stammesaktionen
        (ortsansässige Gruppe).
        <br />
        Etwa sieben Ranger/Rover bilden eine Runde. Sie planen die Aktivitäten
        ihrer Runde selbst.
      </Tile>
      <Tile
        title="Erwachsene (ab 25 Jahren)"
        image="/images/bula_2.jpg"
        imageHeight={400}
        highlight>
        Erwachsene Pfadfinderinnen und Pfadfinder wirken beratend, fördernd und
        als Fachleute für <br />
        besondere Aufgaben mit. Die ehrenamtlichen Verantwortlichen können sich
        außerdem zu
        <br />
        Freundeskreisen zusammenschließen, die in der Regel einem Stamm oder dem
        Landesverband
        <br />
        angegliedert sind.
      </Tile>
    </Grid>
  </Box>
)
