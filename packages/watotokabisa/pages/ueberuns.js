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

import HoverImage from '../components/HoverImage'
import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template navImg='url("/images/lvrps.jpg")' title="Über uns">
      <Head>
        <title>Über Uns - Watoto Kabisa</title>
        <meta type="description" content="Hier findet ihr Infos über uns." />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text intent="heading" color={theme.tokens.primary}>
            Wer sind wir?
          </Text>
          <Text>
            Im Jahr 2010 entschlossen sich die Pfadfinderinnen und Pfadfinder
            des Landesverbands Rheinland-Pfalz/Saar im Bund der Pfadfinderinnen
            und Pfadfinder dazu, dass sie als Landesverband gemeinsam ein
            soziales Projekt unterstützen wollen. Über verschiedene Umwege kamen
            die Pfadfinder*innen schließlich mit der Vorgängerorganisation von
            WONESU in Kontakt, die auch schon damals Schulspeisungen an einigen
            Grundschulen in Kisumu, der drittgrößten Stadt Kenias, durchführte.
            Fasziniert davon, wie sich mit sehr geringen finanziellen Mitteln
            (damals kostete eine Schulspeisung noch umgerechnet 22 Cent!) eine
            so immense Wirkung entfalten konnte, stürzte sich der Landesverband
            in die Arbeit: Allein in den ersten beiden Jahren konnten über
            50.000 Euro gesammelt und an die kenianische Organisation
            weitergegeben werden.
            <br />
            Um das Projekt auch langfristig zu unterstützen, existiert seit 2011
            der Förderverein Watoto Kabisa, der noch immer eng mit den
            Pfadfinder*innen zusammenarbeitet. Mittlerweile arbeiten wir mit der
            kenianischen NGO WONESU zusammen, die in Kisumu neben den
            Schulspeisungen auch noch weitere soziale und landwirtschaftliche
            Projekte durchführt (weitere Infos dazu findet ihr unter{' '}
            <Link href="/projekte">Projekte</Link>).
            <br />
            <br />
            Unser Team in Deutschland arbeitet komplett ehrenamtlich. So können
            wir sicherstellen, dass all unsere Spenden direkt nach Kenia fließen
            und dort denjenigen zur Hilfe kommen, die unsere Hilfe dringend
            brauchen.
          </Text>
          <Box direction={['column', , , 'row']} space={2}>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
              imageURL="/images/wonesu.png">
              <Box
                space={2}
                extend={{
                  flex: 1,
                  backgroundColor: theme.colors.zompBg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text intent="subtitle" color="white">
                  Wonesu
                </Text>
                <Text intent="subtitle" color="white">
                  Die NGO vor Ort
                </Text>
              </Box>
            </HoverImage>
            <HoverImage
              width={['100%', , 500]}
              height={[300, , 500]}
              imageURL="/images/watotokabisaVorstand.png">
              <Box
                space={2}
                extend={{
                  flex: 1,
                  backgroundColor: theme.colors.zompBg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text intent="subtitle" color="white">
                  Watoto Kabisa
                </Text>
                <Text intent="subtitle" color="white">
                  Unser Vorstand
                </Text>
              </Box>
            </HoverImage>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
