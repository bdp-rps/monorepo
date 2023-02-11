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

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import staemme from '../../data/staemme.json'

export default () => (
  <Template>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      grow={1}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <Box direction="row" wrap="wrap" space={4}>
        {staemme
          .sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          )
          .map(({ leader, name, location, website, contact }) => (
            <Box
              marginBottom={4}
              basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
              <Tile title={name}>
                <Box>
                  <Text>{location}</Text>
                </Box>
                <Box>
                  <Text>
                    Kontakt: <Link action={'mailto:' + contact}>{leader}</Link>
                  </Text>
                </Box>
                <Box>
                  <Link action={website}>{website}</Link>
                </Box>
              </Tile>
            </Box>
          ))}
      </Box>
    </Layout>
    <Box height={40} extend={{ backgroundColor: 'white' }} />
  </Template>
)
