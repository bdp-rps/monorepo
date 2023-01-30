import * as React from 'react'
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

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={15}>
      <Text variant="subtitle">Pfadfinden?</Text>
      <Spacer size={4} />

      <Box space={6}>
        <Box space={2}>
          <Text variant="category">Werte entwickeln – nach Werten leben.</Text>

          <Text>
            Pfadfinden hilft jungen Menschen, sich in der heutigen Welt zu
            orientieren und bietet ihnen Freiräume, sich auszuprobieren und
            wertvolle Erfahrungen zu sammeln. Pfadfinden heißt, selbstbewusst an
            Zielen zu arbeiten und sich persönlich ständig und ganzheitlich
            weiterzuentwickeln. Wir verstehen uns dabei als Partner der Eltern
            unserer jungen Mitglieder, ihrer Schulen und Ausbildungsstätten.
          </Text>
        </Box>
        <Box space={2}>
          <Text variant="category">Pädagogischer Ansatz </Text>

          <Text>
            Pfadfinden fordert den ganzen Menschen. Sportliche, handwerkliche
            und musische Betätigung gehören ebenso dazu wie das Leben in der
            Natur, die Auseinandersetzung mit Gesellschaft und Umwelt sowie die
            Begegnung mit Pfadfindern aus aller Welt. Diese Vielfalt bietet
            Jedem die Chance, seine Fähigkeiten und Kenntnisse einzubringen und
            von anderen zu lernen. Das Zusammenleben in der Gruppe fördert
            soziale Verhaltensweisen, wie Toleranz, Hilfsbereitschaft, Übernahme
            von Verantwortung, gemeinsames Entscheiden und Handeln.
          </Text>
        </Box>
        <Box space={2}>
          <Text variant="category">
            Aktiv mitgestalten – die Gruppe, die Welt, die Zukunft.
          </Text>

          <Text>
            Demokratie lebt vom Mitmachen. Wir wollen sie in unserer eigenen
            Arbeit verwirklichen. Dabei sind wir parteipolitisch unabhängig,
            betreiben aber politische Bildung und fördern das politische
            Engagement unserer Mitglieder.
          </Text>
        </Box>
        <Box space={2}>
          <Text variant="category">Partnerschaftliche Gruppenführung</Text>

          <Text>
            Verantwortlich für die Organisation der Gruppenarbeit sind die
            ehrenamtlichen Gruppenführungen. Sie leiten die Gruppentreffen und
            führen mit großem Engagement Fahrten und Lager im In- und Ausland
            durch. Für diese verantwortungsvolle Aufgabe werden sie durch ein
            System von aufeinander aufbauenden Ausbildungskursen vorbereitet.
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
