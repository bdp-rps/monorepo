import { useRouter } from 'next/router'

import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => {
  const router = useRouter()

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Text intent="subtitle">Watoto Kabisa</Text>
        <Spacer size={4} />
        <Box space={6}>
          <Box space={2}>
            <Text intent="category">Keniaprojekt</Text>

            <Text>
            Wir sind der Förderverein Watoto Kabisa!
            2010 begannen die Pfadfinder des Landesverbands Rheinland-Pfalz/Saar im BdP,
            gezielt Projekte in Kenia zu unterstützen oder sogar zu initiieren. 
            Wir arbeiten komplett ehrenamtlich und sorgen so dafür, 
            dass hundert Prozent der Spenden auch nach Kenia gehen.
            <br />
            Das Konzept eines Fördervereins hat vor allem den Vorteil,
            feste Budgets in festen Zeiträumen sinnvoll einplanen
            und durch eine derartige Gewährleistung CADAMIC
            die nötige Sicherheit für weitere Projekte geben zu können. Unsere Mitglieder dürfen gerne mitarbeiten, 
            genauso wichtig sind jedoch auch einfache zahlende Mitglieder, 
            die mit ihrem frei gewählten Jahresbeitrag die Menschen in Kenia nach ihren Möglichkeiten nachhaltig unterstützen. 
            Werde auch DU Mitglied von Watoto Kabisa und trage deinen Teil dazu bei,
            die Welt ein kleines bisschen besser zu hinterlassen als du sie vorgefunden hast!
            <br />
            
            <Link href="https://www.instagram.com/watotokabisa/">Hier</Link> geht es zum Watoto Kabisa Instagram-Kanal.
            
          </Text>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
