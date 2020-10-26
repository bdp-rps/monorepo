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

const TextBox = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      paddingTop={0.5}
      paddingBottom={0.5}
      paddingLeft={2}
      paddingRight={2}
      alignSelf="flex-start"
      extend={{ backgroundColor: theme.tokens.secondary }}>
      <Text intent="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={8} paddingBottom={10}>
          <Text intent="subtitle">Datenschutzerklärung</Text>
          <Text intent="note" variant="info">
            Hinweise zur Verarbeitung Ihrer Daten gem. Art. 13 der Europäischen Datenschutzgrundverordnung (DS-GVO); Stand: 25.10.2020
          </Text>

          <Text intent="category">I. Verantwortlicher</Text>
          <Text>
            Für die Verarbeitung personenbezogener Daten auf diesem Internetangebot ist verantwortlich:
            <br /><br />
            Bund der Pfadfinderinnen und Pfadinder (BdP) Landesverband Rheinland-Pfalz/Saar
            <br />
            z. Hd. Stefan Schmidt
            <br />
            Dreiweidenstraße 3
            <br />
            65195 Wiesbaden
            <br /><br />
            Gesetzliche Vertreter:
            <br />
            Stefan Schmidt
            <br />
            Linda Flohrer
            <br />
            Hannes Müller
            <br />
            Dominik Meisinger
            <br />
            Anne Wendel
            <br />
            <br />
            Es sind jeweils zwei Vorstandsmitglieder gemeinsam zur Vertretung befugt.
            <br />
            <br />
            E-Mail: <Link href="mailto:vorstand@bdp-rps.de">vorstand@bdp-rps.de</Link>
          </Text>

          <Text intent="category">II. Kategorien verarbeiteter Daten</Text>
          <Text intent="label">1. Bereitstellung der Website und Erstellung von Logfiles</Text>
          <Text>
            <b>Beschreibung und Umfang der Datenverarbeitung:</b> Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners.
            <br />
            Folgende Daten werden hierbei erhoben:
            <br />
            <ol>
              <li>Informationen über den Browsertyp und die verwendete Version</li>
              <li>Das Betriebssystem des Nutzers</li>
              <li>Die IP-Adresse des Nutzers</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
            </ol>
            <br />
            Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.
            <br />
            <br />
            <b>Rechtsgrundlage für die Datenverarbeitung:</b> Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist unser berechtigtes Interesse an der öffentlichen Präsentation unseres Angebots (Art. 6 Abs. 1 lit. f DS-GVO).
            <br />
            <br />
            <b>Zweck der Datenverarbeitung:</b> Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben. Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt. In diesen Zwecken liegt auch unser berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f DS-GVO.
            <br />
            <br />
            <b>Dauer der Speicherung:</b> Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall.
          </Text>

          <Text intent="label">2. E-Mail-Kontakt</Text>
          <Text>
            <b>Beschreibung und Umfang der Datenverarbeitung:</b> Es ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.
            <br />
            Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an Dritte. Die Daten werden ausschließlich für die Verarbeitung der Konversation verwendet.
            <br />
            <br />
            <b>Rechtsgrundlage für die Datenverarbeitung:</b> Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist unsere rechtliche Verpflichtung, die Kontaktaufnahme zu ermöglichen (Art. 6 Abs. 1 lit. c DS-GVO) bzw. unser berechtigtes Interesse daran, mit unserem Adressatenkreis in Kontakt treten zu können (Art. 6 Abs. 1 lit. f DSGVO). Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
            <br />
            <br />
            <b>Zweck der Datenverarbeitung:</b> Im Falle einer Kontaktaufnahme per E-Mail liegt das erforderliche berechtigte Interesse an der Verarbeitung der Daten allein an der Bearbeitung der Kontaktaufnahme.
            <br />
            <br />
            <b>Dauer der Speicherung</b>: Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist.
          </Text>

          <Text intent="category">III. Ihre Rechte</Text>
          <Text>Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i. S. d. DS-GVO und es stehen Ihnen folgende Rechte uns gegenüber zu:</Text>

          <Text intent="label">1. Recht auf Auskunft</Text>
          <Text>
            Sie können eine Auskunft darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.
            <br />
            Liegt eine solche Verarbeitung vor, können Sie von uns über folgende Informationen Auskunft verlangen:
            <br />
            <ol>
              <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden;</li>
              <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden;</li>
              <li>die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;</li>
              <li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;</li>
              <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
              <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
              <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;</li>
              <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DS-GVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
            </ol>
            <br />
            Ihnen steht das Recht zu, Auskunft darüber zu verlangen, ob die Sie betreffenden personenbezogenen Daten in ein Drittland oder an eine internationale Organisation übermittelt werden.
            In diesem Zusammenhang können Sie verlangen, über die geeigneten Garantien gem. Art. 46 DS-GVO im Zusammenhang mit der Übermittlung unterrichtet zu werden.  
          </Text>

          <Text intent="label">2. Recht auf Berichtigung</Text>
          <Text>
            Sie haben ein Recht auf Berichtigung und/oder Vervollständigung, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind. Wir haben die Berichtigung unverzüglich vorzunehmen.
          </Text>

          <Text intent="label">3. Recht auf Löschung</Text>
          <Text>
            a) Löschungspflicht
            <br />
            Sie können von uns verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und wir sind verpflichtet, diese Daten dann unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
            <br />
            <ol>
              <li>Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
              <li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DS-GVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
              <li>Sie legen gem. Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.</li>
              <li>Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
              <li>Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem wir unterliegen.</li>
              <li>Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.</li>
            </ol>
            <br />
            <br />
            b) Information an Dritte
            <br />
            Haben wir die Sie betreffenden personenbezogenen Daten öffentlich gemacht und sind wir gem. Art. 17 Abs. 1 DS-GVO zu deren Löschung verpflichtet, so treffen er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt haben.
            <br />
            <br />
            c) Ausnahmen
            <br />
            Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist
            <br />
            <ol>
              <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
              <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
              <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DS-GVO;</li>
              <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DS-GVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
              <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
            </ol>
          </Text>

          <Text intent="label">4. Recht auf Einschränkung der Verarbeitung</Text>
          <Text>
            Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:
            <br />
            <ol>
              <li>wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es uns ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;</li>
              <li>die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;</li>
              <li>wir die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigen, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder</li>
              <li>wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DS-GVO eingelegt haben und noch nicht feststeht, ob unsere berechtigten Gründe gegenüber Ihren Gründen überwiegen.</li>
            </ol>
            <br />
            Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden. Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt, werden Sie von uns unterrichtet bevor die Einschränkung aufgehoben wird.
          </Text>

          <Text intent="label">5. Recht auf Widerspruch</Text>
          <Text>
            Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DS-GVO erfolgt, Widerspruch einzulegen.
            <br />
            Wir verarbeiten die Sie betreffenden personenbezogenen Daten dann nicht mehr, es sei denn, es gibt zwingende schutzwürdige Gründe für die Verarbeitung, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            <br />
            Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG – Ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.
          </Text>

          <Text intent="label">6. Recht auf Beschwerde</Text>
          <Text>
            Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DS-GVO verstößt.
            <br /><br />
            Die für unser Internetangebot zuständige Aufsichtsbehörde ist:
            <br /><br />
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz
            <br />
            Hintere Bleiche 34
            <br />
            55116 Mainz
            <br /><br />
            Telefon: +49 (0) 6131 208-2449
            <br />
            Telefax: +49 (0) 6131 208-2497
            <br />
            Webseite: https://www.datenschutz.rlp.de/
            <br />
            E-Mail: poststelle(at)datenschutz.rlp.de
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
