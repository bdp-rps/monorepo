import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
  Grid,
  El,
} from '@bdp-rps/ui'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import Template from '../components/Template'
import ImageCard from '../components/ImageCard'
import TextCard from '../components/TextCard'

import image from '../public/images/projekte.jpg'
import schulspeisung from '../public/images/schulspeisungen.jpg'
import landwirtschaft from '../public/images/landwirtschaftsprojekt.jpg'
import hopepads from '../public/images/hopepads.jpg'

export default function Page() {
  const theme = useTheme()

  return (
    <Template image={image} title="Unsere Projekte!">
      <Head>
        <title>Watoto Kabisa - Projekte</title>
        <meta type="title" content="Watoto Kabisa - Projekte" />
        <meta
          type="description"
          content="Unsere Projekte in Kenia auf einen Blick."
        />
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingVertical={20}>
          <Grid gap={8} columns={['1fr', , '1fr 1fr']}>
            <ImageCard minHeight={400} image={schulspeisung} />
            <TextCard>
              <Text color="white" variant="subtitle">
                Schulspeisungen
              </Text>
              <Text color="white">
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
            </TextCard>
            <TextCard>
              <Text color="white" variant="subtitle">
                Landwirtschafstprojekt
              </Text>
              <Text color="white">
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
            </TextCard>
            <ImageCard minHeight={400} image={landwirtschaft} />
            <ImageCard minHeight={400} image={hopepads} />
            <TextCard>
              <Text color="white" variant="subtitle">
                Hope Pads
              </Text>
              <Text color="white">
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
            </TextCard>
          </Grid>
        </Layout>
      </Box>
    </Template>
  )
}
