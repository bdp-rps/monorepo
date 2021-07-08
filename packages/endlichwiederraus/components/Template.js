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
  '/abenteuer': 'Abenteuer',
  '/freundschaft': 'Freundschaft',
  '/wirksamkeit': 'Wirksamkeit',
  '/natur': 'Natur',
  '/werte': 'Werte',
  '/teilhabe': 'Teilhabe',
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
    '/intakt': 'Intakt',
    // '/geschichte': 'Geschichte',
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
        direction="row"
        extend={{
          backgroundImage: 'url("/images/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: '70% 50%',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Layout alignSelf="flex-start">
          <Box
            paddingTop={3}
            paddingLeft={3}
            paddingBottom={2}
            paddingRight={3}
            extend={{
              backgroundColor: theme.colors.yellow,
              alignSelf: 'flex-start',
            }}>
            <Box as="img" src="/ewr.png" maxWidth={180} width="100%" />
          </Box>
        </Layout>
        <Layout alignSelf="flex-start">
          <Box>
            <Box
              marginRight={5}
              as="img"
              src="elemente/rosa/element_8.png"
              maxWidth={[270, 300]}
              width="100%"
            />
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
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={10}>
          <Box direction={['column', , , 'row']} space={[14, , , 0]}>
            <Box space={2} grow={1}>
              <Link href="https://www.pfadfinden.de/impressum/">Impressum</Link>
              <Link href="https://www.pfadfinden.de/datenschutzerklaerung/">
                Datenschutz
              </Link>
            </Box>
          </Box>
          <Text>
            Copyright &copy; {new Date().getFullYear()} Bund der Pfadfinderinnen
            und Pfadfinder (BdP)
          </Text>
        </Box>
      </Layout>
    </Box>
  )
}
