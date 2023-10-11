import * as React from 'react'
import { Box, Text, Tile, Link } from '@bdp-rps/ui'

import staemme from '../data/staemme.json'

export default () => (
  <React.Fragment>
    <Box direction="row" wrap="wrap" space={4}>
      {staemme
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
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
                  Kontakt: <Link href={'mailto:' + contact}>{leader}</Link>
                </Text>
              </Box>
              <Box>
                <Link href={website}>{website}</Link>
              </Box>
            </Tile>
          </Box>
        ))}
    </Box>
  </React.Fragment>
)
