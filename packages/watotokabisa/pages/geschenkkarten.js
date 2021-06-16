import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
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
        <Box space={4} alignItems="center">
          <Box extend={{ flexDirection: ['column', , 'row'] }} space={4}>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
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
                ...theme.border,
                backgroundColor: theme.tokens.primary,
                alignItems: 'center',
              }}
              width={['100%', , 500]}
              height={['100%', , 500]}>
              <Text
                intent="subtitle"
                color="white"
                align={['center', , '']}
                extend={{ paddingTop: ['20', , '120'] }}>
                Du möchtest einmalig spenden?
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                  paddingBottom: '30',
                }}>
                Und mitentscheiden, was mit deinem Geld passiert? Über
                karten(at)watoto-kabisa.de kannst du Karten erwerben, deren
                Erlös komplett in Kenia landet. Diese Karten eignen sich
                übrigens auch super als Weihnachtsgeschenke, die lange Freude
                machen und wirklich sinnvoll sind.
              </Text>
            </Box>
          </Box>
          <Box extend={{ flexDirection: ['column', , , 'row'] }} space={4}>
            <Box
              extend={{
                ...theme.border,
                backgroundColor: theme.tokens.primary,
                alignItems: 'center',
              }}
              width={['100%', , 500]}
              height={['100%', , 500]}>
              <Text
                intent="subtitle"
                color="white"
                align={['center', , '']}
                extend={{ paddingTop: ['20', , '120'] }}>
                Wie funktioniert das?
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                  paddingBottom: '30',
                }}>
                Du suchst dir aus verschiedenen Möglichkeiten unterschiedlicher
                Preisklassen genau das aus, was du in Kenia verschenken willst.
                Als Dankeschön, und natürlich auch zum Weiterschenken geeignet,
                bekommst du eine hübsche Klapp-Postkarte, auf der erläutert
                wird, wozu deine Spende in Kenia gut ist.
              </Text>
            </Box>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
              imageURL="/images/ziege.jpg">
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

          <Box extend={{ flexDirection: ['column', , 'row'] }} space={4}>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
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
                ...theme.border,
                backgroundColor: theme.tokens.primary,
                alignItems: 'center',
              }}
              width={['100%', , 500]}
              height={['100%', , 500]}>
              <Text
                intent="subtitle"
                color="white"
                extend={{ paddingTop: '20' }}>
                Was bieten wir an?{' '}
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                  paddingBottom: '30',
                }}>
                Schulspeisung 10€: Die Schulspeisungen sorgen täglich für
                insgesamt fast 4000 satte Schülerinnen und Schüler. So lernt es
                sich besser und die Hoffnung auf eine erfolgreiche Zukunft
                steigt auch. Schon mit 10 Euro kann eine ganze Grundschule ein
                paar Tage lang versorgt werden.
                <br />
                <br />
                Eine Ziege 30€: Ziegen sind praktisch und nachhaltig: Sie sind
                sehr robust und liefern nahrhafte Milch, Dünger für die Felder,
                Fleisch und können bei akutem Geldbedarf verkauft werden.
                <br />
                <br />
                Gemüsegartens 20€: Ein Selbstversorgergarten bringt
                Unabhängigkeit und Gesundheit. Viele der Projektbauern und
                -bäuerinnen sorgen mit dem Anbau von verschiedenen Ost- und
                Gemüsesorten für eine ausgewogene Ernährung ihrer Familien und
                schaffen sich durch den Verkauf ihrer Erträge gleichzeitig eine
                stabile Einnahmequelle.
              </Text>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
