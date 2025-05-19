import * as React from 'react'
import Head from 'next/head'
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
  '/bdp': 'BdP',
  '/landesverband': 'Landesverband',
  'https://cloud.bdp-rps.de': 'Cloud',
  '/landesverband/landesleitung': 'Kontakt',
}

const subNavs = {
  '/bdp': {
    '/pfadfinden': 'Pfadfinden?',
    '/stufen': 'Stufen',
    '/versprechen': 'Versprechen',
    '/ausbildung': 'Ausbildung',
    '/geschichte': 'Geschichte',
  },

  '/landesverband': {
    '/landesleitung': 'Landesleitung',
    '/staemme': 'Stämme',
    '/leitsaetze': 'Leitsätze',
    '/club-29': 'Club 29',
    '/watato-kabisa': 'Watoto Kabisa',
    '/intakt': 'Intakt',
    '/liedgut': 'Liedgut',
    '/termine': 'Termine',
    // '/mailverteiler': 'Mailverteiler',
    // '/weltreise': 'RPS Weltreise',
  },
}

function getTitle(path) {
  if (path.length === 2) {
    return subNavs?.['/' + path[0]]?.['/' + path[1]]
  }
  return nav?.['/' + path[0]]
}

export default function Template({
  children,
  backgroundImage = 'url("/images/bg.jpg")',
  description,
}) {
  const router = useRouter()
  const theme = useTheme()

  const isSubPage = Object.keys(subNavs).find(
    (path) => router.pathname.indexOf(path) !== -1
  )

  let title = getTitle(router.pathname.substr(1).split('/'))

  return (
    <>
      <Head>
        <link rel="canonical" href="https://bdp-rps.de" />
        {description && <meta name="description" content={description} />}
        {title && <title>{title} | BdP LV RPS</title>}
      </Head>
      <Box grow={1}>
        <Box
          paddingBottom={[1, , , 2]}
          minHeight={[200, , , 230]}
          height={['12vh', , , '20vh']}
          extend={{
            backgroundImage: backgroundImage,
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
              <Text variant="title" height={1} color={theme.colors.blue}>
                BdP LV RPS
              </Text>
            </Box>
          </Layout>
        </Box>
        <NavBar>
          <Layout>
            <Box direction={['column', , 'row']}>
              {Object.keys(nav).map((path) => (
                <NavBarItem
                  key={path}
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
        {isSubPage && (
          <NavBar intent="secondary">
            <Layout>
              <Box direction={['column', , 'row']} paddingLeft={5}>
                {Object.keys(subNavs[isSubPage]).map((path) => (
                  <NavBarItem
                    key={path}
                    href={path.indexOf('http') === -1 ? isSubPage + path : path}
                    active={router.pathname.indexOf(path) !== -1}>
                    {subNavs[isSubPage][path]}
                  </NavBarItem>
                ))}
              </Box>
            </Layout>
          </NavBar>
        )}
        <Box grow={1}>{children}</Box>
        <Layout
          paddingTop={10}
          paddingBottom={10}
          extend={{ backgroundColor: theme.tokens.secondary }}>
          <Box space={10}>
            <Box direction={['column', , , 'row']} space={[14, , , 0]}>
              <Box space={2} grow={1}>
                <Text variant="category">Rechtliches</Text>
                <Spacer size={0.5} />
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
                <Link href="/landesverband/landesleitung">Kontakt</Link>
              </Box>
              <Box space={2} grow={1}>
                <Text variant="category">Andere Seiten</Text>
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
                <Text variant="category">Soziales</Text>
                <Spacer size={0.5} />
                <Link href="https://instagram.com/pfadfinden_rps/">
                  Instagram
                </Link>
              </Box>
            </Box>
            <Text>
              Copyright &copy; {new Date().getFullYear()} BdP Landesverband
              Rheinland-Pfalz/Saarland
            </Text>
          </Box>
        </Layout>
      </Box>
    </>
  )
}
