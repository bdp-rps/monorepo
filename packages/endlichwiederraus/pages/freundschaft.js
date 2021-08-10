import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Tile,
  Link,
  Button,
  ScrollView,
} from '@bdp-rps/ui'
import NextLink from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'

export default () => {
  const theme = useTheme()

  return (
    <Template>
      <Head>
        <title>Gemeinschaft und Freundschaft</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout>
        <Box space={5} paddingTop={10} paddingBottom={10}>
          <Text intent="title">Gemeinschaft und Freundschaft</Text>
          <Box
            as="img"
            width={450}
            src="elemente/rosa/element_6.png"
            extend={{
              position: 'absolute',
              marginTop: -70,
              marginLeft: -40,
              zIndex: -1,
            }}
          />
          <br />
          <Text>
            Kinder und Jugendliche benötigen für eine gesunde Entwicklung die
            Gesellschaft Gleichaltriger, der peer group.
            <br />
            Sie hilft bei der Einübung grundlegender Verhaltensweisen und beim
            Verstehen sozialer Zusammenhänge ebenso wie bei der Entwicklung von
            Empathiefähigkeit und Verantwortungsgefühl. Kinder und Jugendliche
            suchen die Zugehörigkeit zu einer verlässlichen Gemeinschaft, die
            ihnen Rückhalt und Sicherheit bietet.
          </Text>
        </Box>
      </Layout>
      <br />
      <br />
      <Box extend={{ backgroundColor: theme.colors.blueLight }}>
        <Layout paddingTop={20} paddingBottom={20}>
          <Box
            as="img"
            width={[300, , 400]}
            src="elemente/rosa/element_7.png"
            alignSelf="center"
            marginLeft={['5%', , '10%']}
            marginTop={[-51, , -55]}
            extend={{
              position: 'absolute',
              marginLeft: '10%',
              zIndex: 0,
            }}
          />
          <Text intent="alternative" align="center" color="white">
            Durch lange Phasen des Distanzunterrichts und anhaltende
            Kontaktbeschränkungen konnten Kindern und Jugendlichen während der
            Pandemie viel zu wenige positive Gemeinschaftserfahrungen machen.
            Durch fehlende Gruppenaktivitäten blieben oft nur die statischen
            Beziehungen im direkten familiären Umfeld. Außerdem war es ihnen im
            Lockdown nicht möglich, neue Freundschaften zu knüpfen.
          </Text>
        </Layout>
      </Box>
      <br />
      <Layout paddingTop={10} paddingBottom={15}>
        <Text>
          <Box
            as="img"
            width={300}
            src="elemente/rosa/element_3.png"
            extend={{
              display: 'inline',

              marginLeft: -50,
              marginRight: -80,
              marginTop: -150,
              opacity: 1,
              float: 'left',
            }}
          />
          Pfadfinden findet im BdP in altersgerechten Gruppen statt, damit
          Kinder und Jugendliche vielfältige soziale Bindungen aufbauen und
          ausprobieren können. In unseren Gruppen sind alle willkommen.
          <br />
          Bei uns muss man keine Leistung bringen, um akzeptiert zu werden. Alle
          werden genau so angenommen, wie sie sind.
          <br />
          Da wir zusammen durch dick und dünn gehen, entstehen tragfähige
          Freundschaften, die oft ein Leben lang halten.
          <Box
            as="img"
            width={250}
            src="elemente/rosa/element_4.png"
            alignSelf="center"
            extend={{
              display: 'inline',
              marginTop: -50,
              marginLeft: -30,
              zIndex: 0,
              float: 'right',
            }}
          />{' '}
          Gleichzeitig lernen junge Menschen, ihre Rolle innerhalb der Gruppe zu
          finden. So erleben Pfadfinder*innen sich selbst als wichtigen Teil der
          Gemeinschaft. Sie wissen sich in der Gruppe angenommen und
          wertgeschätzt. So wachsen Kinder und Jugendliche durch Pfadfinden über
          sich hinaus.
        </Text>
      </Layout>
    </Template>
  )
}
