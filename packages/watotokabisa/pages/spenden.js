import { Box, NavBar, NavBarItem, Text, useTheme, Spacer } from '@bdp-rps/ui'
import NextLink from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import Link from '../components/Link'
import BankDetails from '../components/BankDetails'

import image from '../public/images/spendenBg.jpg'

export default function Spenden() {
  const theme = useTheme()

  return (
    <Template image={image} title="Spenden!">
      <Head>
        <title>Spenden - Watoto Kabisa</title>
        <meta
          type="description"
          content="Hier erfahrt ihr wie ihr den Verein Watoto Kabisa finanziell unterstützen könnt."
        />
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <Box space={4}>
            <Text variant="subtitle">Wie du uns unterstürtzen kannst!</Text>
            <Box maxWidth={theme.maxReadWidth}>
              <Text>
                Neben dem Kauf von{' '}
                <Link href="/geschenkkarten">Geschenkkarten</Link> oder einer{' '}
                <Link href="/mitglied">Mitgliedschaft</Link> hast du natürlich
                auch die Möglichkeit, einmalig und zweckungebunden zu spenden.
                Es gibt so viele sinnvolle Einsatzmöglichkeiten für
                Spendengelder, dass wir sicher auch für DEINE Spende eine gute
                Idee haben, wie sie in Kenia helfen kann.
                <br />
                <br />
                Wenn du uns unsterstützen willst, dir allerdings nicht sicher
                bist, welche Geschenkkarte du am besten findest, dich aber auch
                nicht in einer Mitgliedschaft verpflichten willst, überweise
                doch einfach deine Spende auf folgendes Konto:
                <br />
                <br />
                <BankDetails />
                <br />
                <br />
                Spendenquittungen werden schnellstmöglich und ohne Mindestbetrag
                ausgestellt.
                <br />
                <Link href="mailto:kasse@watoto-kabisa.de">
                  Schick uns am besten eine E-Mail
                </Link>{' '}
                mit deinem Namen, deiner Adresse und dem gespenden Betrag. Das
                erleichtert und die Zuordnung und die Erstellung der Quittung.
                <br />
                <br />
                Das Konzept eines Fördervereins hat vor allem den Vorteil, feste
                Budgets in festen Zeiträumen sinnvoll einplanen und durch eine
                derartige Gewährleistung CADAMIC die nötige Sicherheit für
                weitere Projekte geben zu können. Unsere Mitglieder dürfen gerne
                mitarbeiten, genauso wichtig sind jedoch auch einfache zahlende
                Mitglieder, die mit ihrem frei gewählten Jahresbeitrag die
                Menschen in Kenia nach ihren Möglichkeiten nachhaltig
                unterstützen. Werde auch DU Mitglied von Watoto Kabisa und trage
                deinen Teil dazu bei, die Welt ein kleines bisschen besser zu
                hinterlassen als du sie vorgefunden hast!
              </Text>
            </Box>
          </Box>
        </Layout>
      </Box>
    </Template>
  )
}
