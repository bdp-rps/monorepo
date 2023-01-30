import * as React from 'react'
import { useRouter } from 'next/router'

import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={15}>
      <Text variant="subtitle">Für Ehemalige</Text>
      <Spacer size={4} />

      <Box space={6}>
        <Box space={2}>
          <Text variant="category">Club 29</Text>

          <Text>
            Pfadfinden hält zwar jung, aber dennoch kommt irgendwann die Zeit
            das Feld der aktiven Gruppenarbeit den jüngeren zu überlassen.
            Schließlich verstehen wir uns als eine Jugendbewegung. Aber es gibt
            sie, und es braucht sie, die Älteren und die Alten– unsere
            Ehemaligen. Sie übernehmen Verantwortung im Landesverband, bereite
            Aktionen vor, bilden die Jugendlichen auf Kursen aus und sind
            einfach da, wenn sie gebraucht werden.
            <br />
            In unserem Landesverband haben sich viele ältere Pfadfinderinnen und
            Pfadfinder im Club 29 zusammengefunden. Aber auch jüngere Ehemalige
            sind nicht nur gern gesehene Gäste bei Aktionen, sondern auch ein
            wichtiger Teil unseres LVs.
            <br />
            <br /> Du bist Ehemaliger und würdest gerne wieder mehr
            Informationen aus dem LV bekommen?
            <br />
            Meld dich{' '}
            <Link href="mailto:vorstand@bdp-rps.de">bei unserem Vorstand</Link>.
            Wir freuen uns sehr, von Dir zu hören.
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
