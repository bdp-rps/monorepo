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
  Grid,
} from '@bdp-rps/ui'

import CardTile from '../../components/CardTile'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

//hier
export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={15}>
      <Box space={6}>
        <Text variant="title">Ausbildung</Text>
        <Box space={2}>
          <Text variant="subtitle">Im Landesverband Rheinland-Pfalz/Saar</Text>
          <Text>
            Wir wollen junge Menschen zu verantwortungsbewussten, engagierten
            und kritischen Bürger*innen erziehen. Wir begleiten sie bei ihrer
            Suche nach Orientierung in unserer komplexen Gesellschaft.
            <br />
            Die Ausbildung des Führungsnachwuchses und der Gruppenführungen hat
            im BdP einen besonderen Stellenwert. Diese Ausbildung findet vor
            allem in der Praxis der Stämme statt. Eine wichtige und
            unverzichtbare Ergänzung findet sie im Kurs- und Ausbildungsprogramm
            des Landesverbandes Rheinland-Pfalz/Saar. Wir führen alle unsere
            Fortbildungen selbst durch, um sie optimal auf die Bedürfnisse der
            Teilnehmenden zuschneiden zu können.
            <br />
            Das Kurssystem des BdP besteht aus aufeinander aufbauenden Kursen.
            Diese ermöglichen durch den Erwerb praktischer und theoretischer
            Fähigkeiten für unterschiedliche Einsatzbereiche eine schrittweise
            und altersgerechte Übernahme von Verantwortungen. Bei unserer
            Ausbildung legen wir Wert auf individuelle Entwicklungsmöglichkeiten
            der Persönlichkeit. Der Erwerb von Schlüsselqualifikationen bietet
            eine wichtige Hilfestellung im privaten, beruflichen und
            gesellschaftlichen Leben.
            <br /> <br />
            In der Regel finden jährlich fünf einwöchige Ausbildungskurse in den
            Osterferien (SK, FaK, Sfk, Mfk und LEGO) statt, die vom
            Landesverband ausgerichtet werden. Darüber hinaus können
            Gruppenführungen ab 16 an weiteren Kursen des BdP teilnehmen.
            <br />
            Für mehr Informationen:{' '}
            <Link href="mailto:ausbildung@bdp-rps.de">
              ausbildung@bdp-rps.de
            </Link>
          </Text>
        </Box>
        <Box space={2}>
          <Text variant="subtitle">Unsere Kurse</Text>
          <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
            <CardTile
              title="SK - Der Sippenkurs"
              teaser="ab 12 Jahren"
              description="Der Sippenkurs ist der erste Kurs, den Du in unserem Landesverband besuchen kannst. Hier erlebst Du zusammen mit vielen anderen Pfadis ein spannendes Zeltlager mit allem was dazu gehört: Geschlafen wird in der Kohte, ihr kocht zusammen über dem Feuer und vertieft bei abenteuerlichem Programm alle wichtigen Technikkenntnisse. Highlight der Kurswoche ist ein Hajk (Aufgabenlauf) mit Übernachtung."
              image="ausbildung/sk"
              imageHeight={300}
            />
            <CardTile
              title="FAK - Der Fahrtenkurs"
              teaser="Ab 13 Jahren"
              description="Der Fahrtenkurs ist für alle, die gerne mit ihrer Sippe auf Fahrt gehen. Der Kurs findet komplett draußen im Zelt statt und umfasst sowohl ein paar Lagertage als auch eine Fahrt, bei der Du mit anderen Kursteilnehmenden teilweise ohne Teamende unterwegs bist. Das Abenteuer kommt bei diesem Kurs also keinesfalls zu kurz. Aber keine Bange - die Einheiten des Kurses werden Dich gut auf diese Herausforderung vorbereiten."
              image="ausbildung/fak"
              imageHeight={300}
            />
            <CardTile
              title="SFK - Der Sippenführungskurs"
              teaser="Ab 15 Jahren"
              description="Der SfK ist ein Must-Have für jede Sippenführung. Hier erfährst Du während einer Woche Zeltlager jede Menge Wissenswertes rund um die Leitung einer Sippe. Dabei stehen die Planung von gutem Programm für die Pfadistufe und Deine Rolle als Sippenführung im Vordergrund. Zeit für praktisches Ausprobieren gibt es auch und das Kursteam sorgt nebenbei für die nötige Action, die es für eine gelungene Kurswoche braucht."
              image="ausbildung/sfk"
              imageHeight={300}
            />
            <CardTile
              title="MFK - Der Meutenführungskurs"
              teaser="Ab 15 Jahren"
              description="Beim MfK lernst Du die Grundlagen der Meutenführung kennen. Der Umgang mit Kindern steht dabei genauso auf dem Kursplan wie die Gestaltung von gutem Programm. Langweilig wird’s hier nicht: Zusammen mit anderen Meutenführungen aus dem LV entwickelst Du spannende Aktionen für die Wölflingsstufe, die ihr mit einer Studiomeute ausprobieren könnt. Und ein top Kursteam sorgt dafür, dass auch zwischendurch der Spaß für Dich nicht auf der Strecke bleibt.
              Also: MfK = stabile Basis für alle Meutenführungen"
              imageHeight={300}
              image="ausbildung/mfk"
            />
          </Grid>
        </Box>
        <Box space={2}>
          <Text variant="subtitle">Wie es weiter gehen kann</Text>
          <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
            <CardTile
              title="LEGO"
              description="LEGO ist ein Angebot für ältere Pfadis und R/Rs, die 
              sich einer besonderen Fahrtenherausforderung stellen möchten. Bei einem Vorbereitungswochenende plant ihr zusammen mit erfahrenen Teamer*innen eine 1- wöchige Auslandsfahrt, die ihr selbstständig mit eurer Kursgruppe durchführt."
              image="fahrt_kothe"
              imageHeight={300}
            />
            <CardTile
              title="Stafü - Seminar"
              description="Das Stafü-Seminar ist ein Wochenend-Crashkurs. Hier erhältst Du kurz und knackig einen Einblick in einen der spannendsten Jobs im BdP: die Stammesführung. Ideal für alle, die ganz frisch diese Aufgabe übernommen haben."
              image="ausbildung/stafue"
              imageHeight={300}
            />
            <CardTile
              title="Teamer*innen Training"
              description="Das Teamer*innen Training ist eine Fortbildung sowohl für alle, die schon immer mal einen Kurs teamen wollten, als auch für erfahrene Teamer*innen und Kursleitungen. Neben interessanten Themen gibt‘s hier also auch die Möglichkeit, Kontakte zu knüpfen und sich zu vernetzen."
              image="ausbildung/team"
              imageHeight={300}
            />
            <CardTile
              title="Grundkurs"
              teaser="ab 16 Jahren"
              description="Der Grundkurs richtet sich an Stufen- und Stammesführungen der Region Mitte, neben unserem LV sind hier also außerdem Hessen, NRW und Sachsen mit im Boot. Bei diesem Kurs ist die Frage nach dem „Warum“ zentral: Welche Ziele verfolgen die unterschiedlichen Stufen im BdP? Welchen pädagogischen Hintergrund haben sie? Und was kannst Du in Deiner Rolle bewirken?"
              imageHeight={300}
              image="ausbildung/gk"
            />
            <CardTile
              title="Gilwellkurs"
              description="Im Mittelpunkt des Gilwellkurses stehst Du mit Deiner Rolle im BdP selbst. Handwerkszeug gibt es hier nicht-mehr, stattdessen viel Raum für Reflexion und Diskussion mit Pfadis aus dem ganzen Bund Wo siehst Du in Deinem Bereich Verbesserungs- potenziale? Was möchtest Du verändern?
              Am Ende des Gilwellkurses steht die Entwicklung und Durchführung eines Projektes. Dieses dokumentierst und reflektierst Du. Nach der Anerkennung durch das BAT (Bundes-Ausbildungs-Team) bekommst Du das Woodbadge verliehen – als sichtbares Symbol für den Abschluss Deiner Ausbildung im BdP."
              imageHeight={300}
              image="bg"
            />
          </Grid>
        </Box>
      </Box>
    </Layout>
  </Template>
)
