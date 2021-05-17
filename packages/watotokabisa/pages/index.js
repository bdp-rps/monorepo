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
            konnten große Erfolge erzielt und in zwei Jahren über 50.000 Euro
            bereitgestellt werden. Diese gute Arbeit setzen wir als Förderverein
            auch langfristig fort.
            <br />
            <br />
            Wir arbeiten komplett ehrenamtlich und sorgen so dafür, dass hundert
            Prozent der Spenden auch nach Kenia gehen.
            <br />
            <br />
            Das Konzept eines Fördervereins hat vor allem den Vorteil, feste
            Budgets in festen Zeiträumen sinnvoll einplanen und durch eine
            derartige Gewährleistung CADAMIC die nötige Sicherheit für weitere
            Projekte geben zu können. Unsere Mitglieder dürfen gerne
            mitarbeiten, genauso wichtig sind jedoch auch einfache zahlende
            Mitglieder, die mit ihrem frei gewählten Jahresbeitrag die Menschen
            in Kenia nach ihren Möglichkeiten nachhaltig unterstützen. Werde
            auch DU Mitglied von Watoto Kabisa und trage deinen Teil dazu bei,
            die Welt ein kleines bisschen besser zu hinterlassen als du sie
            vorgefunden hast!
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
