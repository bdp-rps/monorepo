import { useRouter } from 'next/router'

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

import landesleitung from '../../data/landesleitung.json'

const parts = landesleitung.reduce((parts, member) => {
  if (!parts[member.part]) {
    parts[member.part] = []
  }

  parts[member.part].push(member)
  return parts
}, {})

export default () => (
  <Template>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      grow={1}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
      <Box space={8}>
        {Object.keys(parts).map(part => (
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
    </Layout>
    <Box height={40} extend={{ backgroundColor: 'white' }} />
  </Template>
)
