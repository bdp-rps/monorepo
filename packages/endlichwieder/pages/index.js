import { Box, Text, useTheme, Spacer, Link } from '@bdp-rps/ui'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'
import GroupTile from '../components/GroupTile'

import groups from '../data/groups.json'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Layout paddingTop={5} paddingBottom={10}>
        <Box space={2}>
          <Text intent="title">Endlich wieder Pfadfinden</Text>
          <Spacer size={2} />
          <Text>
            Kinder und Jugendliche leiden besonders unter den
            Coronabeschränkungen und werden in ihrer Entwicklung ausgebremst.
            Sozialkompetenz, Selbstwirksamkeit und Freundschaften erlernen
            Kindern vor allem in Gruppen Gleichaltriger außerhalb des
            Familienverbandes.
            <br />
            <br />
            Für ihre Zukunft, mentale Gesundheit und persönliche Entwicklung,
            für ihre emotionale Entwicklung und ihre nonformelle Bildung
            brauchen Kinder, Jugendliche und junge Erwachsene
          </Text>
          <Box as="ul" paddingLeft={10} extend={{ listStyleType: 'none' }}>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Gemeinschaft und Freundschaft,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Herausforderungen, Abenteuer und prägende Erlebnisse,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Möglichkeiten der Mitgestaltung und der Selbstbestimmung,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Raum für Selbsterfahrung und Ausprobieren sozialer
                Verhaltensweisen,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Aushandeln von Werten und das Vertrauen Verantwortung
                übernehmen zu können,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Möglichkeiten der Mitgestaltung und der Selbstbestimmung,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … besondere Naturerlebnisse,
              </Text>
            </li>
          </Box>

          <Text>
            Mit über 65 Millionen Mitgliedern weltweit und 260.000
            Pfadfinder*innen in Deutschland sind Pfadfinder die größte
            Jugendbewegung der Welt. Seit der Gründung 1907 hat Pfadfinden auch
            in Deutschland bereits Millionen Menschen geprägt und positiven
            Einfluss auf ihre Entwicklung genommen.
            <br />
            <br />
            Wir, die mit über <b>300 Stämmen in fast ganz Deutschland*</b> im
            Bund der Pfadfinderinnen und Pfadfinder e.V. mit{' '}
            <b>über 300 Stämmen</b> in fast ganz Deutschland*{' '}
            <b>rund 30.000 Kinder, Jugendliche und junge Erwachsene</b>{' '}
            erreichen, warten ungeduldig darauf
            <br />
            <br />
            endlich wieder gemeinsam Abenteuer zu erleben
            <br />
            endlich wieder Freundschaften zu pflegen
            <br />
            endlich wieder unsere Gemeinschaft zu erfahren
            <br />
            endlich wieder Natur zu erleben und Klima zu schützen
            <br />
            endlich wieder Verantwortung zu lernen und zu übernehmen
            <br />
            endlich wieder aktiv unser Zusammenleben mit zu gestalten
            <br />
            endlich wieder Grundwerte einer friedlichen und gerechten
            Gesellschaft zu vermitteln.
          </Text>
          <Text intent="note">*außer Mecklenburg-Vorpommern</Text>
        </Box>
      </Layout>
      <Layout
        paddingTop={[0, , , 10]}
        paddingBottom={[10, , , 15]}
        extend={{ backgroundColor: theme.colors.grey8 }}>
        <Box
          extend={{
            display: 'grid',
            gridGap: 12,
            [theme.breakpoints.large]: {
              gridTemplateColumns: '1fr 1fr',
              gridGap: 24,
            },
          }}>
          {groups.map(group => (
            <GroupTile {...group} />
          ))}
        </Box>
      </Layout>
    </Template>
  )
}
