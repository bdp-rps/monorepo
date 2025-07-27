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

import Layout from '../components/Layout'
import Template from '../components/Template'

const MapView = dynamic(() => import('../components/MapView'), {
  ssr: false,
})

// force deploy
const toDateNumber = (date) => toDate(date).getTime()
const toDate = (date) => new Date(...date.split('.').reverse())

export default ({ data }) => {
  const theme = useTheme()
  const total = Math.round(
    data.reduce(
      (total, entry) => total + entry['Kilometer'] * entry['Personen'],
      0
    )
  )

  const sorted = data.sort((a, b) => toDateNumber(b.Bis) - toDateNumber(a.Bis))

  const percentage = Math.floor((total / 40075) * 100000) / 1000

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
            {/* <Card>
              <Text variant="category">Das ist so viel wie:</Text>
              <Text>Einmal vom Bodensee nach Sylt und zurück!</Text>
            </Card> */}
            <Text>
              Wir wollen als Landesverband gemeinsam einmal um die Welt laufen.
              <br />
              Dafür sammeln wir auf unseren Fahrten ein Jahr lang Kilometer und
              teilen Fahrtenberichte und Bilder miteinander.
              <br />
              Trage auch du die Fahrtenkilometer deiner Fahrtengruppe hier ein
              und verfolge unseren Fortschritt.
              <br />
              Freue dich danach über Post von uns und auf ein grandioses
              Abschlussfest auf der Sternfahrt 2026.
            </Text>
            <Box alignSelf="flex-start">
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7_MK0Xqk6rfIlKDksg5SmzzYtkqObBZWCob8kOu-2fRBx0g/viewform?usp=dialog"
                target="_blank">
                Fahrt einreichen
              </Button>
            </Box>
          </Box>

          <hr />

          <Box space={4} maxWidth="100%">
            <Text variant="category">Fahrtenbuch</Text>
            {sorted.length > 0 ? (
              <Box space={3}>
                {sorted.map((entry, index) => (
                  <Entry
                    key={index}
                    groups={entry['Stämme (semikolon-getrennt)']}
                    groupName={entry['Gruppenname (optional)']}
                    startDate={entry['Von']}
                    endDate={entry['Bis']}
                    people={entry['Personen']}
                    distance={entry['Kilometer']}
                    location={entry['Fahrtengebiet'].split(',')}
                    report={entry['Fahrtenbericht (optional)']}
                    images={entry['Fotos (optional)']}
                  />
                ))}
              </Box>
            ) : (
              <Text>Bisher wurden noch keine Fahrten eingereicht.</Text>
            )}
          </Box>
        </Box>
      </Layout>
    </Template>
  )
}

function Entry({
  groups,
  groupName,
  startDate,
  endDate,
  people,
  distance,
  report,
  location,
  images = '',
}) {
  const files = images.split(',').filter(Boolean)

  return (
    <Card
      extend={{
        padding: 0,
      }}>
      <Box direction={['column', , 'row']} grow={0} shrink={1}>
        <Box shrink={1} grow={1} space={3} padding={4}>
          <Box
            shrink={1}
            direction={['column', , 'row']}
            justifyContent="space-between">
            <Box shrink={1}>
              <Text variant="subtitle" extend={{ lineHeight: 1 }}>
                {groups} {groupName ? '(' + groupName + ')' : ''}
              </Text>
              <Text>
                {format(toDate(startDate), 'dd.MM', { locale: 'de-DE' })} -{' '}
                {format(toDate(endDate), 'dd.MM.yyyy', { locale: 'de-DE' })}
              </Text>
            </Box>

            <Box alignItems="flex-end">
              <Text variant="category">{Math.round(distance * people)} km</Text>
              <Text>{people} Personen</Text>
            </Box>
          </Box>
          {report && (
            <Box grow={1} shrink={1}>
              <Text variant="note" style={{ maxWidth: '100%' }}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: report.replaceAll('\n', '<br />'),
                  }}
                />
              </Text>
            </Box>
          )}
          {files.length > 0 && (
            <img
              width={400}
              height={300}
              src={files[0]}
              style={{ objectFit: 'cover' }}
            />
          )}
        </Box>
        <Box width={['100%', , 300]} height={[200, , '100%']}>
          <MapView position={location} radius={(distance * 1000) / 2} />
        </Box>
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
