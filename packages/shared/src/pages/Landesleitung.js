import * as React from 'react'

import { Box, Text, Tile, Link } from '@bdp-rps/ui'

import landesleitung from '../data/landesleitung.json'

const parts = landesleitung.reduce((parts, member) => {
  if (!parts[member.part]) {
    parts[member.part] = []
  }

  parts[member.part].push(member)
  return parts
}, {})

export default () => (
  <React.Fragment>
    <Box space={8}>
      {Object.keys(parts).map((part) => (
        <Box>
          <Text variant="subtitle">{part}</Text>

          <Box direction="row" wrap="wrap" space={4}>
            {parts[part].map(({ name, group, contact, position }) => (
              <Box
                marginBottom={4}
                basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
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
      ))}
    </Box>
  </React.Fragment>
)
