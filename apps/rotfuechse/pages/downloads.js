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

import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'

const TextBox = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      paddingTop={0.5}
      paddingBottom={0.5}
      paddingLeft={2}
      paddingRight={2}
      alignSelf="flex-start"
      extend={{ backgroundColor: theme.tokens.secondary }}>
      <Text variant="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Pfadfinder Stamm Rotfüchse Herxheim Downloads</title>
        <meta
          name="description"
          content="Downloadbereich für die Pfadfinder Stamm Mainz Neustadt BdP"
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        Downloads
      </Layout>
    </Template>
  )
}
