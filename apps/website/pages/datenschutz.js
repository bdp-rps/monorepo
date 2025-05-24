import * as React from 'react'
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

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={15}>
        <Text variant="subtitle">Datenschutzerklärung</Text>
        <Spacer size={4} />
        <Box space={10}>
          <Box space={6}>
            <Text variant="category">
              1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen
              sowie des betrieblichen Datenschutzbeauftragten
            </Text>
            <Text>
              Diese Datenschutz-Information gilt für die Datenverarbeitung
              durch:
              <br />
              Verantwortlicher: <br />
              Bund der Pfadfinderinnen und Pfadfinder e.V. (BdP)
              <br />
              vertr. d. d. Vorstand
              <br />
              Kesselhaken 23, 34376 Immenhausen
              <br />
              Telefon: +49 5673-99584-0
              <br />
              Telefax: +49 5673-99584-44
              <br />
              E-Mail: info@pfadfinden.de
              <br /> <br />
              Die Datenschutzbeauftragte des BdP e.V. ist unter der o.g.
              Anschrift, zu Hd. Silvia Houda, beziehungsweise unter
              datenschutz@pfadfinden.de erreichbar.
            </Text>
          </Box>
          <Box space={6}>
            <Text variant="category">
              2. Erhebung und Speicherung personenbezogener Daten sowie Art und
              Zweck von deren Verwendung
            </Text>
            <Text>
              <b>a) Beim Besuch der Website</b>
              <br />
              <br />
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät
              zum Einsatz kommenden Browser automatisch Informationen an den
              Server unserer Website gesendet. Diese Informationen werden
              temporär in einem sog. Logfile gespeichert. Folgende Informationen
              werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten
              Löschung gespeichert:
              <br />
              <ul>
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>
                  verwendeter Browser und ggf. das Betriebssystem Ihres Rechners
                  sowie der Name Ihres Access-Providers
                </li>
              </ul>
              <br />
              Die genannten Daten werden durch uns zu folgenden Zwecken
              verarbeitet: <br />
              <ul>
                <li>
                  Gewährleistung eines reibungslosen Verbindungsaufbaus der
                  Website
                </li>
                <li>
                  Gewährleistung einer komfortablen Nutzung unserer Website
                </li>
                <li>
                  Auswertung der Systemsicherheit und -stabilität sowie zu
                  weiteren administrativen Zwecken
                </li>
                <li>zu weiteren administrativen Zwecken</li>
              </ul>
              <br />
              Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S.
              1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben
              aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden
              wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person
              zu ziehen. <br /> <br />
              Soweit wir hierfür Hosting-Dienstleistungen in Anspruch nehmen,
              geschieht dies auf Basis eines Auftragsverarbeitungsvertrages gem.
              Art. 28 Abs. 3 S. 1 DSGVO. <br /> <br />
              Darüber hinaus setzen wir beim Besuch unserer Website Cookies
              sowie Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie
              unter den Ziff. 4 und 5 dieser Datenschutzerklärung.
            </Text>
          </Box>
          <Box space={6}>
            <Text variant="category">3. Weitergabe von Daten</Text>
            <Text>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen
              als den im Folgenden aufgeführten Zwecken findet nicht statt.
              <br />
              <br />
              Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
              <ul>
                <li>
                  Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
                  Einwilligung dazu erteilt haben
                </li>
                <li>
                  die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                  besteht, dass Sie ein überwiegendes schutzwürdiges Interesse
                  an der Nichtweitergabe Ihrer Daten haben
                </li>
                <li>
                  für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1
                  lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie
                </li>
                <li>
                  dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b
                  DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen
                  erforderlich ist
                </li>
              </ul>
            </Text>
          </Box>

          <Box space={6}>
            <Text variant="category">4. Betroffenenrechte</Text>
            <Text>
              Sie haben das Recht:
              <ul>
                <li>
                  gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
                  personenbezogenen Daten zu verlangen. Insbesondere können Sie
                  Auskunft über die Verarbeitungszwecke, die Kategorie der
                  personenbezogenen Daten, die Kategorien von Empfängern,
                  gegenüber denen Ihre Daten offengelegt wurden oder werden, die
                  geplante Speicherdauer, das Bestehen eines Rechts auf
                  Berichtigung, Löschung, Einschränkung der Verarbeitung oder
                  Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft
                  ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie
                  über das Bestehen einer automatisierten Entscheidungsfindung
                  einschließlich Profiling und ggf. aussagekräftigen
                  Informationen zu deren Einzelheiten verlangen
                </li>
                <li>
                  gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger
                  oder Vervollständigung Ihrer bei uns gespeicherten
                  personenbezogenen Daten zu verlangen
                </li>
                <li>
                  gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
                  personenbezogenen Daten zu verlangen, soweit nicht die
                  Verarbeitung zur Ausübung des Rechts auf freie
                  Meinungsäußerung und Information, zur Erfüllung einer
                  rechtlichen Verpflichtung, aus Gründen des öffentlichen
                  Interesses oder zur Geltendmachung, Ausübung oder Verteidigung
                  von Rechtsansprüchen erforderlich ist
                </li>
                <li>
                  gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen, soweit die Richtigkeit
                  der Daten von Ihnen bestritten wird, die Verarbeitung
                  unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die
                  Daten nicht mehr benötigen, Sie jedoch diese zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO
                  Widerspruch gegen die Verarbeitung eingelegt haben
                </li>
                <li>
                  gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
                  bereitgestellt haben, in einem strukturierten, gängigen und
                  maschinenlesebaren Format zu erhalten oder die Übermittlung an
                  einen anderen Verantwortlichen zu verlangen
                </li>
                <li>
                  gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
                  jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge,
                  dass wir die Datenverarbeitung, die auf dieser Einwilligung
                  beruhte, für die Zukunft nicht mehr fortführen dürfen und
                </li>
                <li>
                  gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu
                  beschweren. In der Regel können Sie sich hierfür an die
                  Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder
                  Arbeitsplatzes oder unseres Vereinssitzes wenden
                </li>
              </ul>
            </Text>
          </Box>
          <Box space={6}>
            <Text variant="category">5. Widerspruchsrecht</Text>
            <Text>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
              Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet
              werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen
              die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit
              dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation
              ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im
              letzteren Fall haben Sie ein generelles Widerspruchsrecht, das
              ohne Angabe einer besonderen Situation von uns umgesetzt wird.
              Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch
              machen, genügt eine E-Mail an{' '}
              <Link href="mailto:datenschutz@pfadfinden.de">
                datenschutz@pfadfinden.de
              </Link>
              .
            </Text>
          </Box>
          <Box space={6}>
            <Text variant="category">6. Datensicherheit</Text>
            <Text>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete
              SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
              höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
              wird. In der Regel handelt es sich dabei um eine 256-Bit
              Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung
              unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie
              zurück. Ob eine einzelne Seite unseres Internetauftrittes
              verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
              Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der
              unteren Statusleiste Ihres Browsers.
              <br />
              <br />
              Wir bedienen uns im Übrigen geeigneter technischer und
              organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen
              zufällige oder vorsätzliche Manipulationen, teilweisen oder
              vollständigen Verlust, Zerstörung oder gegen den unbefugten
              Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden
              entsprechend der technologischen Entwicklung fortlaufend
              verbessert.
            </Text>
          </Box>
          <Box space={6}>
            <Text variant="category">
              7. Aktualität und Änderung dieser Datenschutzerklärung
            </Text>
            <Text>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand
              August 2021.
              <br />
              <br />
              Durch die Weiterentwicklung unserer Website und Angebote darüber
              oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
              Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
              ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit
              auf der Website unter{' '}
              <Link href="https://www.pfadfinden.de/datenschutzerklaerung/">
                https://www.pfadfinden.de/datenschutzerklaerung/
              </Link>{' '}
              von Ihnen abgerufen und ausgedruckt werden.
            </Text>
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}
