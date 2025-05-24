import * as React from 'react'

import { Box, Grid, Tile, Text, Button } from '@bdp-rps/ui'

export default () => {
  const [mode, setMode] = React.useState('default')

  return (
    <Box space={4}>
      <Text>
        Wie sich Seeleute an den Sternen orientierten, so braucht auch eine
        Gemeinschaft feste Richtwerte, die von dauerhafter Gültigkeit sind.
        <br />
        Wir, die Stämme im Landesverband Rheinland-Pfalz/Saar im Bund der
        Pfadfinderinnen und Pfadfinder, haben uns die folgenden Leitsätze
        gegeben, um die Freundschaft und Verbundenheit zwischen unseren Stämme
        zu fördern. Sie halten fest, was das Wesen unseres Landesverbandes
        ausmacht. Sie sind Ziel und Anspruch zugleich.
      </Text>

      <Box alignSelf="flex-start" paddingBottom={2}>
        <Button
          onClick={() => setMode(mode === 'default' ? 'simple' : 'default')}>
          {mode === 'default'
            ? 'in einfacher Sprache zeigen'
            : 'Standard-Version anzeigen'}
        </Button>
      </Box>

      <Text variant="subtitle">Wir wollen...</Text>
      {mode === 'default' ? (
        <Grid gap={4} columns={['1fr', , '1fr 1fr']}>
          <Tile title="1. einen Beitrag zur Persönlichkeitsbildung junger Menschen leisten">
            Unser Ziel ist es, junge Menschen in der Entwicklung zu
            eigenverantwortlichen, kritischen und engagierten Persönlichkeiten
            zu unterstützen.
            <br />
            Unsere Mitglieder sollen in der Lage sein, Verantwortung für sich
            selbst und für andere zu übernehmen. Die Fähigkeiten und Werte, die
            sie im Stamm und Landesverband erwerben, sollen sie auch außerhalb
            unserer Gemeinschaft positiv in die Gesellschaft einbringen.
            <br />
            Um dieses Ziel zu erreichen, müssen junge Leute in unserem
            Landesverband ein stimmiges Umfeld finden, in dem ihre
            Persönlichkeit wachsen kann.
          </Tile>
          <Tile title="2. als eine echte Gemeinschaft von Freund*innen miteinander leben">
            Wir sind mehr als ein geographischer Zusammenschluss von Stämmen,
            weil wir uns als Weggefährt*innen verstehen und füreinander
            einstehen.
            <br />
            Wir begegnen uns als Freund*innen, denn Freundschaft ist das Band,
            das unsere Gemeinschaft zusammenhält. Wir wollen einen schützender
            Raum schaffen und die Grenzen anderer achten und respektieren.
            <br />
            Wir suchen gemeinsam nach den besten Lösungen für unseren
            Landesverband.
            <br />
            Deswegen wollen wir offen sein für Veränderungen, Verbesserungen,
            Kritik und Feedback.
          </Tile>
          <Tile title="3. Verantwortung für unsere Gemeinschaft übernehmen & sie gemeinsam aktiv gestalten">
            Unser Landesverband wird von jungen Menschen gebildet, die Lust
            haben, sich ihre eigene Gemeinschaft zu schaffen.
            <br />
            Diese gestalten und bereichern sie durch ihren Einsatz, ihre
            Persönlichkeit und Einzigartigkeit.
            <br />
            Alle Mitglieder sollen aktiv und ihren Fähigkeiten entsprechend zum
            Gelingen unserer Gemeinschaft beitragen.
            <br />
            Die verbindliche Teilnahme an den Gruppentreffen, Lagern und Fahrten
            ist die erste Voraussetzung für alle, die zu uns gehören wollen.
          </Tile>
          <Tile title="4. zusammenarbeiten und uns gegenseitig unterstützen">
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
          <Tile title="5. unsere Vielfalt als Chance sehen und voneinander lernen">
            Jeder Stamm in unserem Landesverband ist einzigartig.
            <br />
            Wir wollen in unserer Verschiedenheit aber nicht das Trennende
            betonen, sondern Brücken von Stamm zu Stamm schlagen.
            <br />
            Unsere Vielfalt sehen wir als Bereicherung unserer Gemeinschaft. Wir
            wissen, dass wir viel voneinander lernen können und nutzen dies
            auch.
          </Tile>
          <Tile title="6. die Werte der Pfadfinder*innenbewegung und der Jugendbewegung leben & bewusst weitergeben">
            Unsere Gemeinschaft richtet sich nach den Werten und Idealen des
            internationalen Pfadfinder*innentums.
            <br />
            Diese finden sich in unseren Pfadfinder*innenregeln wieder, die den
            ideellen Rahmen für unsere Arbeit bilden.
            <br />
            Außerdem sehen wir uns in der Tradition der deutschen
            Jugendbewegung, deren Wesen für uns in der Meißnerformel
            (Selbstbestimmung, Eigenverantwortung, innere Wahrhaftigkeit) zum
            Ausdruck kommt.
            <br />
            Die Älteren haben die Aufgabe, die Traditionen unserer Gemeinschaft
            an die Jüngeren weiter zu geben.
          </Tile>
          <Tile title="7. einen Stil pflegen, der Ausdruck unserer gemeinsamen Kultur & Tradition ist">
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
            Das gilt aber auch für unsere LV und BdP-typische Kleidung. Dazu
            gehören beispielsweise Juja, Takelbluse und Kluft. Sie ist Ausdruck
            unserer Verbundenheit untereinander und mit allen Pfadfinder*innen
            auf der Welt.
            <br />
            Daher tragen wir sie bei allen Pfadfinder*innenaktionen und alle
            Mitglieder sollen deren Bedeutung kennen und wissen, warum wir sie
            schlicht und einfach gehalten tragen.
            <br />
            Wir pflegen einen einfachen und naturverbunden Fahrten- und
            Lagerstil.
            <br />
            Wir bauen unsere Zelte ordentlich auf und legen Wert auf eine
            stilvolle Atmosphäre in unseren Kohten und Jurten.
            <br />
            Wir verzichten bewusst auf technische Gegenstände auf unseren
            gemeinsamen Aktionen.
            <br />
            Auf unseren Treffen halten wir uns an unseren Alkoholkodex.
          </Tile>
          <Tile title="8. ein attraktives & abenteuerliches Programm für alle Altersstufen">
            Um unserem pädagogischen Anspruch gerecht zu werden, muss das
            Programm für die Jungen und Mädchen in den anspruchsvoll,
            abenteuerlich und abwechslungsreich sein. Das Programm in den
            Meuten, Sippen und Runden ist die Grundlage der Ausbildung im Stamm.
            <br />
            Damit unsere Mitglieder in unseren Stämmen echte Abenteuer erleben,
            finden unsere Treffen und Aktionen so oft wie möglich draußen in der
            Natur statt.
            <br />
            Es ist uns besonders wichtig, dass unsere Sippen regelmäßig, mit
            Freude und Stil auf Fahrt gehen. Im Sommer werden mehrwöchige
            Großfahrten durchgeführt.
            <br />
            Das Programm berücksichtigt die Wünsche und Bedürfnisse unserer
            Mitglieder und bietet den Jugendlichen die Möglichkeit, sich selbst
            auszuprobieren, sich immer wieder neuen Herausforderungen zu stellen
            und in zunehmendem Maße Verantwortung zu übernehmen.
          </Tile>
          <Tile title="9. dass unsere Gruppen mit Freude & Stil auf Fahrt gehen">
            Die Fahrt ist nicht nur Programminhalt, sondern Ausdruck unseres
            pfadfinderischen Selbstverständnisses.
            <br />
            Es ist die wichtigste Aufgabe der Älteren, den Jüngeren Schritt für
            Schritt die Begeisterung am Fahren zu vermitteln.
            <br />
            Es ist unser Anspruch, uns mit den Menschen und der Kultur der
            Länder auseinander zu setzen, in die wir fahren. <br />
            Wir vermitteln in unseren Gruppen die nötigen Kenntnisse, die uns
            auf Fahrt das Leben erleichtern. Unterwegs verhalten wir uns so,
            dass wir die Gastfreundschaft, die uns zuteil wird, verdienen. Auch
            wenn auf Fahrt das gemeinsame Erleben der Natur und der Gemeinschaft
            immer im Vordergrund steht, ist es uns wichtig, den Fähigkeiten der
            Gruppe angemessene Distanzen zu erwandern.
          </Tile>
          <Tile title="10. eine lebendige & verbindende Singekultur pflegen">
            Unsere Lieder und unser Singen spiegeln das Wesen unserer
            Gemeinschaft.
            <br />
            Kein Treffen in unserem Landesverband soll ohne Singen vergehen.
            <br />
            Wenn wir singen, singen wir alle zusammen. Damit unsere Singerunden
            immer von möglichst vielen Gitarren begleitet werden, unterstützen
            wir alle unsere Mitglieder (besonders aber alle Führungskräfte)
            dabei, Gitarre spielen zu lernen.
            <br />
            Zur Pflege der gemeinsamen Singekultur haben wir ein
            Landesliederbuch, das die Lieder enthält, die uns gerade am
            wichtigsten sind.
            <br />
            Insgesamt wollen wir so viel singen, dass wir immer mehr Lieder
            auswendig können und immer besser singen.
            <br />
            Wir setzen uns auch mit den Texten und dem Hintergrund unserer
            Lieder auseinander und singen nur Lieder, die zu uns passen.
            <br />
            Das wichtigste bleibt aber, dass wir mit Freude und Leidenschaft
            singen und das an die Jüngeren weitergeben.
          </Tile>
          <Tile title="11. unsere Führungskräfte im Stamm und auf Kursen kompetent für ihre Aufgaben ausbilden">
            Wir legen großen Wert auf die Qualifizierung unserer
            Gruppenführungen. Die Grundlage dafür wird in den Stämmen gelegt.
            <br />
            Alle unsere Mitglieder sollen hier die auf Fahrt und im Lager
            benötigten Pfadfinder*innentechniken lernen.
            <br />
            Damit junge Menschen die Möglichkeit haben, selbst Verantwortung zu
            übernehmen, werden unsere Gruppen von Jugendlichen geführt.
            Erwachsene können in der Meuten-, Gilden- und Stammesführung und im
            Landesverband eine wichtige Rolle spielen, indem sie mit ihrer
            Erfahrung jugendlichen Führungskräften helfen, ihrer Aufgabe gerecht
            zu werden und sie so vor Überforderung schützen.
            <br />
            Von unseren Führungskräften erwarten wir, dass sie die vielfältigen
            Ausbildungsangebote des LV und des Bundes wahrnehmen, um die nötigen
            Kompetenzen für ihre jeweiligen Aufgaben zu erwerben.
          </Tile>
          <Tile title="12. so viel Spaß wie möglich mit soviel Ernsthaftigkeit wie nötig haben">
            Pfadfinden im Landesverband RPS ist ein großes Spiel, das allen
            Beteiligten vor allem Spaß machen soll.
            <br />
            Das betrifft nicht nur das Programm in unseren Stämmen und im
            Landesverband, sondern auch die nötigen Vorbereitungstreffen.
            <br />
            Gleichzeitig arbeiten wir aber auch konzentriert, ernsthaft und
            ambitioniert am bestmöglichen Programm für unsere Gruppen und
            Stämme.
            <br />
            Wo immer möglich, beteiligen sich alle Stämme an der Vorbereitung
            von Landesaktionen und Ausbildungskursen.
          </Tile>
          <Tile title="13. nach außen als Gemeinschaft positiv wahrgenommen werden">
            Wir setzen uns damit auseinander, wie wir in der Öffentlichkeit
            wirken und bemühen uns um ein authentisches, positives Außenbild.
            <br />
            Wir bemühen uns darum, uns so zu verhalten, dass wir das Ansehen der
            Pfadfinder*innenbewegung verbessern.
          </Tile>

          <Tile title="14. nachhaltig denken und handeln, als Verantwortung für die Zukunft">
            Wir wollen achtsam mit der Natur umgehen, damit wir langfristig
            wirken können. Unser Stil auf Fahrten, Lagern und anderen Aktionen
            ist einfach, sparsam und ressourcenorientiert.
            <br />
            Wir verzichten auf unnötigen Müll, treffen bewusste Entscheidungen
            und geben unser Wissen weiter.
            <br />
            So tragen wir gemeinsam Verantwortung für unsere Umwelt, unsere
            Gemeinschaft und Zukunft.
          </Tile>
        </Grid>
      ) : (
        <Grid gap={4} columns={['1fr', , '1fr 1fr']}>
          <Tile title="1. junge Menschen stark machen">
            Wir helfen jungen Menschen, Dinge alleine machen zu können.
            <br />
            Sie sollen lernen, sich um sich und andere zu kümmern.
            <br />
            Sie sollen mutig sein.
            <br />
            Sie sollen sich in der Gruppe wohlfühlen und auch Gutes tun.
            <br />
            Junge Menschen brauchen einen guten Ort zum Wachsen.
            <br />
            Wir wollen dieser Ort für sie sein.
          </Tile>
          <Tile title="2. gute Freunde sein">
            Wir sind Freunde und Freundinnen und halten zusammen.
            <br />
            Wir helfen uns und schauen auf unsere Grenzen.
            <br />
            Wenn uns etwas stört, suchen wir zusammen nach einer Lösung.
          </Tile>
          <Tile title="3. gemeinsam Verantwortung übernehmen">
            Alle dürfen mitmachen und unsere Gemeinschaft mitgestalten.
            <br />
            Alle helfen mit und zeigt was er oder sie kann.
            <br />
            Wer dazu gehört, kommt zu unseren Treffen und Aktivitäten.
          </Tile>
          <Tile title="4. zusammenarbeiten und sich helfen">
            Wir planen und machen Dinge gemeinsam.
            <br />
            Wer Hilfe braucht, bekommt sie.
            <br />
            Starke Stämme helfen den anderen.
          </Tile>
          <Tile title="5. unsere Vielfalt als Chance sehen und voneinander lernen">
            Jeder Stamm ist anders.
            <br />
            Das ist toll, denn wir können viel voneinander lernen.
            <br />
            Unsere Unterschiede machen uns stark.
          </Tile>
          <Tile title="6. unsere Werte leben und weitergeben">
            Wir leben nach den Regeln und Werten der Pfadfinder.
            <br />
            Ich entscheide selbst, was ich mache, Ich kümmere mich um mich
            selbst und stehe für meine Taten ein. Ich bin ehrlich zu mir selbst
            und tue das, was ich wirklich richtig finde (Meißnerformel).
            <br />
            Ältere geben den Jüngeren unsere Traditionen weiter.
          </Tile>
          <Tile title="7. unseren gemeinsamen Stil zeigen">
            Wir sind eine Gemeinschaft und das soll man sehen.
            <br />
            Wir tragen Pfadfinderkleidung in den BdP- Farben.
            <br />
            Wir leben einfach und naturverbunden.
            <br />
            Uns ist unser Stil mit Kohten und Jurten wichtig.
            <br />
            Wir verzichten auf unnötige Technik.
            <br />
            Wenn wir uns treffen, halten wir uns an unseren Alkoholkodex.
          </Tile>
          <Tile title="8. spannende Erlebnisse für alle">
            Wir erleben spannende Abenteuer in der Natur, bei denen sich alle
            ausprobieren können.
            <br />
            Für unser Programm hören wir auf die Wünsche und Bedürfnisse der
            anderen.
            <br />
            Wenn man das möchte, kann man mehr Verantwortung übernehmen.
          </Tile>
          <Tile title="9. mit Freude auf Reisen gehen">
            Wir lieben es, unterwegs zu sein und neue Orte und Menschen
            kennenzulernen.
            <br />
            Dabei verhalten wir uns immer respektvoll.
          </Tile>
          <Tile title="10. gemeinsam singen und musizieren">
            Wir singen gerne zusammen und lernen neue Lieder.
            <br />
            Gitarre spielen gehört auch dazu.
            <br />
            Zum Singen gehört für uns Freude und Spaß.
            <br />
            Wir achten auf die Texte unserer Lieder.
            <br />
            Sie sollen gut zu uns passen.
          </Tile>
          <Tile title="11. gute Ausbildung für unsere Leiter">
            Unsere Gruppenleiter brauchen viel Wissen.
            <br />
            Sie sollen lernen, wie sie Kinder und Jugendliche unterstützen
            können.
            <br />
            Ältere helfen den Jüngeren.
          </Tile>
          <Tile title="12. Spaß haben, aber auch ernst arbeiten">
            Wir wollen viel lachen und Spaß haben, aber auch wichtige Dinge
            ernst nehmen.
            <br />
            Wir bereiten unsere Aktionen gut vor.
            <br />
            Alle helfen dabei.
          </Tile>
          <Tile title="13. ein gutes Bild nach außen zeigen">
            Wir wollen, dass die Menschen uns als freundliche und hilfsbereite
            Pfadfinder*innen kennen.
          </Tile>
          <Tile title="14. die Natur schützen">
            Wir passen auf die Natur auf und hinterlassen keine Spuren.
            <br />
            Wir machen keinen unnötigen Müll.
            <br />
            Wir geben den Jüngeren unser Wissen für unsere Zukunft weiter.
          </Tile>
        </Grid>
      )}
    </Box>
  )
}
