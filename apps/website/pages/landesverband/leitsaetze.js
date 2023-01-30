import * as React from 'react'
import { useRouter } from 'next/router'
import { useFela } from 'react-fela'

import {
  Card,
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
  const { theme } = useFela()

  return (
    <Template>
      <Layout paddingTop={5} paddingBottom={10}>
        <Box>
          <Text>
            Wie sich Seeleute an den Sternen orientierten, so braucht auch eine
            Gemeinschaft feste Richtwerte, die von dauerhafter Gültigkeit sind.
            Wir, die Stämme im Landesverband Rheinland-Pfalz / Saar im Bund der
            Pfadfinderinnen und Pfadfinder, haben uns die folgenden Leitsätze
            gegeben, um die Freundschaft und Verbundenheit zwischen unseren
            Stämme zu fördern. Sie halten fest, was das Wesen unseres
            Landesverbandes ausmacht. Sie sind Ziel und Anspruch zugleich.
          </Text>
        </Box>
      </Layout>
      <Layout
        grow={1}
        paddingTop={5}
        paddingBottom={15}
        alignSelf="stretch"
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text variant="subtitle">Wir wollen...</Text>
        <Box paddingTop={2} direction={'column'} space={4}>
          <Tile
            title="1. einen Beitrag zur Persönlichkeitsbildung junger Menschen leisten"
            image="/images/bula_2.jpg"
            imageHeight={400}
            highlight>
            Unser Ziel ist es, junge Menschen in der Entwicklung zu
            eigenverantwortlichen, kritischen und engagierten Persönlichkeiten
            zu unterstützen.
            <br />
            Unsere Mitglieder sollen in der Lage sein, Verantwortung für sich
            selbst und für andere zu übernehmen. Die Fähigkeiten und Werte,
            <br />
            die sie im Stamm und Landesverband erwerben, sollen sie auch
            außerhalb unserer Gemeinschaft positiv in die Gesellschaft
            einbringen.
            <br />
            Um dieses Ziel zu erreichen, müssen junge Leute in unserem
            Landesverband ein stimmiges Umfeld finden, in dem ihre
            Persönlichkeit wachsen kann.
          </Tile>
          <Tile
            title={
              <>
                2. als eine echte Gemeinschaft von <br /> Freundinnen und
                Freunden miteinander leben
              </>
            }
            image="/images/gemnschaft_freunde.jpg"
            highlight
            imageHeight={400}>
            Wir sind mehr als ein geographischer Zusammenschluss von Stämmen,
            weil wir uns als Weggefährten verstehen und füreinander einstehen.
            <br />
            Wir begegnen uns als Freundinnen und Freunde, denn Freundschaft ist
            das Band, das unsere Gemeinschaft zusammenhält.
            <br />
            Wir suchen gemeinsam nach den besten Lösungen für unseren
            Landesverband.
            <br />
            Dadurch entsteht die Verbundenheit, durch die wir erst zu einer
            Gemeinschaft werden.
          </Tile>
          <Tile
            title={
              <>
                3. Verantwortung für unsere Gemeinschaft übernehmen <br /> & sie
                gemeinsam aktiv gestalten
              </>
            }
            image="/images/bula_1.jpg"
            imagePosition="bottom"
            highlight
            imageHeight={400}>
            Unser Landesverband wird von jungen Menschen gebildet, die Lust
            haben, sich ihre eigene Gemeinschaft zu schaffen.
            <br />
            Diese gestalten und bereichern sie durch ihren Einsatz, ihre
            Persönlichkeit und Einzigartigkeit.
            <br />
            Alle Mitglieder sollen aktiv und ihren ihren Fähigkeiten
            entsprechend zum Gelingen unserer Gemeinschaft beitragen.
            <br />
            Die verbindliche Teilnahme an den Gruppentreffen, Lagern und Fahrten
            ist die erste Voraussetzung für alle, die zu uns gehören wollen.
          </Tile>
          <Tile
            title="4. zusammenarbeiten und uns gegenseitig unterstützen"
            image="/images/fahrt_strnd.jpg"
            highlight
            imageHeight={400}>
            Als Gemeinschaft von Stämmen gestalten wir das Leben unseres
            Landesverbandes.
            <br />
            Die Aktionen unseres Landesverbandes werden von uns gemeinsam
            vorbereitet und durchgeführt.
            <br />
            Wir stehen uns gegenseitig mit Rat und Tat zur Seite und sind offen
            für Hilfe, die uns angeboten wird.
            <br />
            Starke Stämme übernehmen mehr Verantwortung.
          </Tile>
          <Tile
            title="5. unsere Vielfalt als Chance sehen und voneinander lernen"
            image="/images/vielfalt.jpg"
            highlight
            imageHeight={400}>
            Jeder Stamm in unserem Landesverband ist einzigartig.
            <br />
            Wir wollen in unserer Verschiedenheit aber nicht das Trennende
            betonen, sondern Brücken von Stamm zu Stamm schlagen.
            <br />
            Unsere Vielfalt sehen wir als Bereicherung unserer Gemeinschaft. Wir
            wissen,
            <br />
            dass wir viel voneinander lernen können und nutzen dies auch.
          </Tile>
          <Tile
            title={
              <>
                6. die Werte der Pfadfinderbewegung und der Jugendbewegung leben{' '}
                <br /> & bewusst weitergeben
              </>
            }
            image="/images/fahrt_kote.jpg"
            highlight
            imageHeight={400}>
            Unsere Gemeinschaft richtet sich nach den Werten und Idealen des
            internationalen Pfadfindertums.
            <br />
            Diese finden sich in unseren Pfadfinderregeln wieder, die den
            ideellen Rahmen für unsere Arbeit bilden.
            <br />
            Außerdem sehen wir uns in der Tradition der deutschen
            Jugendbewegung,
            <br />
            deren Wesen für uns in der Meißnerformel (Selbstbestimmung,
            Eigenverantwortung, innere Wahrhaftigkeit) zum Ausdruck kommt.
            <br />
            Die Älteren haben die Aufgabe, die Traditionen unserer Gemeinschaft
            an die Jüngeren weiter zu geben.
          </Tile>
          <Tile
            title="7. einen Stil pflegen, der Ausdruck unserer gemeinsamen Kultur & Tradition ist"
            image="/images/schwrzzelte_1.jpg"
            highlight
            imageHeight={400}>
            Unser Stil soll nach Innen und Außen verdeutlichen, dass wir eine
            Gemeinschaft sind.
            <br />
            Das gilt zuerst für unseren Umgang untereinander, der von
            gegenseitiger Rücksichtnahme und Wertschätzung geprägt sein soll.
            <br />
            Das gilt aber auch für unsere Kluft, die Ausdruck unserer
            Verbundenheit untereinander und mit allen Pfadfinderinnen und
            Pfadfindern auf der Welt ist.
            <br />
            Daher tragen wir sie bei allen Pfadfinderaktionen.
            <br />
            Alle Mitglieder sollen die Bedeutung der Kluft kennen und wissen,
            warum wir sie schlicht und ordentlich tragen.
            <br />
            Wir pflegen einen einfachen und naturverbunden Fahrten- und
            Lagerstil.
            <br />
            Wir bauen unsere Zelte ordentlich auf und legen Wert auf eine
            stilvolle Atmosphäre in unseren Kohten und Jurten.
            <br />
            Wir verzichten bewusst auf technische Gegenstände auf Fahrt und im
            Lager.
            <br />
            Auf unseren Treffen gehen wir verantwortungsvoll mit Nikotin &
            Alkohol um.
          </Tile>
          <Tile
            title="8. ein attraktives & abenteuerliches Programm für alle Altersstufen"
            image="/images/popcorn.jpg"
            highlight
            imageHeight={400}>
            Um unserem pädagogischen Anspruch gerecht zu werden, muss das
            Programm für die Jungen und Mädchen in den anspruchsvoll,
            <br />
            abenteuerlich und abwechslungsreich sein. Das Programm in den
            Meuten,
            <br />
            Sippen und Runden ist die Grundlage der Ausbildung im Stamm.
            <br />
            Damit unsere Mitglieder in unseren Stämmen echte Abenteuer erleben,
            <br />
            finden unsere Treffen und Aktionen so oft wie möglich draußen in der
            Natur statt.
            <br />
            Es ist uns besonders wichtig, dass unsere Sippen regelmäßig,
            <br />
            mit Freude und Stil auf Fahrt gehen. Im Sommer werden mehrwöchige
            Großfahrten durchgeführt.
            <br />
            Das Programm berücksichtigt die Wünsche und Bedürfnisse unserer
            Mitglieder und bietet den Jugendlichen die Möglichkeit,
            <br />
            sich selbst auszuprobieren, sich immer wieder neuen
            Herausforderungen zu stellen und in zunehmendem Maße Verantwortung
            zu übernehmen.
          </Tile>
          <Tile
            title="9. dass unsere Gruppen mit Freude & Stil auf Fahrt gehen"
            image="/images/lagerfeuer_fhrt_1.jpg"
            highlight
            imageHeight={400}>
            Die Fahrt ist nicht nur Programminhalt, sondern Ausdruck unseres
            pfadfinderischen Selbstverständnisses.
            <br />
            Es ist die wichtigste Aufgabe der Älteren, den Jüngeren Schritt für
            Schritt die Begeisterung am Fahren zu vermitteln.
            <br />
            Es ist unser Anspruch, uns mit den Menschen und der Kultur der
            Länder auseinander zu setzen,
            <br />
            in die wir fahren. Wir vermitteln in unseren Gruppen die nötigen
            Kenntnisse,
            <br />
            die uns auf Fahrt das Leben erleichtern. Unterwegs verhalten wir uns
            so, dass wir die Gastfreundschaft,
            <br />
            die uns zuteil wird, verdienen. Auch wenn auf Fahrt das gemeinsame
            Erleben der Natur und der Gemeinschaft immer im Vordergrund steht,
            <br />
            ist es uns wichtig, den Fähigkeiten der Gruppe angemessene Distanzen
            zu erwandern.
          </Tile>
          <Tile
            title="10. eine lebendige & verbindende Singekultur pflegen"
            image="/images/gitarren.jpg"
            highlight
            imageHeight={400}>
            Unsere Lieder und unser Singen spiegeln das Wesen unserer
            Gemeinschaft.
            <br />
            Kein Treffen in unserem Landesverband soll ohne Singen vergehen.
            <br />
            Wenn wir singen, singen wir alle zusammen. Damit unsere Singerunden
            immer von möglichst vielen Gitarren begleitet werden,
            <br />
            unterstützen wir alle unsere Mitglieder (besonders aber alle
            Führungskräfte) dabei, Gitarre spielen zu lernen.
            <br />
            Zur Pflege der gemeinsamen Singekultur haben wir ein
            Landesliederbuch,
            <br />
            das die Lieder enthält, die uns gerade am wichtigsten sind.
            <br />
            Insgesamt wollen wir so viel singen, dass wir immer mehr Lieder
            auswendig können und immer besser singen.
            <br />
            Wir setzen uns auch mit den Texten und dem Hintergrund unserer
            Lieder auseinander und singen nur Lieder,
            <br />
            die zu uns passen. Das wichtigste bleibt aber,
            <br />
            dass wir mit Freude und Leidenschaft singen und das an die Jüngeren
            weitergeben.
          </Tile>
          <Tile
            title={
              <>
                {' '}
                11. unsere Führungskräfte im Stamm <br /> und auf Kursen
                kompetent für ihre Aufgaben ausbilden{' '}
              </>
            }
            image="/images/mnd.jpg"
            highlight
            imageHeight={400}>
            Wir legen großen Wert auf die Qualifizierung unserer
            Gruppenführungen. Die Grundlage dafür wird in den Stämmen gelegt.
            <br />
            Alle unsere Mitglieder sollen hier die auf Fahrt und im Lager
            benötigten Pfadfindertechniken lernen.
            <br />
            Damit junge Menschen die Möglichkeit haben, selbst Verantwortung zu
            übernehmen,
            <br />
            werden unsere Gruppen von Jugendlichen geführt. Erwachsene können in
            der Meuten-,
            <br />
            Gilden- und Stammesführung und im Landesverband eine wichtige Rolle
            spielen,
            <br />
            indem sie mit ihrer Erfahrung jugendlichen Führungskräften helfen,
            <br />
            ihrer Aufgabe gerecht zu werden und sie so vor Überforderung
            schützen. Von unseren Führungskräften erwarten wir,
            <br />
            dass sie die vielfältigen Ausbildungsangebote des LV und des Bundes
            wahrnehmen,
            <br />
            um die nötigen Kompetenzen für ihre jeweiligen Aufgaben zu erwerben.
          </Tile>
          <Tile
            title="12. nach außen als Gemeinschaft positiv wahrgenommen werden"
            image="/images/fahrt_landschft_1.jpg"
            highlight
            imageHeight={400}>
            Wir setzen uns damit auseinander, wie wir in der Öffentlichkeit
            wirken und bemühen uns um ein authentisches, positives Außenbild.
            <br />
            Wir bemühen uns darum, uns so zu verhalten, dass wir das Ansehen der
            Pfadfinderbewegung verbessern.
          </Tile>
          <Tile
            title="13. so viel Spaß wie möglich mit soviel Ernsthaftigkeit wie nötig haben"
            image="/images/landeszentrum_theke_1.jpg"
            highlight
            imageHeight={400}>
            Pfadfinden im Landesverband RPS ist ein großes Spiel, das allen
            Beteiligten vor allem Spaß machen soll.
            <br />
            Das betrifft nicht nur das Programm in unseren Stämmen und im
            Landesverband, sondern auch die nötigen Vorbereitungstreffen.
            <br />
            Gleichzeitig arbeiten wir aber auch konzentriert,
            <br />
            ernsthaft und ambitioniert am bestmöglichen Programm für unsere
            Gruppen und Stämme.
            <br />
            Wo immer möglich, beteiligen sich alle Stämme an der Vorbereitung
            von Landesaktionen und Ausbildungskursen.
          </Tile>
        </Box>
      </Layout>
    </Template>
  )
}
