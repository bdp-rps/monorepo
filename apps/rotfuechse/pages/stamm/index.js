import Head from 'next/head'

import { Text, Box } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Stamm Rotfüchse Herxheim Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich der Pfadfinder Stamm Rotfüchse Herxheim BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Box space={12}>
        <Box>
          <Text>
            Als Aufbaugruppe Rotfüchse bestehen wir zurzeit aus einer Meute mit
            _ Kindern im Alter von 7 bis 12 und einer Runde von etwa _ Rangern
            und Rovern, der ältesten Stufe im BdP.
            <br /> In den Gruppenstunden mit der Meute wird jede Woche ganz viel
            gespielt, gelacht, gesungen, gebaut und gebastelt.
            <br /> <br />
            <Text subStyle="emphasis">
              Neue Gesichter sind hier herzlich willkommen!
            </Text>
            <br />
            <br />
            Der Rotfuchs ist ein cleveres und anpassungsfähiges Tier, das in
            vielen Regionen der Welt zuhause ist. Als Symbol steht der Fuchs für
            Klugheit, Neugier und Geschicklichkeit – Eigenschaften, die auch uns
            als Pfadfindergruppe inspirieren. Rotfüchse sind außerdem soziale
            Tiere, die in Familienverbänden leben und sich gemeinsam um ihre
            Jungen kümmern. Das passt gut zu unserer Idee von Gemeinschaft, in
            der wir einander unterstützen, zusammen Abenteuer erleben und
            Verantwortung für unsere Umwelt übernehmen. Zudem ist der Fuchs ein
            fester Teil unserer Natur, der uns an unsere Verbundenheit mit der
            Wildnis erinnert. Der Name Rotfüchse ist für uns nicht nur ein
            Symbol für Zusammenhalt und Kreativität, sondern bringt auch unsere
            Begeisterung für die Natur und das Pfadfinden zum Ausdruck. Und ganz
            ehrlich – der Fuchs ist einfach ein super faszinierendes Tier!
          </Text>
        </Box>
      </Box>
    </Layout>
  </Template>
)
