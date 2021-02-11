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
  ScrollView
} from '@bdp-rps/ui'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import manifest from '../public/blog-manifest.json'
const [firstPost, ...otherPosts] = manifest

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
      <Text intent="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text intent="category">Willkommen bei den Pfadfindern.</Text>
          <Text>
            Der Bund der Pfadfinderinnen und Pfadfinder ist der größte
            interkonfessionelle Pfadfinderbund in Deutschland.
            <br />
            In Rheinland-Pfalz und im Saarland sind wir mit 20 Gruppen präsent.
          </Text>
        </Box>
      </Layout>
      <Layout
        grow={1}
        paddingTop={5}
        paddingBottom={10}
        alignSelf="stretch"
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text intent="subtitle">Das läuft bei uns.</Text>
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

        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/blog" size="large">
            Weitere Beiträge
          </Button>
        </Box>
      </Layout>
      <Layout paddingTop={10} paddingBottom={12}>
        <Text intent="subtitle">Das steht an.</Text>
        <ScrollView>
          <Box
            paddingTop={5}
            space={[10, , , 10]}
            direction={['column', , , 'row']}>
            <Box grow={1}>
              <TextBox>Juni</TextBox>
              <Text>26-27. LAT</Text>
            </Box>
            <Box grow={1}>
              <TextBox>Juli</TextBox>
              <Text>10.07. RR Grillen</Text>
              <Text>16-19.07 lawöla </Text>
            </Box>
            <Box grow={1}>
              <TextBox>September</TextBox>
              <Text>11 RR Rave</Text>
            </Box>
          </Box>
        </ScrollView>
      </Layout>
    </Template >
  )
}
