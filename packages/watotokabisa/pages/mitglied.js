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
import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template navImg='url("/images/mitgliedBg.jpg")' title="Mitglied werden!">
      <Head>
        <title>Mitglied werden - Watoto Kabisa</title>
        <meta
          type="description"
          content="Alle Infos wie ihr Mitglied bei Watoto Kabisa werden könnt."
        />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text intent="heading" color={theme.tokens.primary}>
            Wie kannst auch DU Mitglied werden?
          </Text>
          <Text>
            Ein Förderverein lebt von seinen Mitgliedern. Wir freuen uns über
            jeden, der sich in irgend einer Art aktiv ins Projekt einbringen
            möchte – genauso aber auch über jeden, der uns einfach nur
            finanziell unterstützt. Dabei kannst du selbst entscheiden, wie hoch
            dein Mitgliedsbeitrag sein soll, schließlich sollen auch Schüler und
            Studenten mitmachen können. Einen Euro im Monat kann jeder
            entbehren, in Kenia kann er jedoch schon viel bewirken.
            <br />
            <br />
            Lade einfach das{' '}
            <Link href="/files/beitrittsformular.pdf" download>
              Beitrittsformular
            </Link>{' '}
            herunter und fülle alle Felder aus. Dann steckst du es in einen
            frankierten Umschlag (wenn er ein Fenster hat brauchst du noch nicht
            einmal eine Adresse draufzuschreiben), und ab geht die Post!
            Solltest du noch Fragen haben, helfen wir dir per Mail
            (info(at)watoto-kabisa.de) auch gerne weiter. Vielen Dank für deine
            Unterstützung!
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
