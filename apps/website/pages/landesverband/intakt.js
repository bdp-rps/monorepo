import * as React from 'react'
import { useRouter } from 'next/router'

import { Box, Text, Spacer, Tile, Link } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import intakt from '../../data/intakt.json'

export default () => (
  <Template>
    <Layout paddingTop={5} paddingBottom={10}>
      <Text variant="subtitle">INTAKTOPUS</Text>

      <Box space={2}>
        <Text variant="category">Das Intakt Team</Text>
        <Text>
          Wir sind INTAKTOPUS, das neu gegründete Intakt-Team des LV RPS. Wir
          haben uns zusammengefunden um das Interesse des Bundesarbeitskreis
          INTAKT verstärkt in unseren LV zu tragen. Dazu gehören der Schutz vor
          physischer, psychischer oder speziell sexualisierter Gewalt an Kindern
          und Jugendlichen im Bund. Unser Ziel ist es die Präventionsarbeit im
          LV zu verstärken und auf Kursen wie auch in euren Stämmen präsenter zu
          machen. Auch wollen wir dafür sorgen dass ihr immer wisst wen ihr bei
          Problemen ansprechen könnt. Ihr erreicht uns unter{' '}
          <Link href={'mailto:intakt@bdp-rps.de'}>intakt[at]bdp-rps.de</Link>.
        </Text>
      </Box>
    </Layout>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}
    >
      <Box space={8}>
        <Box direction="row" wrap="wrap" space={4}>
          {intakt.map(({ name, group, contact, position }) => (
            <Box
              marginBottom={4}
              basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}
            >
              <Tile title={name}>
                <Box>
                  <Text>{position}</Text>
                </Box>
                {group ? (
                  <Box>
                    <Text>Stamm {group}</Text>
                  </Box>
                ) : null}
                {contact ? (
                  <Box>
                    <Text>
                      <Link href={'mailto:' + contact}>{contact}</Link>
                    </Text>
                  </Box>
                ) : null}
              </Tile>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  </Template>
)
