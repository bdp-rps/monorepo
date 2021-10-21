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
import Head from 'next/head'
import HoverImage from '../components/HoverImage'
import Image from 'next/image'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template navImg='url("/images/projekte.jpg")' title="Unsere Projekte!">
      <Head>
        <title>Projekte - Watoto Kabisa</title>
        <meta
          type="description"
          content="Hier findet ihr Infos zu unsereren Projekten in Kenia."
        />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={4} alignItems="center">
          <Box extend={{ flexDirection: ['column', , 'row'] }} space={4}>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
              imageURL="/images/schulspeisungen.jpg"></HoverImage>
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
                extend={{ paddingTop: ['10', , '40'] }}>
                Schulspeisungen
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                  paddingBottom: '30',
                }}>
                Hunger ist nicht gerade der ideale Lernbegleiter. Deshalb
                erhalten über 3500 Kinder von WONESU täglich eine warme Portion
                Porridge. Sehr simpel, aber wahnsinnig effektiv: Seitdem das
                Projekt gestartet ist, haben sich die Schüler*Innenzahlen an
                einigen der teilnehmenden Grundschulen verdoppelt, die Kinder
                nehmen regelmäßiger und konzentrierter am Unterricht teil und
                bringen dementsprechend bessere Leistungen. Insgesamt also ein
                kleiner Lichtblick in Sachen Zukunftsaussichten. Als wegen der
                Corona-Pandemie zwischen März und Oktober 2020 alle Schulen
                geschlossen wurden, hat WONESU das Projekt kurzerhand umgestellt
                und mit den Fördergeldern Versorgungspakete für 200 besonders
                betroffene Familien geschnürt.
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
                extend={{ paddingTop: ['10', , '5'] }}>
                Landwirtschafstprojekt
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                  paddingBottom: '30',
                }}>
                Was mit der Unterstützung einzelner Familien durch Ziegenzucht
                begann, hat mittlerweile in der Region Kisumu West zu einem
                echten Wandel beigetragen: In insgesamt sechs
                Solidargemeinschaften arbeiten jeweils rund zehn Familien
                zusammen. Gemeinsam werden Gemüse und Obst angebaut, Ziegen,
                Hühner, Hasen und teilweise sogar Milchkühe gehalten, kurz:
                Zusammen schaffen sich die Familien eine stabile
                Lebensgrundlage. Wie wertvoll das Projekt ist zeigt sich
                besonders jetzt während der Corona-Pandemie. Im letzten Jahr
                haben sich einige der Gruppen sogar durch ein internes
                Banksystem eine Art Krankenversicherung geschaffen - für eine
                Einzelfamilie kaum zu realisieren. Unterstützt werden sie von
                unserer kenianischen Partnerorganisation WONESU vor Ort
                mittlerweile vor allem durch Fortbildungen. 2021 stehen große
                Veränderungen an: Fünf der sechs Projektgruppen werden
                unabhängig, für sie gilt das Projekt als erfolgreich
                abgeschlossen. Neue Gruppen stehen schon in den Startlöchern!
              </Text>
            </Box>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
              imageURL="/images/landwirtschaftsprojekt.jpg"></HoverImage>
          </Box>

          <Box extend={{ flexDirection: ['column', , 'row'] }} space={4}>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
              imageURL="/images/hopepads.jpg"></HoverImage>
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
                Hope Pads
              </Text>
              <Text
                color="white"
                extend={{
                  paddingTop: '30',
                  paddingLeft: '30',
                  paddingRight: '30',
                  paddingBottom: '30',
                }}>
                Worum geht's hier? Mit dem Projekt HOPE PADs erhalten über 1500
                Schülerinnen der Projektschulen wiederverwendbare Binden. Das
                Ziel: Die Mädchen sollen auch während ihrer Menstruation die
                Schule besuchen können und sich nicht für das nötige Kleingeld
                prostituieren müssen, um die Hygieneartikel zu kaufen. Was hier
                schier unglaublich klingt, ist für viele der jungen Frauen
                leider Alltag. Und so bewegt dieses simple Stück Stoff eine
                ganze Menge. Die Nachfrage steigt, sodass WONESU überlegt, die
                selbst hergestellten Binden sogar in den Vierteln rund um die
                Schulen zu verkaufen.
              </Text>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
