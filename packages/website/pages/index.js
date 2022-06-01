import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
  Button,
  ScrollView,
  Grid,
} from '@bdp-rps/ui'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'
import blogPosts from '../api/getBlogposts'

import getEvents from '../utils/getEvents'

import manifest from '../public/blog-manifest.json'
import getBlogposts from '../api/getBlogposts'

export default ({ events, posts }) => {
  const theme = useTheme()

  const [firstPost, ...otherPosts] = posts.data
  console.log('firstPost', firstPost)
  console.log('otherPosts', otherPosts)
  return (
    <Template>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text variant="category">Willkommen bei den Pfadfindern.</Text>
          <Text>
            Der Bund der Pfadfinderinnen und Pfadfinder ist der größte
            interkonfessionelle Pfadfinderbund in Deutschland.
            <br />
            In Rheinland-Pfalz und im Saarland sind wir mit 20 Gruppen präsent.
          </Text>
        </Box>
      </Layout>
      <Layout
        paddingTop={5}
        paddingBottom={10}
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text variant="subtitle">Das läuft bei uns.</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <PostTile highlight {...firstPost} />
          </Box>
          <Box grow={1} space={4}>
            {otherPosts.splice(0, 2).map((post, index) => (
              <PostTile key={index} {...post} />
            ))}
          </Box>
        </Box>
        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/blog" size="large">
            Weitere Beiträge
          </Button>
        </Box>
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const events = await getEvents()
  const posts = await getBlogposts()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      events,
      posts,
    },
  }
}
