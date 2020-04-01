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
  '/landesleitung': 'Landesleitung',
  '/staemme': 'Stämme',
  '/leitsaetze': 'Leitsätze',
  '/club-29': 'Club 29',
  '/watato-kabisa': 'Watato Kabisa',
  '/geschichte': 'Geschichte',
}

const staemme = [
  {
    name: 'Luchs',
    leader: 'Carina Bochynek (cätch)',
    location: '76857 Gossersweiler-Stein',
    website: 'https://stamm-luchs.de',
    contact: 'stammesleitung@stamm-luchs.de',
  },
  {
    name: 'Luchs',
    leader: 'Carina Bochynek (cätch)',
    location: '76857 Gossersweiler-Stein',
    website: 'https://stamm-luchs.de',
    contact: 'stammesleitung@stamm-luchs.de',
  },
  {
    name: 'Luchs',
    leader: 'Carina Bochynek (cätch)',
    location: '76857 Gossersweiler-Stein',
    website: 'https://stamm-luchs.de',
    contact: 'stammesleitung@stamm-luchs.de',
  },
  {
    name: 'Luchs',
    leader: 'Carina Bochynek (cätch)',
    location: '76857 Gossersweiler-Stein',
    website: 'https://stamm-luchs.de',
    contact: 'stammesleitung@stamm-luchs.de',
  },
]

export default () => {
  const router = useRouter()

  return (
    <Template>
      <NavBar intent="secondary">
        <Layout>
          <Box direction={['column', , 'row']} paddingLeft={5}>
            {Object.keys(subNav).map(path => (
              <NavBarItem
                href={'/landesverband' + path}
                active={router.pathname.indexOf(path) !== -1}>
                {subNav[path]}
              </NavBarItem>
            ))}
          </Box>
        </Layout>
      </NavBar>
      <Layout
        paddingTop={10}
        paddingBottom={10}
        grow={1}
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Box direction="row" wrap="wrap" space={4}>
          {staemme.map(({ leader, name, location, website, contact }) => (
            <Box
              marginBottom={4}
              basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
              <Tile title={name}>
                <Text>{location}</Text>
                <Box>
                  <Text>
                    Kontakt: <Link href={'mailto:' + contact}>{leader}</Link>
                  </Text>
                </Box>
                <Box>
                  <Link href={website}>{website}</Link>
                </Box>
              </Tile>
            </Box>
          ))}
        </Box>
      </Layout>
      <Box height={80} extend={{ backgroundColor: 'white' }} />
    </Template>
  )
}
