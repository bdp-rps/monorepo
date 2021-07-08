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

const TextBox = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      paddingTop={0.5}
      paddingBottom={0.5}
      paddingLeft={2}
      paddingRight={2}
      alignSelf="flex-start"
      extend={{ backgroundColor: theme.tokens.secondary }}>
      <Text intent="category" color={theme.tokens.primary}>
        {children}
      </Text>
    </Box>
  )
}

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
      <Layout paddingTop={2} paddingBottom={5}>
        <Box space={2}>
          <Text intent="title">Gemeinschaft und Freundschaft</Text>
          <Text>
            Kinder und Jugendliche benötigen für eine gesunde Entwicklung die
            Gesellschaft Gleichaltriger, der peer group. Sie hilft bei der
            Einübung grundlegender Verhaltensweisen und beim Verstehen sozialer
            Zusammenhänge ebenso wie bei der Entwicklung von Empathiefähigkeit
            und Verantwortungsgefühl. Kinder und Jugendliche suchen die
            Zugehörigkeit zu einer verlässlichen Gemeinschaft, die ihnen
            Rückhalt und Sicherheit bietet.
            <br />
            <br />
            <Text intent="subtitle" align="center" color={theme.colors.red}>
              Durch lange Phasen des home schoolings und anhaltende
              Kontaktbeschränkungen konnten Kindern und Jugendlichen während der
              Pandemie viel zu wenige positive Gemeinschaftserfahrungen machen.
              Durch fehlende Gruppenaktivitäten blieben oft nur die statischen
              Beziehungen im direkten familiären Umfeld. Außerdem war es ihnen
              im lockdown nicht möglich neue Freundschaften zu knüpfen.
            </Text>
            <br />
            Pfadfinden findet im BdP in altersgerechten Gruppen statt, damit
            Kinder und Jugendliche vielfältige soziale Bindungen aufbauen und
            ausprobieren können. In unseren Gruppen sind alle willkommen. Bei
            uns muss man keine Leistung bringen, um akzeptiert zu werden. Alle
            werden genau so angenommen, wie sie sind. Da wir zusammen durch dick
            und dünn gehen, entstehen tragfähige Freundschaften, die oft ein
            Leben lang halten. Gleichzeitig lernen junge Menschen, ihre Rolle
            innerhalb der Gruppe zu finden. So erleben Pfadfinder*innen sich
            selbst als wichtigen Teil der Gemeinschaft. Sie wissen sich in der
            Gruppe angenommen und wertgeschätzt. So wachsen Kinder und
            Jugendliche durch Pfadfinden über sich hinaus.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
