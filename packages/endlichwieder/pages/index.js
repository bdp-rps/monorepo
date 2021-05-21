import { Box, Text, useTheme, Spacer, Link } from '@bdp-rps/ui'
import NextLink from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import GroupTile from '../components/GroupTile'

import groups from '../data/groups.json'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Endlich wieder Pfadfinden</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={15}>
        <Box space={2} maxWidth={1000}>
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
          <Box
            as="ul"
            paddingLeft={10}
            extend={{
              listStyleType: 'none',
            }}>
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
                … Raum für Selbsterfahrung und Ausprobieren sozialer
                Verhaltensweisen,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Aushandeln von Werten Verantwortunsgserfahrungen,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … Möglichkeiten der Mitgestaltung und Selbstbestimmung,
              </Text>
            </li>
            <li>
              <Text weight="bold" extend={{ fontStyle: 'italic' }}>
                … besondere Naturerlebnisse und aktiver Klimaschutz
              </Text>
            </li>
          </Box>
          <Text>
            Mit über <b>65</b> Millionen Mitgliedern weltweit und <b>260.000</b>{' '}
            Pfadfinder*innen in Deutschland sind Pfadfinder die größte
            Jugendbewegung der Welt. Seit der Gründung 1907 hat Pfadfinden auch
            in Deutschland bereits Millionen Menschen geprägt und positiven
            Einfluss auf ihre Entwicklung genommen.
            <br />
            <br />
            Wir junge Menschen im Bund der Pfadfinderinnen und Pfadfinder e.V.,
            die mit über <b>300 Stämmen in fast ganz Deutschland*</b> rund{' '}
            <b>30.000</b> Kinder, Jugendliche und junge Erwachsene erreichen,
            wollen <b>endlich wieder raus</b>!"
          </Text>
          <Text intent="note">*außer Mecklenburg-Vorpommern</Text>
          <br />
          <Text>
            Erfahre hier bald mehr über die Kampagne <i>Endlich wieder Raus</i>{' '}
            oder unter{' '}
            <Link href="https://meinbdp.de/display/raus/Endlich+wieder+raus+Startseite">
              meinbdp.de
            </Link>{' '}
            und unseren{' '}
            <Link href="https://www.pfadfinden.de/bund/publikationen/">
              Publikationen
            </Link>{' '}
            wie PFADE und der Bundesmail.
          </Text>
        </Box>
        <Box height={0}>
          <Box
            as="img"
            src="/element1.png"
            width={300}
            extend={{
              position: 'relative',
              transform: 'translateY(-45px)',
              [theme.breakpoints.large]: {
                transform: 'translateY(-55px)',
              },
            }}
          />
        </Box>
      </Layout>
      <Layout
        paddingTop={[10, , , 15]}
        paddingBottom={[10, , , 15]}
        extend={{
          backgroundColor: theme.colors.grey8,
        }}>
        <Text intent="category">
          Normalerweise werden die Stammesheime wöchentlich von zahlreichen
          Pfadfinder*innen genutzt.
          <br />
          Aktuell bleiben ihre Türen jedoch leider verschlossen...
        </Text>

        <br />
        <br />
        <Box
          extend={{
            display: 'grid',
            gridGap: 12,
            [theme.breakpoints.medium]: {
              gridTemplateColumns: '1fr 1fr',
            },
            [theme.breakpoints.large]: {
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
