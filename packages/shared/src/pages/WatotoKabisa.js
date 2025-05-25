import * as React from 'react'

import { Box, Text, Spacer, Link } from '@bdp-rps/ui'

export default () => (
  <React.Fragment>
    <Text variant="subtitle">Watoto Kabisa</Text>
    <Spacer size={4} />
    <Box space={6}>
      <Box space={2}>
        <Text variant="category">Keniaprojekt</Text>

        <Text>
          Wir sind der Förderverein Watoto Kabisa! 2010 begannen die
          Pfadfinder*innen des Landesverbands Rheinland-Pfalz/Saar im BdP,
          gezielt Projekte in Kenia zu unterstützen oder sogar zu initiieren.
          Wir arbeiten komplett ehrenamtlich und sorgen so dafür, dass hundert
          Prozent der Spenden auch nach Kenia gehen.
          <br />
          Unsere Partnerorganisation WONESU investiert das Geld vor Ort in
          verschiedene Projekte, die mehreren tausend Kindern eine stabile,
          gesunde Lebens- und Lernumgebung verschaffen.
          <br />
          <Link href="https://www.instagram.com/watotokabisa/">Hier</Link> geht
          es zum Watoto Kabisa Instagram-Kanal.
        </Text>
      </Box>
    </Box>
  </React.Fragment>
)
