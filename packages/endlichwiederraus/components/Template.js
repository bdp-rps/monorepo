import { useRouter } from 'next/router'
import NextLink from 'next/link'
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

const colors = {
  '/': 'blueLight',
  '/abenteuer': 'orange',
  '/freundschaft': 'rose',
  '/wirksamkeit': 'yellowLight',
  '/natur': 'turquoise',
  '/werte': 'blueLight',
  '/teilhabe': 'orange',
}

export default function Template({ children }) {
  const router = useRouter()
  const theme = useTheme()

  return (
    <Box grow={1}>
      <Box
        direction={['column', , 'row']}
        alignItems={['flex-start', , 'center']}
        space={[2, , 10]}
        paddingBottom={[0, , 4]}>
        <Box
          paddingTop={3}
          paddingLeft={3}
          paddingBottom={2}
          paddingRight={3}
          height={[90 + 24, , 136 + 24]}
          extend={{
            backgroundColor: theme.colors.yellow,
          }}>
          <Box as="img" width={[120, , 180]} height="auto" src="/ewr.png" />
        </Box>
        <Box direction="row" wrap="wrap">
          {Object.keys(nav).map(path => (
            <NextLink href={path}>
              <Box
                as="a"
                padding={['4px 12px', , 3]}
                extend={{
                  cursor: 'pointer',
                  '& span': {
                    borderBottomWidth: 4,
                    borderBottomColor:
                      router.pathname === path
                        ? theme.colors[colors[path]]
                        : 'transparent',
                    borderBottomStyle: 'solid',
                  },
                  ':hover': {
                    '& span': {
                      borderBottomColor: theme.colors[colors[path]],
                    },
                  },
                }}>
                <Text
                  as="span"
                  extend={{
                    marginTop: 2,
                    paddingBottom: 0,
                    paddingTop: 2,
                  }}>
                  {nav[path]}
                </Text>
              </Box>
            </NextLink>
          ))}
        </Box>
      </Box>

      <Box grow={1}>{children}</Box>
      <Layout
        paddingTop={15}
        paddingBottom={10}
        extend={{ backgroundColor: theme.colors.grey8 }}>
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
          <Box>
            <img src="logo.png" width={300} height="auto" />
          </Box>
        </Box>
      </Layout>
    </Box>
  )
}
