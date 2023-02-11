import * as React from 'react'
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

export default () => (
  <Template>
    <Layout paddingTop={10} paddingBottom={15}>
      <Text as="p" substyle="emphasis">
        Zuschussanträge
      </Text>
      <Text>
        <Link
          href="/files/Aenderungen_Soziale_Bildung_Corona_und_01_07_.pdf"
          download>
          - Änderung der Förderrichtlinien für Soziale Bildungsmaßnahmen während
          der Corona-Pandemie
        </Link>
        <br />
        <Link
          href="/files/Beiblatt-SB_einkommensschw TN ab 01_07_2021.pdf"
          download>
          - Beiblatt zum Antrag
        </Link>
        <br />
        <Link action="/files/Merkblatt_EKS_ab_01_07_.pdf" download>
          - Merkblatt zur Förderung junger Menschen aus einkommensschwachen
          Familien bei Maßnahmen der Sozialen Bildung
        </Link>
      </Text>
    </Layout>
  </Template>
)
