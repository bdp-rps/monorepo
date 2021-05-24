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
import HoverImage from '../components/HoverImage'
import Image from 'next/image'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template
      navImg='url("/images/geschenkkartenBg.jpg")'
      title="Geschenkkarten!">
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={4}>
          <Box extend={{ flexDirection: 'row' }} space={4}>
            <HoverImage
              width={500}
              height={500}
              imageURL="/images/schulspeisung.jpg">
              <Box
                space={2}
                extend={{
                  flex: 1,
                  backgroundColor: theme.colors.zompBg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text intent="subtitle" color="white">
                  Schulspeisung
                </Text>
                <Text intent="subtitle" color="white">
                  10€
                </Text>
              </Box>
            </HoverImage>
            <Box
              extend={{
                backgroundColor: theme.tokens.primary,
                alignItems: 'center',
              }}
              width={500}
              height={500}>
              <Text
                intent="subtitle"
                color="white"
                extend={{ paddingTop: '120' }}>
                Du möchtest einmalig spenden?
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                }}>
                Und mitentscheiden, was mit deinem Geld passiert? Über
                karten(at)watoto-kabisa.de kannst du Karten erwerben, deren
                Erlös komplett in Kenia landet. Diese Karten eignen sich
                übrigens auch super als Weihnachtsgeschenke, die lange Freude
                machen und wirklich sinnvoll sind.
              </Text>
            </Box>
          </Box>
          <Box extend={{ flexDirection: 'row' }} space={4}>
            <Box
              extend={{
                backgroundColor: theme.tokens.primary,
                alignItems: 'center',
              }}
              width={500}
              height={500}>
              <Text
                intent="subtitle"
                color="white"
                extend={{ paddingTop: '120' }}>
                Wie funktioniert das?
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                }}>
                Du suchst dir aus verschiedenen Möglichkeiten unterschiedlicher
                Preisklassen genau das aus, was du in Kenia verschenken willst.
                Als Dankeschön, und natürlich auch zum Weiterschenken geeignet,
                bekommst du eine hübsche Klapp-Postkarte, auf der erläutert
                wird, wozu deine Spende in Kenia gut ist.
              </Text>
            </Box>
            <HoverImage width={500} height={500} imageURL="/images/ziege.jpg">
              <Box
                space={2}
                extend={{
                  flex: 1,
                  backgroundColor: theme.colors.zompBg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text intent="subtitle" color="white">
                  Ziege
                </Text>
                <Text intent="subtitle" color="white">
                  30€
                </Text>
              </Box>
            </HoverImage>
          </Box>

          <Box extend={{ flexDirection: 'row' }} space={4}>
            <HoverImage
              width={500}
              height={500}
              imageURL="/images/gemuesegarten.jpg">
              <Box
                space={2}
                extend={{
                  flex: 1,
                  backgroundColor: theme.colors.zompBg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text intent="subtitle" color="white">
                  Gemüsegarten
                </Text>
                <Text intent="subtitle" color="white">
                  20€
                </Text>
              </Box>
            </HoverImage>
            <Box
              extend={{
                backgroundColor: theme.tokens.primary,
                alignItems: 'center',
              }}
              width={500}
              height={500}>
              <Text
                intent="subtitle"
                color="white"
                extend={{ paddingTop: '120' }}>
                Was bieten wir an?{' '}
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                }}>
                Schulspeisung 10€: Genauere Beschreibung der Schulspeisung. In
                1-2 Sätzen.
                <br />
                <br />
                Eine Ziege 30€: Genauere Beschreibung des Ziege. In 1-2 Sätzen.
                <br />
                <br />
                Gemüsegartens 20€: Genauere Beschreibung der Gemüsegartens. In
                1-2 Sätzen.
              </Text>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
