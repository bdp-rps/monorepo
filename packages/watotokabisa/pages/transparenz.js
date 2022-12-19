import * as React from 'react'

import { Box, Text, Spacer, useTheme } from '@bdp-rps/ui'

import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import Link from '../components/Link'

export default function page() {
  const theme = useTheme()
  return (
    <Template heroHeight="60vh">
      <Head>
        <title>Transparenz - Watoto Kabisa</title>
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <Text variant="subtitle">Informationen über Watoto Kabisa e.V.</Text>
          <Box
            maxWidth={theme.maxReadWidth}
            as="ol"
            space={6}
            extend={{
              listStyleType: 'none',
            }}>
            <li>
              <Text variant="category">
                1. Name, Sitz, Anschrift und Gründungsjahr
              </Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    <Link>zu Name, Sitz, Anschrift und Kontaktdaten</Link>
                  </Text>
                </li>
                <li>
                  <Text>Gründungsjahr 2011</Text>
                </li>
                <li>
                  <Text>Ansprechpartnerin: Wiebke Spieß</Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">
                2. Vollständige Satzung sowie Angaben zu den Zielen unserer
                Organisation
              </Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    zur <Link>Satzung</Link>
                  </Text>
                </li>
                <li>
                  <Text>
                    <Link>allgemeine Angaben zu den Zielen</Link>
                  </Text>
                </li>
                <li>
                  <Text>
                    bezogen auf unsere <Link>Themenfelder</Link>
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">3. Angaben zur Steuerbegünstigung</Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    Unsere Arbeit ist wegen Förderung der Kriminalprävention
                    nach dem letzten uns zugegangenen
                    Freistellungsbescheid​​​​​​​ des Finanzamts für
                    Körperschaften I, Berlin (Steuernummer 27/678/53744) vom
                    15.09.2021 (Veranlagungszeitraum 2018 bis 2020) nach § 5
                    Abs. 1 Nr. 9 des Körperschaftsteuergesetzes von der
                    Körperschaftssteuer und nach § 3 Nr. 6 des
                    Gewerbesteuergesetzes von der Gewerbesteuer befreit.
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">
                4. Name und Funktion wesentlicher Entscheidungsträger
              </Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    zum <Link>Jahresbericht 2020</Link> (S. 68 ff.)
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">5. Tätigkeitsbericht</Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    zum <Link>Jahresbericht 2020</Link> (S. 68 ff.)
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">6. Personalstruktur</Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    zum <Link>Jahresbericht 2020</Link> (S. 68 ff.)
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">7. Angaben zur Mittelherkunft</Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    zum <Link>Jahresbericht 2020</Link> (S. 68 ff.)
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">8. Angaben zur Mittelverwendung</Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>
                    zum <Link>Jahresbericht 2020</Link> (S. 68 ff.)
                  </Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">
                9. Gesellschaftsrechtliche Verbundenheit mit Dritten
              </Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>keine</Text>
                </li>
              </Box>
            </li>
            <li>
              <Text variant="category">
                9. Namen von juristischen Personen, deren jährliche Zahlungen
                mehr als 10 % des Gesamtjahresbudgets ausmachen
              </Text>
              <Box
                as="ul"
                extend={{
                  listStyleType: 'none',
                }}
                paddingTop={2}
                paddingLeft={4}
                space={1}>
                <li>
                  <Text>keine</Text>
                </li>
              </Box>
            </li>
          </Box>
        </Layout>
      </Box>
    </Template>
  )
}
