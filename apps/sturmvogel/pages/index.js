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
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import getEvents from '../utils/getEvents'

import { getBlogposts } from '../api/getBlogposts'
import { useState } from 'react'

export default function page({ events, posts }) {
  const theme = useTheme()

  const [firstPost, ...otherPosts] = posts

  return (
    <Template>
      <Head>
        <title>Pfadfinder Stamm Sturmvogel Birkenfeld Startseite</title>
        <meta
          name="description"
          content="Startseite für die Pfadfinder Stamm Sturmvogel Birkenfeld BdP"
        />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text variant="category">Ahoi und Hallo!</Text>
          <Text>
            Wir sind der Stamm Sturmvogel Birkenfeld, eine Pfadfindergruppe aus
            Birkenfeld und Mitglied im BdP . Wenn du Spaß an Abenteuern in der
            Natur, neuen Freunden, wilden Spielen und Singerunden am Feuer hast,
            kontaktiere uns gerne und komm zum Schnuppern zu uns in die
            Gruppenstunde!
          </Text>
          <Text>
            Also komm in unsere Gruppenstunde! Immer{' '}
            <Text subStyle="emphasis">Mittwochs</Text> außerhalb der Schulferien
            von <Text subStyle="emphasis">17:00 bis 18:30 Uhr</Text> an unserem
            Gruppenraum in der Liebfrauenkirche{' '}
            <Text subStyle="emphasis">Moselstraße 30</Text>!
          </Text>
        </Box>
        <Spacer size={8} />
        <Box
          marginBottom={4}
          basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
          <Tile
            title="Die Menschen hinter der Aufbaugruppe Rotfüchse"
            image={`/images/sturmvogel.jpeg`}
            imageHeight={800}>
            <Box>
              <Text>
                Wir sind die Menschen hinter der Pfadfinder Aufbaugruppe
                Rotfüchse Herxheim. Kontaktier uns doch gerne über{' '}
                <Link href="mailTo:pfadfinden@bdp-mainz.de">mailadresse</Link>
              </Text>
            </Box>
          </Tile>
        </Box>
      </Layout>
      <Layout
        grow={1}
        alignSelf="stretch"
        paddingTop={5}
        paddingBottom={10}
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text variant="subtitle">Das läuft in unserem Landesverband.</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <PostTile
              highlight
              href={'/landesverband/blog/' + firstPost.id}
              {...firstPost}
            />
          </Box>
          <Box grow={1} space={4}>
            {otherPosts.splice(0, 2).map((post, index) => (
              <PostTile
                key={index}
                href={'/landesverband/blog/' + post.id}
                {...post}
              />
            ))}
          </Box>
        </Box>
        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/landesverband/blog/" size="large">
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
      posts: posts.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
    },
  }
}
