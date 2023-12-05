import { Box, Grid } from '@bdp-rps/ui'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import manifest from '../public/blog-manifest.json'

import image from '../public/images/verkehr.jpg'

export default () => {
  return (
    <Template title="Unsere Fahrtenchronik" image={image}>
      <Head>
        <title>Watoto Kabisa - Chronik</title>
        <meta type="title" content="Watoto Kabisa - Chronik" />
        <meta
          type="description"
          content="Aktuelle Erfahrungen und Berichte direkt aus Kenia."
        />
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingVertical={20}>
          <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
            {manifest.map((post) => (
              <PostTile key={post.id} {...post} />
            ))}
          </Grid>
        </Layout>
      </Box>
    </Template>
  )
}
