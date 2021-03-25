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
      <Text intent="subtitle">Der Stamm</Text>
      <Spacer size={2} />
      <Text>
        Unser Stamm des BdP (Bund der Pfadfinderinnen und Pfadfinder) heißt Franz von Sickingen. Er ist vor rund 50 Jahren gegründet worden und nach einem der letzten großen Ritter in der Pfalz benannt. Zu unserem Stamm gehören zur Zeit:
       <br />
        eine recht große Gruppe an Wölflingen (unsere Meute), bestehend aus Kindern im Alter von 7 bis 11 Jahren
        <br />
        mehrere Pfadfindergruppen (genannt Sippen) mit Teilnehmern von 11 bis 15 Jahren sowie
        <br />
        die Ranger/Rover (R/R) ab dem Alter von 16 Jahren
      </Text>
    </Layout>
  </Template>
)
