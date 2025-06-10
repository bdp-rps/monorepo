import * as React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { WatotoKabisa } from '@bdp-rps/shared'
import {
  Text,
  Spacer,
  Link,
  Box,
  Button,
  Grid,
  Card,
  useTheme,
} from '@bdp-rps/ui'
import { format } from 'small-date'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

const MapView = dynamic(() => import('../../components/MapView'), {
  ssr: false,
})

export default ({ data }) => {
  const theme = useTheme()
  const total = data.reduce(
    (total, entry) => total + entry['Kilometer'] * entry['Personen'],
    0
  )
  const percentage = Math.floor((total / 40075) * 10000) / 100

  const formatter = new Intl.NumberFormat('de-DE')

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={15} grow={1}>
        <Box space={8}>
          <Box space={4}>
            <Box space={2}>
              <Box alignSelf="center">
                <Image src="/images/weltreise.jpeg" width={300} height={300} />
              </Box>

              <Box space={1}>
                <Box direction="row" justifyContent="space-between">
                  <Text variant="subtitle">{percentage}%</Text>
                  <Text variant="subtitle">
                    {formatter.format(total)} / {formatter.format(40075)} km
                  </Text>
                </Box>
                <Box width="100%" height={35} bg="rgb(200, 200, 200)">
                  <Box
                    width={percentage + '%'}
                    height={35}
                    bg={theme.tokens.primary}
                  />
                </Box>
              </Box>
            </Box>
            <Card>
              <Text variant="category">Das ist so viel wie:</Text>
              <Text>Einmal vom Bodensee nach Sylt und zurück!</Text>
            </Card>
            <Text>Projektbeschreibung.</Text>
            <Box alignSelf="flex-start">
              <Button href="">Fahrt einreichen</Button>
            </Box>
          </Box>

          <hr />

          <Box space={4}>
            <Text variant="category">Fahrtenbuch</Text>
            {data.length > 0 ? (
              <Grid gap={3} columns={['1fr', '1fr 1fr']}>
                {data.map((entry) => (
                  <Entry
                    groups={entry['Stämme (semikolon-getrennt)']}
                    groupName={entry['Gruppenname (optional)']}
                    startDate={entry['Von']}
                    endDate={entry['Bis']}
                    people={entry['Personen']}
                    distance={entry['Kilometer']}
                    location={entry['Fahrtengebiet'].split(',')}
                    report={entry['Fahrtenbericht (optional)']}
                  />
                ))}
              </Grid>
            ) : (
              <Text>Bisher wurden noch keine Fahrten eingereicht.</Text>
            )}
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}

const toDate = (date) => new Date(date.split('.').reverse().join('-'))

function Entry({
  groups,
  groupName,
  startDate,
  endDate,
  people,
  distance,
  report,
  location,
}) {
  return (
    <Card extend={{ padding: 0 }}>
      <Box grow={1}>
        <Box grow={1} space={3} padding={4}>
          <Box direction="row" justifyContent="space-between">
            <Box>
              <Text variant="subtitle">
                {groups} {groupName ? '(' + groupName + ')' : ''}
              </Text>
              <Text>
                {format(toDate(startDate), 'dd.MM', { locale: 'de-DE' })} -{' '}
                {format(toDate(endDate), 'dd.MM.yyyy', { locale: 'de-DE' })}
              </Text>
            </Box>

            <Box alignItems="flex-end">
              <Text variant="category">{distance * people} km</Text>
              <Text>{people} Personen</Text>
            </Box>
          </Box>
          {report && (
            <Box grow={1}>
              <Text variant="note">
                <span
                  dangerouslySetInnerHTML={{
                    __html: report.replaceAll('\n', '<br />'),
                  }}
                />
              </Text>
            </Box>
          )}
        </Box>

        <MapView position={location} radius={(distance * 1000) / 2} />
      </Box>
    </Card>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://opensheet.vercel.app/1Ql3GZyPaY8IL8s0JlOTHm2l-_tq5jMrfxJaFS1xTYdY/Sheet1'
  )
  const data = await res.json()

  return {
    // alle 60 minuten
    revalidate: 60 * 60,
    props: {
      data,
    },
  }
}
