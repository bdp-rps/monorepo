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
      <Text variant="subtitle">Förderverein</Text>
      <Spacer size={4} />
      <Box space={6}>
        <Box space={2}>
          <Text>
            Unterstützt wird der Stamm vom Förderverein der Pfadfinder Eisenberg
            e.V., welcher die Organisation der Teilnahme an Festen wie z.B. dem
            Mai-Singen in Kerzenheim, dem Angerfest in Steinborn oder dem
            Autofreien Eistal in Eisenberg übernimmt. Von dem erwirtschafteten
            Erlös werden Ausrüstungsgegenstände wie Zelte, Seile usw. für den
            Stamm angeschafft. Mehr Infos findest du{' '}
            <Link href="http://foerderverein.pfadfinder-eisenberg.de/">
              hier.
            </Link>{' '}
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
