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
      <Text>
        <br />
        <Link href="/files/Aufnahmeantrag.pdf" download>
          Aufnahmeantrag
        </Link>
        <br />
        <br />
        <Link href="/files/Paedagogische-Konzeption.pdf" download>
          Pädagogisches Konzept
        </Link>
        <br />
        <br />
        <Link href="/files/Packliste.pdf" download>
          Packliste
        </Link>
        <br />
      </Text>
    </Layout>
  </Template>
)
