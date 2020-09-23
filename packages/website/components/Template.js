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

import Layout from './Layout'

const nav = {
  '/': 'Startseite',
  '/blog': 'Blog',
  '/bdp': 'BdP',
  '/landesverband': 'Landesverband',
  '/digital': 'Digital',
  '/kontakt': 'Kontakt',
}

const subNavs = {
  '/bdp': {
    '/pfadfinden': 'Pfadfinden?',
    '/stufen': 'Stufen',
    '/versprechen': 'Versprechen',
    '/ausbildung': 'Ausbildung',
    '/geschichte': 'Geschichte',
  },
  '/digital': {
    '/downloads': 'Downloads',
    'https://cloud.bdp-rps.de': 'Cloud',
    '/apps': 'Apps',
  },
  '/landesverband': {
    '/landesleitung': 'Landesleitung',
    '/staemme': 'Stämme',
    '/leitsaetze': 'Leitsätze',
    '/club-29': 'Club 29',
    '/watato-kabisa': 'Watato Kabisa',
    '/geschichte': 'Geschichte',
  },
}

export default function Template({ children }) {
  const router = useRouter()
  const theme = useTheme()

  const isSubPage = Object.keys(subNavs).find(
    path => router.pathname.indexOf(path) !== -1
  )

  return (
    <Box grow={1}>
      <Box
        paddingBottom={[1, , , 2]}
        minHeight={[200, , , 230]}
        height={['12vh', , , '20vh']}
        extend={{
          backgroundImage: 'url("/images/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: '70% 50%',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <Layout>
          <Box
            paddingTop={3}
            paddingLeft={3}
            paddingBottom={2}
            paddingRight={3}
            extend={{
              backgroundColor: theme.colors.yellow,
              alignSelf: 'flex-start',
            }}>
            <Text intent="title" height={1} color={theme.colors.blue}>
              BdP LV RPS
            </Text>
          </Box>
        </Layout>
      </Box>
      <NavBar>
        <Layout>
          <Box direction={['column', , 'row']}>
            {Object.keys(nav).map(path => (
              <NavBarItem
                href={path}
                active={
                  path === '/'
                    ? router.pathname === '/'
                    : router.pathname.indexOf(path) !== -1
                }>
                {nav[path]}
              </NavBarItem>
            ))}
          </Box>
        </Layout>
      </NavBar>
      {isSubPage ? (
        <NavBar intent="secondary">
          <Layout>
            <Box direction={['column', , 'row']} paddingLeft={5}>
              {Object.keys(subNavs[isSubPage]).map(path => (
                <NavBarItem
                  href={path.indexOf('http') === -1 ? isSubPage + path : path}
                  active={router.pathname.indexOf(path) !== -1}>
                  {subNavs[isSubPage][path]}
                </NavBarItem>
              ))}
            </Box>
          </Layout>
        </NavBar>
      ) : null}
      <Box grow={1}>{children}</Box>
      <Layout
        paddingTop={10}
        paddingBottom={10}
        extend={{ backgroundColor: theme.tokens.secondary }}>
        <Box space={10}>
          <Box direction={['column', , , 'row']} space={[14, , , 0]}>
            <Box space={2} grow={1}>
              <Text intent="category">Rechtliches</Text>
              <Spacer size={0.5} />
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/kontakt">Kontakt</Link>
            </Box>
            <Box space={2} grow={1}>
              <Text intent="category">Andere Seiten</Text>
              <Spacer size={0.5} />
              <Link href="https://www.pfadfinden.de">Bundesseite</Link>
              <Link href="http://www.ljr-rlp.de">
                Landesjugendring Rheinland-Pfalz
              </Link>
              <Link href="http://www.landesjugendring-saar.de">
                Landesjugendring Saarland
              </Link>
              <Link href="https://www.stiftungpfadfinden.de">
                Stiftung Pfadfinden
              </Link>
              <Link href="https://www.ausruester-eschwege.de">
                Der Ausrüster
              </Link>
            </Box>
            <Box space={2} grow={1}>
              <Text intent="category">Soziales</Text>
              <Spacer size={0.5} />
              <Link href="https://www.facebook.com/bdprps">Facebook</Link>
              <Link href="https://instagram.com/bdp_lv_rps/">Instagram</Link>
            </Box>
          </Box>
          <Text>
            Copyright &copy; {new Date().getFullYear()} BdP Landesverband
            Rheinland-Pfalz/Saarland
          </Text>
        </Box>
      </Layout>
    </Box>
  )
}
