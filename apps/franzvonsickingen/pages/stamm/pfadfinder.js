import { useRouter } from 'next/router'
import sippen from '../../data/sippen.json'
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
  const router = useRouter()
  const count = (
    <Text>
      {'Aktuell gibt es in unserem Stamm ' + sippen.length + ' Sippen:'}
    </Text>
  )
  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={15}>
        <Text variant="subtitle">Pfadfinder</Text>
        <Spacer size={4} />
        <Box space={6}>
          <Box space={1}>
            <Text>
              {' '}
              Das Pfadfinder*innendasein wird hauptsächlich bestimmt durch das
              Leben in der Sippe, eine Kleingruppe von 6-8 Pfadfinderinnen und
              Pfadfindern. Die wöchentlichen Gruppenstunden, die Fahrten und die
              Lager gehören zu den wichtigsten Erlebnissen. Innerhalb des
              Stammes bilden die Pfadfinder die mittlere Altersstufe, die in
              ihrer Entwicklung zwar nicht mehr so verspielt wie die Wölflinge,
              aber auch noch nicht so erwachsen sind wie die Ranger und Rover.
              Das macht die Pfadfinderarbeit zu einer sehr abwechslungsreichen,
              spannenden und vor allem verantwortungsvollen Aufgabe.
            </Text>
          </Box>
          <Box space={4}>
            <Text variant="category">Unsere Sippen auf einen Blick</Text>
            {count}
            <Box space={4} justifyContent="center">
              {sippen.map((sippe) => {
                return (
                  <Box maxWidth={500}>
                    <Tile title={sippe.name}>
                      <Text>Seit: {sippe.date}</Text>
                      <Text>
                        Sippenführer*innen:{' '}
                        {sippe.leader.map((leader) => leader + ' ')}
                      </Text>
                      <Text>Gruppenstunde: {sippe.meeting}</Text>
                      <Text>Jahrgang: {sippe.year}</Text>
                      <Text>
                        Besondere Aktionen:{' '}
                        {sippe.campaigns.map((campaign) => campaign + ' ')}
                      </Text>
                    </Tile>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
