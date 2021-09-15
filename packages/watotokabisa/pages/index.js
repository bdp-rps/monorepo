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
} from '@bdp-rps/ui'
import NextLink from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import manifest from '../public/blog-manifest.json'
const [firstPost, ...otherPosts] = manifest

export default () => {
  const theme = useTheme()

  return (
    <Template
      navImg='url("/images/bg.jpg")'
      title="Karibu"
      subTitle="auf der Webseite von Watoto Kabisa">
      <Layout paddingTop={5} paddingBottom={5}>
        <Box
          space={4}
          extend={{
            width: '100%',
          }}>
          <Text intent="heading" color={theme.tokens.primary}>
            Wer sind wir?
          </Text>
          <Text>
            Wir sind der Förderverein Watoto Kabisa! 2010 begannen die
            Pfadfinder des Landesverbands Rheinland-Pfalz/Saar im BdP, gezielt
            Projekte in Kenia zu unterstützen oder sogar zu initiieren. Dabei
            konnten bis heute große Erfolge erzielt werden. Diese gute Arbeit
            setzen wir als Förderverein in Kooperation mit unserer kenianischen
            Partnerorganisation WONESU auch langfristig fort.
            <br />
            <br />
            Wir arbeiten komplett ehrenamtlich und sorgen so dafür, dass hundert
            Prozent der Spenden auch nach Kenia gehen.
          </Text>
        </Box>
      </Layout>
      <Layout grow={1} paddingTop={5} paddingBottom={10} alignSelf="stretch">
        <Text intent="subtitle" color={theme.tokens.primary}>
          Unsere Fahrtenchronik
        </Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <PostTile highlight {...firstPost} />
          </Box>
          <Box grow={1} space={4}>
            {otherPosts.splice(0, 2).map(post => (
              <PostTile key={post.id} {...post} />
            ))}
          </Box>
        </Box>
        <Box
          marginTop={9}
          alignSelf="flex-start"
          alignItems="flex-start"
          extend={{ ...theme.border }}>
          <Button href="/blog" size="large">
            Weitere Beiträge
          </Button>
        </Box>
      </Layout>
    </Template>
  )
}
