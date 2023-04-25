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
      <Box space={6}>
        <Box space={2}>
          <Text variant="subtitle">Allgemein</Text>

          <Link href="/files/Aufnahmeantrag.pdf" download>
            Aufnahmeantrag
          </Link>
          <Link href="/files/Paedagogische-Konzeption.pdf" download>
            Pädagogisches Konzept
          </Link>
          <Link href="/files/Packliste.pdf" download>
            Packliste
          </Link>
        </Box>
        <Box space={2}>
          <Text variant="subtitle">Lageranmeldungen</Text>
          <Link href="/files/PfilaElternabend.pdf" download>
            Landespfingstlager
          </Link>
        </Box>
      </Box>
    </Layout>
  </Template>
)
