import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Grid,
  Tile,
  Link,
} from '@bdp-rps/ui'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import manifest from '../public/blog-manifest.json'

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
      <Layout
        paddingTop={10}
        paddingBottom={20}
        extend={{ backgroundColor: 'rgb(240, 240, 240)' }}>
        <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
          {manifest.map((post) => (
            <PostTile key={post.id} {...post} />
          ))}
        </Grid>
      </Layout>
    </Template>
  )
}
