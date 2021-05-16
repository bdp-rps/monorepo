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

export default function Template({ children }) {
  const router = useRouter()
  const theme = useTheme()

  return (
    <Box grow={1}>
      <Layout>
        <Box
          paddingTop={3}
          paddingBottom={4}
          paddingRight={3}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          space={5}>
          <Box as="img" src="/ewr.png" maxWidth={80} width="100%" />
          <Box as="img" src="/logo.png" maxWidth={[220, 250]} width="100%" />
        </Box>
      </Layout>

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
