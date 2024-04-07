import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Grid,
} from '@bdp-rps/ui'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import Link from '../components/Link'
import ImageCard from '../components/ImageCard'

import image from '../public/images/lvrps.jpg'
import vorstand from '../public/images/watotokabisaVorstand.png'
import wonesu from '../public/images/wonesu.png'

export default () => {
  const theme = useTheme()

  return (
    <Template image={image} title="Über uns">
      <Head>
        <title>Watoto Kabisa - Über uns</title>
        <meta name="title" content="Watoto Kabisa - Über uns" />
        <meta
          name="description"
          content="Der Verein stellt sich und seine Partner-NGO in Kenia vor."
        />
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <Box space={4}>
            <Text variant="subtitle">Das sind wir!</Text>
            <Box maxWidth={theme.maxReadWidth}>
              <Text>
                Im Jahr 2010 entschlossen sich die Pfadfinderinnen und
                Pfadfinder des Landesverbands Rheinland-Pfalz/Saar im Bund der
                Pfadfinderinnen und Pfadfinder dazu, dass sie als Landesverband
                gemeinsam ein soziales Projekt unterstützen wollen. Über
                verschiedene Umwege kamen die Pfadfinder*innen schließlich mit
                der Vorgängerorganisation von WONESU in Kontakt, die auch schon
                damals Schulspeisungen an einigen Grundschulen in Kisumu, der
                drittgrößten Stadt Kenias, durchführte. Fasziniert davon, wie
                sich mit sehr geringen finanziellen Mitteln (damals kostete eine
                Schulspeisung noch umgerechnet 22 Cent!) eine so immense Wirkung
                entfalten konnte, stürzte sich der Landesverband in die Arbeit:
                Allein in den ersten beiden Jahren konnten über 50.000 Euro
                gesammelt und an die kenianische Organisation weitergegeben
                werden.
                <br />
                Um das Projekt auch langfristig zu unterstützen, existiert seit
                2011 der Förderverein Watoto Kabisa, der noch immer eng mit den
                Pfadfinder*innen zusammenarbeitet. Mittlerweile arbeiten wir mit
                der kenianischen NGO WONESU zusammen, die in Kisumu neben den
                Schulspeisungen auch noch weitere soziale und
                landwirtschaftliche Projekte durchführt (weitere Infos dazu
                findet ihr unter <Link href="/projekte">Projekte</Link>).
                <br />
                <br />
                Unser Team in Deutschland arbeitet komplett ehrenamtlich. So
                können wir sicherstellen, dass all unsere Spenden direkt nach
                Kenia fließen und dort denjenigen zur Hilfe kommen, die unsere
                Hilfe dringend brauchen.
              </Text>
            </Box>
          </Box>
          <Grid columns={['1fr', , '1fr 1fr']} gap={8}>
            <ImageCard image={wonesu} height={500}>
              <Text variant="subtitle" color="white" align="center">
                Wonesu
                <br />
                Die NGO vor Ort
              </Text>
            </ImageCard>
            <ImageCard image={vorstand} height={500}>
              <Text variant="subtitle" color="white" align="center">
                Watoto Kabisa
                <br />
                Unser Vorstand
              </Text>
            </ImageCard>
          </Grid>
        </Layout>
      </Box>
    </Template>
  )
}
