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

export default () => {
  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={15}>
        <Text variant="subtitle">Ranger/Rover</Text>
        <Spacer size={4} />
        <Box space={6}>
          <Box space={1}>
            <Text>
              {' '}
              Ranger und Rover tragen in den Gruppen die Verantwortung. Alle
              bringen sich mit ihren Fähigkeiten ein, z. B. als Gruppenleitung,
              bei der Fahrtenorganisation, Kassenverwaltung oder in der
              Lagertechnik. Dabei wird eine ganze Menge verlangt: Engagement,
              Zeiteinsatz, Kompromissbereitschaft, Teamfähigkeit, Motivation und
              unendlich viel Geduld. Ab 16 Jahren kann jede und jeder Ranger
              oder Rover sein. Egal ob Mann oder Frau, Arbeiterin oder Student,
              arm oder reich. So entsteht eine kunterbunter Haufen, der durch
              die Eigenarten und Talente jedes Einzelnen lebt und so manche
              Hürde locker meistert.
            </Text>
          </Box>
          <Box space={4}>
            <Text>
              Zurzeit gibt es in unserem Stamm ein aktive Ranger/Rover Runde:
            </Text>
            <Box space={4} justifyContent="center">
              <Box maxWidth={500}>
                <Tile title="Runde Franz">
                  <Text>Mitglieder: 25</Text>
                  <Text>
                    Gruppenstunde: 16:45 Uhr – 18:15 Uhr in der Hütte in
                    Steinborn{' '}
                  </Text>
                  <Text>Jahrgang: 1996 - 2003</Text>
                </Tile>
              </Box>
            </Box>
          </Box>
          <Text>
            Im Stamm „Franz von Sickingen“ werden Zusammenhalt und
            Familiengefühl hochgeschätzt und so arbeiten alle Mitglieder der
            R/R-Runde sehr eng miteinander zusammen.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
