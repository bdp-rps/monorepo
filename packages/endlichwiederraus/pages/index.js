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
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Endlich wieder Raus</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout>
        <Box space={5} paddingTop={10} paddingBottom={10}>
          <Text intent="title">
            Endlich wieder raus,
            <br />
            endlich wieder Pfadfinden!
          </Text>
          <Box
            as="img"
            width={300}
            src="elemente/rosa/element_5.png"
            extend={{
              position: 'absolute',

              marginTop: -15,
              marginLeft: 30,
              zIndex: -1,
            }}
          />
          <br />

          <Box
            as="img"
            width={300}
            alignSelf="flex-end"
            src="elemente/türkis/element_1.png"
            extend={{
              position: 'absolute',
              transform: 'translateY(70px)',
              zIndex: -1,
            }}
          />
          <Box
            paddingTop={1}
            paddingBottom={1}
            extend={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <Text>
              Kinder und Jugendliche leiden besonders unter den Folgen der
              Pandemiemaßnahmen. Sie werden in ihrer Entwicklung ausgebremst.
              Unsere Jugendarbeit fördert Kreativität, Sozialkompetenz und
              Selbstbewusstsein. Seit über einem Jahr ist das nicht möglich.
              Pfadfinden fehlt!
            </Text>
          </Box>
          <br />
          <Text>
            <Box
              as="img"
              width={300}
              src="elemente/türkis/element_3.png"
              marginRight={[-20, , -13]}
              extend={{
                display: 'inline',
                marginLeft: -100,

                marginTop: -20,
                opacity: 1,
                float: 'left',
              }}
            />
            Für ihre mentale Gesundheit und Persönlichkeitsentwicklung brauchen
            Kinder und Jugendliche Pfadfinden im Bund der Pfadfinderinnen und
            Pfadfinder ist ein bewährtes ganzheitliches Programm für Kinder und
            Jugendliche. Es leistet seit Jahrzehnten einen wertvollen Beitrag
            zur Persönlichkeitsentwicklung von Millionen junger Menschen
            weltweit. Pfadfinden fördert die emotionalen, sozialen,
            intellektuellen und physischen Fähigkeiten. Es stärkt Kreativität,
            Teamfähigkeit und mentale Gesundheit. Es ist genau das richtige
            Programm, das unzählige Kinder und Jugendliche genau jetzt brauchen.
            <br />
            <br />
          </Text>
        </Box>
      </Layout>
      <Box
        extend={{ backgroundColor: theme.colors.rose }}
        paddingTop={15}
        paddingBottom={20}>
        <Layout>
          <Box
            as="img"
            alignSelf="center"
            src="elemente/blau/element_7.png"
            width={300}
            marginTop={[-46, , -42]}
            extend={{
              position: 'absolute',
            }}
          />
          <Text intent="alternative" align="center" color={theme.colors.blue}>
            Wir, die rund 30.000 Kinder, Jugendlichen und junge Erwachsene im
            Bund der Pfadfinderinnen und Pfadfinder e.V. mit unseren knapp 260
            Stämmen in fast ganz Deutschland, wollen Endlich wieder raus!
          </Text>
        </Layout>
      </Box>
      <Layout>
        <Box space={3} alignItems="center" paddingTop={10} paddingBottom={15}>
          <Text>Mach mit und erlebe jetzt das Abenteuer Pfadfinden!</Text>
          <Box alignSelf={['stretch', 'center']}>
            <Button href="https://meinbdp.de/pages/viewpage.action?pageId=11272333">
              Suche Jetzt einen Stamm in deiner Nähe!
            </Button>
          </Box>
        </Box>
        <Box
          as="hr"
          extend={{
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: theme.colors.turquoise,
          }}
        />
        <Box paddingTop={10} paddingBottom={20} space={5}>
          <Text intent="subtitle" align="center" color={theme.colors.blue}>
            # Endlich Wieder Raus
          </Text>
          <script src="https://embedsocial.com/js/iframe.js"></script>
          <div style={{ maxWidth: 1100 }}>
            <iframe
              style={{ border: 0, width: '100%', height: '100%' }}
              scrolling="no"
              src="https://embedsocial.com/facebook_album/pro_hashtag/4b34d8b045ea4fe0b086dc55e0681e9c8b01ba3f"></iframe>
          </div>
          <script>{`iFrameResize()`}</script>
        </Box>
      </Layout>
    </Template>
  )
}
