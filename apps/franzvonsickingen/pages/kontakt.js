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
      <Layout paddingTop={10} paddingBottom={10}>
        <Text>
          Daniel Christmann
          <br />
          <Link action="mailto:christmanndaniel1@gmail.com">
            christmanndaniel1@gmail.com
          </Link>
        </Text>
      </Layout>
    </Template>
  )
}
