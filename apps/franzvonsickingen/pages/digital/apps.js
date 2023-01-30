import { useRouter } from 'next/router'
import NextLink from 'next/link'

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

export default () => (
  <Template>
    <Layout
      paddingTop={10}
      paddingBottom={15}
      grow={1}
      extend={{ backgroundColor: 'rgb(235, 235, 235)' }}
    >
      <Box space={4} direction="row" wrap="wrap">
        {/* <Box
          basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}
          paddingBottom={4}>
          <NextLink href="https://liedgut.bdp-rps.app">
            <a style={{ textDecoration: 'none' }}>
              <Tile title="Liedgut">
                <b>Unser Liedgut - digital.</b>
                <br />
                Bietet PDF Downloads, Hörbeispiele und die Möglichkeit neue
                Lieder hinzuzufügen oder einen Änderungsvorschlag für ein
                bestehendes Lied einzureichen.
              </Tile>
            </a>
          </NextLink>
        </Box> */}
        <Box
          basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}
          paddingBottom={4}
        >
          <NextLink href="https://styleguide.bdp-rps.app">
            <a style={{ textDecoration: 'none' }}>
              <Tile title="Styleguide">
                <b>Unser digitaler Styleguide.</b>
                <br />
                Hält die Dokumentation für alle technischen Komponenten des
                Medien-Teams.
              </Tile>
            </a>
          </NextLink>
        </Box>
        <Box
          basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}
          paddingBottom={4}
        >
          <NextLink href="https://playroom.bdp-rps.app">
            <a style={{ textDecoration: 'none' }}>
              <Tile title="Playroom">
                <b>Design und Mockups leicht gemacht.</b>
                <br />
                Playroom bietet die Möglichkeit, schnell und einfach
                Oberflächen-Designs und Mockups umzusetzen.
                <br />
                Es stellt alle Komponenten des Styleguides zur Verfügung.
              </Tile>
            </a>
          </NextLink>
        </Box>
      </Box>
    </Layout>
    <Box height={40} extend={{ backgroundColor: 'white' }} />
  </Template>
)
