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

import Layout from '../../../components/Layout'
import Template from '../../../components/Template'
import PostTile from '../../../components/PostTile'

import { getBlogposts } from '../../../api/getBlogposts'

export default ({ posts }) => {
  const theme = useTheme()

  return (
    <Template>
      <Layout
        paddingTop={10}
        paddingBottom={20}
        extend={{ backgroundColor: 'rgb(240, 240, 240)' }}>
        <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
          {posts.map((post) => (
            <PostTile
              key={post.id}
              href={`/landesverband/blog/${post.id}`}
              {...post}
            />
          ))}
        </Grid>
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const posts = await getBlogposts()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      posts: posts.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
    },
  }
}
