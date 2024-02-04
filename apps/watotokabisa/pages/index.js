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
  El,
} from '@bdp-rps/ui'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import manifest from '../public/blog-manifest.json'

export default function () {
  const [firstPost, ...otherPosts] = manifest

  const theme = useTheme()

  return (
    <Template title="Karibu" subTitle="auf der Webseite von Watoto Kabisa">
      <Head>
        <title>Watoto Kabisa - Startseite</title>
        <meta name="title" content="Watoto Kabisa - Startseite" />
        <meta
          name="description"
          content="Watoto Kabisa ist ein Förderverein der es sich zur Aufgabe gemacht hat Kinder in Kenia zu unterstützen."
        />
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <Box space={4}>
            <Text variant="subtitle">Wer sind wir?</Text>
            <Box maxWidth={theme.maxReadWidth}>
              <Text>
                Wir sind der Förderverein Watoto Kabisa e.V.
                <br />
                2010 begannen die Pfadfinder des Landesverbands
                Rheinland-Pfalz/Saar im BdP, gezielt Projekte in Kenia zu
                unterstützen oder sogar zu initiieren. Dabei konnten bis heute
                große Erfolge erzielt werden. Diese gute Arbeit setzen wir als
                Förderverein in Kooperation mit unserer kenianischen
                Partnerorganisation WONESU auch langfristig fort.
                <br />
                <br />
                Wir arbeiten komplett ehrenamtlich und sorgen so dafür, dass
                hundert Prozent der Spenden auch nach Kenia gehen.
              </Text>
            </Box>
          </Box>
          <Box>
            <Text variant="subtitle" color={theme.tokens.primary}>
              Unsere Fahrtenchronik
            </Text>
            <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
              <Box grow={5} shrink={1}>
                <PostTile highlight {...firstPost} />
              </Box>
              <Box grow={1} shrink={1} space={4}>
                {otherPosts.splice(0, 2).map((post) => (
                  <PostTile key={post.id} {...post} />
                ))}
              </Box>
            </Box>
            <Box
              marginTop={9}
              alignSelf="flex-start"
              alignItems="flex-start"
              extend={{
                border: '2px solid black',
                borderRadius: theme.tokens.borderRadius,
              }}>
              <Button href="/blog" size="large">
                Weitere Beiträge
              </Button>
            </Box>
          </Box>
        </Layout>
      </Box>
    </Template>
  )
}
