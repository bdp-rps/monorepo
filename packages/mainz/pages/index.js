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

import { getBlogposts, getBlogpostsMainz } from '../api/getBlogposts'

export default function page({ events, posts, postsMainz }) {
  const theme = useTheme()

  const [firstPost, ...otherPosts] = posts
  const [firstPostsMainz, ...otherPostsMainz] = postsMainz

  return (
    <Template>
      <Head>
        <title>Pfadfinder Aufbaugruppe Mainz Startseite</title>
        <meta
          name="description"
          content="Startseite für die Pfadfinder Aufbaugruppe Mainz Neustadt BdP"
        />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text variant="category">Ahoi und Hallo!</Text>
          <Text>
            Wir sind eine bunte Gruppe aus begeisterten BdP Pfadfinder*innen,
            die schon lange von einem Stamm in Mainz träumen. Pfadfinden
            bedeutet für uns Gemeinschaft, Freundschaften fürs Leben, Abenteuer
            und einen sicheren Ort, an dem wir neue Ideen ausprobieren und ganz
            wir selbst sein können.
            <br />
            Das wollen wir nicht nur für uns zurück in den Alltag holen, sondern
            vor allem vielen Kindern und Jugendlichen hier in der Stadt
            ermöglichen. Diese Idee soll nun endlich in die Tat umgesetzt
            werden: <br />
            <Text subStyle="emphasis">
              {' '}
              Wir treffen uns jeden Mittwoch, ausserhalb der Schulferien, ab 17
              Uhr auf dem Valenciaplatz in der Mainzer Neustadt.
          </Text>
        </Box>
        <Spacer size={8} />
        <Box
          marginBottom={4}
          basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
          <Tile
            title="Die Menschen hinter der Aufbaugruppe"
            image={`/images/sternhimmel_bula.jpg`}
            imageHeight={500}>
            <Box>
              <Text>
                Wir sind die Menschen hinter der Aufbaugruppe Mainz. Kontaktier
                uns doch gerne über{' '}
                <Link href="mailTo:pfadfinden@bdp-mainz.de">
                  pfadfinden[at]bdp-mainz.de
                </Link>
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
        <Text variant="subtitle">Das läuft bei uns.</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <PostTile
              highlight
              href={'/stamm/blog/' + firstPostsMainz.id}
              {...firstPostsMainz}
            />
          </Box>
          <Box grow={1} space={4}>
            {otherPostsMainz.splice(0, 2).map((post, index) => (
              <PostTile key={index} href={'/stamm/blog/' + post.id} {...post} />
            ))}
          </Box>
        </Box>
        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/stamm/blog" size="large">
            Weitere Beiträge
          </Button>
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
  const postsMainz = await getBlogpostsMainz()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      events,
      posts: posts.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
      postsMainz: postsMainz.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
    },
  }
}
