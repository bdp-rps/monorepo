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
      <Text intent="subtitle">Ausbildung im Landesverband</Text>
      <Spacer size={4} />
      <Box space={6}>
        <Box space={2}>
          <Text>
            Wir wollen junge Menschen zu verantwortungsbewussten, engagierten
            und kritischen Bürger*innen erziehen. Wir begleiten sie bei ihrer
            Suche nach Orientierung in unserer komplexen Gesellschaft.
            <br />
            Die Ausbildung des Führungsnachwuchses und der Gruppenführungen hat
            im BdP einen besonderen Stellenwert. Diese Ausbildung findet vor
            allem in der Praxis der Stämme statt. Eine wichtige und
            unverzichtbare Ergänzung findet sie im Kurs- und Ausbildungsprogramm
            des Landesverbandes Rheinland-Pfalz/Saar. Wir führen alle unsere
            Fortbildungen selbst durch, um sie optimal auf die Bedürfnisse der
            Teilnehmenden zuschneiden zu können.
            <br />
            Das Kurssystem des BdP besteht aus aufeinander aufbauenden Kursen.
            Diese ermöglichen durch den Erwerb praktischer und theoretischer
            Fähigkeiten für unterschiedliche Einsatzbereiche eine schrittweise
            und altersgerechte Übernahme von Verantwortungen. Bei unserer
            Ausbildung legen wir Wert auf individuelle Entwicklungsmöglichkeiten
            der Persönlichkeit. Der Erwerb von Schlüsselqualifikationen bietet
            eine wichtige Hilfestellung im privaten, beruflichen und
            gesellschaftlichen Leben.
            <br /> <br />
            In der Regel finden jährlich fünf einwöchige Ausbildungskurse in den
            Osterferien (SK, FaK, Sfk, Mfk und LEGO) statt, die vom
            Landesverband ausgerichtet werden. Darüber hinaus können
            Gruppenführungen ab 16 an weiteren Kursen des BdP teilnehmen.
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
