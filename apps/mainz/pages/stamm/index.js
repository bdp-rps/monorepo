import { useRouter } from 'next/router'
import Head from 'next/head'

import { Box, Text } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Aufbaugruppe Tilia Mainz Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich die Pfadfinder Aufbaugruppe Tilia Mainz Neustadt BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Text>
        Als Stamm Tilia bestehen wir zurzeit aus einer Meute mit 15 Kindern im
        Alter von 7 bis 12 und einer Runde von etwa zehn Rangern und Rovern, der
        ältesten Stufe im BdP.
        <br /> In den Gruppenstunden mit der Meute wird jede Woche ganz viel
        gespielt, gelacht, gesungen, gebaut und gebastelt.
        <br /> <br />{' '}
        <Text subStyle="emphasis">
          Neue Gesichter sind hier herzlich willkommen!
        </Text>{' '}
        <br />
        Der Name Tilia Tilia ist der lateinische Name für Linde. Linden wurden
        früher in vielen Dörfern auf dem Marktplatz, also in der Dorfmitte
        gepflanzt. Sie waren ein wichtiger Treffpunkt, ein Ort der versammelten
        Gemeinschaft, die hier zusammen feierte aber auch wichtige
        Entscheidungen traf. Wir finden, dass diese Bedeutung auch zu unserer
        Pfadfindergruppe passt. Als Gemeinschaft von Freundinnen und Freunden
        wollen wir Verantwortung für uns und unser Umfeld übernehmen, kleine
        Abenteuer erleben und eine schöne Zeit miteinander verbringen. Außerdem
        passt die Linde gut zu unserer Naturverbundenheit und Tilia ist einfach
        ein super schönes Wort :)
      </Text>
    </Layout>
  </Template>
)
