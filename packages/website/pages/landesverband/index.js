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
    <Layout paddingTop={10} paddingBottom={10}>
      <Text intent="subtitle">Der Landesverband</Text>
      <Spacer size={2} />
      <Text>
        Unser Landesverband besteht aus derzeit rund 20 Stämmen und Aufbaugruppen in Rheinland-Pfalz und dem Saarland.
        In diesen örtlichen Gruppen findet der größte Teil unserer Pfadfinderarbeit statt.
        Hier trifft man sich zu regelmäßigen Gruppenstunden oder bricht zu gemeinsamen Fahrten und Abenteuern auf.
        <br />
        Wir sind ein tatkräftiger Landesverband, der zusammen eine Menge auf die Beine stellt.
        Wir planen und organisieren für alle Altersstufen zusätzlich stammübergreifende Aktionen, 
        um unsere Mitglieder zu vernetzen und die Gemeinschaft zu stärken. 
        Ein Großteil der Arbeit wird von Jugendlichen und jungen Erwachsenen mitgetragen und gestaltet. 
        Hierzu werden unsere jungen Mitglieder schrittweise an die verschiedensten Aufgaben herangeführt und zur Übernahme von Verantwortung bestärkt.
        Unser Landesverband unterstützt diesen Prozess mit einem aufeinander aufbauenden Kurssystem, 
        bei dem Kinder ab 14 Jahren teilnehmen können.
        Nach getaner Arbeit wird aber auch gerne zusammen gefeiert, gelacht und gesungen.
        Als einer der wenigen Landesverbände im BdP kommen wir ohne Hauptamtliche oder ein professionelles Landesbüro aus, was wir für keinen Nachteil halten.
      </Text>
    </Layout>
  </Template>
)
