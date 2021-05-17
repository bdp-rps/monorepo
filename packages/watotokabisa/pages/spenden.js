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

import BankAccount from '../components/BankAccount'
import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template navImg='url("/images/spendenBg.jpg")' title="Spenden!">
      <Layout paddingTop={5} paddingBottom={5}>
        <Box
          space={4}
          extend={{
            width: '100%',
          }}>
          <Text intent="heading" color={theme.tokens.primary}>
            Wie du uns unterstürtzen kannst!
          </Text>
          <Text>
            Neben dem Kauf von Geschenkkarten oder einer Mitgliedschaft hast du
            natürlich auch die Möglichkeit, einmalig und zweckungebunden zu
            spenden. Es gibt so viele sinnvolle Einsatzmöglichkeiten für
            Spendengelder, dass wir sicher auch für DEINE Spende eine gute Idee
            haben, wie sie in Kenia helfen kann.
            <br />
            <br />
            Wenn du uns unsterstützen willst, dir allerdings nicht sicher bist,
            welche Geschenkkarte du am besten findest, dich aber auch nicht in
            einer Mitgliedschaft verpflichten willst, überweise doch einfach
            deine Spende auf folgendes Konto:
            <br />
            <br />
            <BankAccount />
            <Text>Spendenquittungen ab 50 Euro</Text>
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
