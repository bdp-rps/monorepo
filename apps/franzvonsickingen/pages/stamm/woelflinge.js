import { useRouter } from 'next/router'
import stammesleitung from '../../data/stammesleitung.json'
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

const representatives = []
stammesleitung.map((member) => {
  if (member.position == 'Wölflingsbeauftragte*r') {
    representatives.push(member)
  }
})
export default () => {
  const router = useRouter()

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={15}>
        <Text variant="subtitle">Wölflinge</Text>
        <Spacer size={4} />
        <Box space={6}>
          <Box space={1}>
            <Text>
              {' '}
              Wölflinge sind die Jungen und Mädchen im Alter von sieben bis elf
              Jahren. Zusammen bilden wir eine Gruppe von etwa 15 bis 30
              Kindern, die wir die „Meute” nennen. Wir treffen uns einmal in der
              Woche zur Meutenstunde und unternehmen gemeinsam lustige und
              spannende Dinge. Die Meutenstunden finden in der Regel jeden
              Freitag von 16.45 Uhr bis 18.15 Uhr an der Pfadfinderhütte in
              Steinborn statt (Ausnahmen sind z.B. in den Schulferien, an
              Brücken- und Feiertagen). Interessierte Kinder können gerne
              jederzeit ohne Anmeldung reinschauen. Bitte vergesst nicht euch
              Kleidung anzuziehen, die dreckig werden kann und warm hält
              (besonders im Frühjahr und Herbst). Außerdem sind feste Schuhe
              wichtig. Ansprechpartner für die Wölflingsmeute:{' '}
              {representatives.map(
                (representative) => representative.name + ' '
              )}
              <br />
              Was machen wir bei einer Meutenstunde? <br />
              Alles, was wir tun, soll uns Spaß machen. Deshalb machen wir ganz
              unterschiedliche Sachen. Wir spielen und basteln viel, singen und
              musizieren, wir entdecken die Natur, erleben Abenteuer und finden
              dabei viele gute Freunde. Bei jedem Treffen wollen wir aber auch
              etwas lernen. So verkleiden wir uns manchmal und gehen als
              Indianer auf die Pirsch, segeln als Piraten auf den Weltmeeren
              oder unternehmen eine Dschungelexpedition. Dabei lernen wir viel
              über andere Länder und lassen unserer Fantasie freien Lauf.
            </Text>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
