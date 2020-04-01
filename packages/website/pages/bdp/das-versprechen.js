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

const subNav = {
  '/pfadfinden': 'Pfadfinden?',
  '/die-stufen': 'Stufen',
  '/das-versprechen': 'Versprechen',
  '/geschichte': 'Geschichte',
}

export default () => {
  const router = useRouter()

  return (
    <Template>
      <NavBar intent="secondary">
        <Layout>
          <Box direction="row" paddingLeft={5}>
            {Object.keys(subNav).map(path => (
              <NavBarItem
                href={'/bdp' + path}
                active={router.pathname.indexOf(path) !== -1}>
                {subNav[path]}
              </NavBarItem>
            ))}
          </Box>
        </Layout>
      </NavBar>
      <Layout paddingTop={10} paddingBottom={10}>
        Versprechen
      </Layout>
    </Template>
  )
}
