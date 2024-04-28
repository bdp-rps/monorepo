import * as React from 'react'
import { Box, Grid, Text, Tile, Link } from '@bdp-rps/ui'

import staemme from '../data/staemme.json'

export default () => (
  <Grid gap={4} columns={['1fr', , '1fr 1fr', '1fr 1fr 1fr']}>
    {staemme
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      .map(({ leader, name, location, website, contact }) => (
        <Tile title={name}>
          <Box>
            <Text>{location}</Text>
          </Box>
          <Box>
            <Text>
              <Link href={'mailto:' + contact}>{contact}</Link>
            </Text>
          </Box>
          <Box>
            <Link href={website}>{website}</Link>
          </Box>
        </Tile>
      ))}
  </Grid>
)
