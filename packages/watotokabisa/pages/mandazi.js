import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Grid,
} from '@bdp-rps/ui'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import CardTile from '../components/CardTile'

import image from '../public/images/mandazi.jpg'

export default () => {
  const theme = useTheme()

  return (
    <Template
      image={image}
      title="Mandazi"
      subTitle="Eine kenianische Teigspezialität!">
      <Head>
        <title>Mandazi, eine kenianische Spezialität!</title>
        <meta type="description" content="Rezept für Mandazis" />
      </Head>

      <Box bg="background.accent">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <CardTile title="Mandazi Rezept" image={'mandazi'} imageHeight={500}>
            <Box space={4}>
              <Text>
                Mandazi sind süße Teigkrapfen, ähnliche wie Berliner oder
                Donuts, die in Kenia sehr viel im Alltag und zu Feierlichkeiten
                serviert werden. Sie schmecken super mit Schwarzem Tee mit ganz
                viel Milch und noch mehr Zucker, wie er gerne in Kenia getrunken
                wird. Mandazi werden frittiert, dass könnt ihr in einer
                Fritteuse, in einem Topf auf dem Herd oder im Freien auf dem
                Feuer machen.
              </Text>
              <Box space={2}>
                <Text variant="subtitle">Zutaten</Text>
                <br />
                <Text>
                  <Box as="ul" paddingLeft={4}>
                    <li>300g Mehl</li>
                    <li>1 TL Backpulver</li>
                    <li>60g Zucker</li>
                    <li>1 Prise Salz</li>
                    <li>Einige EL warmes Wasser</li>
                    <li>Abrieb von 2 Limetten</li>
                    <li>Frittieröl</li>
                  </Box>
                </Text>
              </Box>
              <Box space={2}>
                <Text variant="subtitle">Zubereitung</Text>
                <br />
                <Text>
                  Alle trockenen Zutaten vermischen und mit einem Schuss Öl und
                  dem Wasser zu einem zähen, festen Teig kneten. Der Teig sollte
                  nicht mehr kleben. Den Teig ca. 30 min im Kühlschrank ruhen
                  lassen (ggf. schon vor der Sippenstunde vorbereiten). In der
                  Zwischenzeit das Öl vorbereiten und heiß machen.
                  <br />
                  Den Teig in kleinen Portionen ca. 1,5cm dick ausrollen und mit
                  Gläsern, Ausstechformen oder einem Messer kleine Stücke
                  ausstechen. Diese Teigstücke in das heiße Öl geben und solange
                  frittieren und dabei wenden, bis sie schön braun an der
                  Oberfläche schwimmen. Aus dem Öl nehmen und auf einem
                  Küchentuch abtropfen lassen.
                  <br />
                  <br />
                  Lasst sie euch gut schmecken!
                </Text>
              </Box>
            </Box>
          </CardTile>
        </Layout>
      </Box>
    </Template>
  )
}
