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
      <Text variant="subtitle">Geschichte</Text>
      <Spacer size={4} />
      <Box space={6}>
        <Box space={2}>
          <Text>
            „Wie? Du bist Pfadfinder? Verkauft ihr Kekse?“ Solche Fragen werden
            Pfadfindern oft gestellt, einfach, weil viele Leute gar nicht
            wissen, wer Pfadfinder sind und was sie eigentlich machen. Der
            Pfadfinderstamm „Franz von Sickingen“ aus Eisenberg ist seit über 50
            Jahren in der Jugendarbeit aktiv. Zurzeit hat er etwa 100
            Mitglieder. 100 Kinder und Jugendliche, hauptsächlich zwischen 6 und
            25 Jahren, die sich jede Woche auf ihrem Pfadfindergelände in
            Steinborn treffen, um gemeinsam zahlreiche Abenteuer zu erleben.
            <br />
            Der Pfadfinderstamm „Franz von Sickingen“ wurde 1965 von Günther
            Dreyer, damals Lehrer an der Grundschule Eisenberg, gegründet und
            nach einem der letzten Ritter der Pfalz benannt. Zunächst gehörte
            der Stamm zum Deutschen Pfadfinderbund Westmark.
            <br />
          </Text>
          <Tile
            title="Stamm Franz von Sickingen 1965"
            image="/images/franzVonSickingen_2.jpeg"
            imageHeight={500}></Tile>
          <Text>
            Günther hatte im Donnersbergkreis bereits eine Gruppe in
            Kirchheimbolanden und eine in Göllheim gegründet, bevor er als
            Lehrer vom Weiherhof nach Eisenberg versetzt wurde. Mit der
            Eisenberger Gruppe bildeten die beiden anderen Gruppen die
            Gruppierung „Franz von Sickingen“. Von den dreien blieb nur der
            Stamm in Eisenberg bestehen.
            <br />
            Im Jahr 1971 trat der Stamm dem Bund der Pfadfinder (BdP) bei und
            vollzog mit diesem im Jahr 1975/76 die Fusion mit dem Bund Deutscher
            Pfadfinderinnen (BdPinnen/BDPw) zum heutigen Bund der
            Pfadfinderinnen und Pfadfinder (BdP).
            <br />
          </Text>
          <Tile
            title="Stamm Franz von Sickingen Bundeslager 2017"
            image="/images/franzVonSickingen_1.jpeg"
            imageHeight={500}></Tile>
          <Text>
            Heute ist der Stamm eine ständig wachsende Jugendorganisation, die
            viele Lager und Fahrten erlebt und sich auch im Landesverband
            Rheinland-Pfalz/Saar aktiv engagiert.
            <br />
            In den vergangenen Jahren hat der Stamm „Franz von Sickingen“
            gemeinsam viele große und kleine Abenteuer und zahlreiche Lager und
            Fahrten erlebt.
            <br />
            So feierte man im Jahr 2015 50-jähriges Jubiläum mit einem großen
            Fest auf dem renovierten Pfadfindergelände in Steinborn und war im
            selben Jahr auch gemeinsam mit anderen Stämmen aus dem Landesverband
            Rheinland-Pfalz/Saar in Norwegen unterwegs.
            <br />
            Im Jahr 2017 stand das große Bundeslager an der Mecklenburgischen
            Seenplatte an, welches alle 4 Jahre stattfindet und Pfadfinder*innen
            aus ganz Deutschland und auch internationale Stämme zusammenbringt.
            <br />
            Das Jahr 2018 hielt ebenfalls zahlreiche Aktionen bereit. So ging es
            beispielsweise im Sommer für die Pfadfinderstufe zum Wandern nach
            Frankreich in die Vogesen. Die Wölflinge beschäftigten sich 2018
            ausführlicher mit dem Projekt „LV RPS summt!“. Zu diesem Zweck wurde
            ein gemeinsam entwickeltes Langzeitprogramm in zahlreichen Meuten
            des Landesverbands durchgeführt, dessen Schwerpunkt auf dem Thema
            Bienen und deren Schutz lag.
            <br />
            Im Jahr 2019 führte die Wanderlust die Pfadfinderstufe in das schöne
            Luxemburg und im Herbst ging es auf Segeltörn auf dem Ijsselmeer.
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
