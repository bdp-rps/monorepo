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
import NextLink from 'next/link'
import Head from 'next/head'

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
      <Head>
        <title>Blog - Watoto Kabisa</title>
        <meta
          type="description"
          content="Hier findet ihr Berichte aus Kenia."
        />
      </Head>
      <Text intent="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  const theme = useTheme()

  return (
    <Template title="Unsere Fahrtenchronik" navImg='url("/images/verkehr.jpg")'>
      <Layout paddingTop={10} paddingBottom={20}>
        <Box space={5}>
          {manifest.map(post => (
            <PostTile key={post.id} {...post} />
          ))}
        </Box>
      </Layout>
    </Template>
  )
}
