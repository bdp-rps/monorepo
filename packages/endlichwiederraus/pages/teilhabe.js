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
        <title>Teilhabe und Mitgestaltung</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={2} paddingBottom={5}>
        <Box space={2}>
          <Text intent="title">Teilhabe und Mitgestaltung</Text>
          <Text>
            Unsere Demokratie lebt von Mitbestimmung. Leider sind Kinder und
            Jugendliche aber zu häufig nur Objekte der Politik. Sie sind auf die
            Vertretung durch Jugendverbände, Schulen und Eltern angewiesen, um
            politische Wirkung zu erzielen. Und das, obwohl junge Menschen auch
            selbst große Lust auf Politik haben. Wo sie kindgerecht beteiligt
            werden, gestalten sie Politik begeistert mit. Wenn man sie dabei
            ernst nimmt, werden Mündigkeit, Verständnis für demokratische
            Prozesse und die Bereitschaft zur Teilhabe gestärkt.
            <br />
            <br />
            <Text intent="subtitle" align="center" color={theme.colors.red}>
              Von wechselnden und unklaren Schulkonzepten bis hin zu
              geschlossenen Spielplätzen: In der Corona-Krise waren Kinder und
              Jugendliche zu häufig zum Spielball erwachsener Interessen. Zum
              Schutz der älteren Generationen mussten sie großen Verzicht üben.
              Fördermaßnahmen werden zu oft lediglich als Ausgleich für
              schulische Leistungsdefizite gedacht und finanziert. n der
              Krisenorganisation, wie auch in der abzusehenden „Normalität“
              werden Kinder und Jugendliche, weil sie keine starke Stimme
              (Lobby) haben, nicht berücksichtigt. Die so wichtigen emotionalen,
              psychologischen und sozialen Bedürfnisse von Kindern und
              Jugendlichen finden in der in die öffentliche Debatte zu wenig
              Beachtung.
            </Text>
            <br />
            Im BdP werden auch die Jüngsten altersgerecht an allen
            Entscheidungsprozessen beteiligt. Dadurch lernen sie spielerisch die
            Regeln des Zusammenlebens in einer demokratischen Gemeinschaft.
            Pfadfinden lebt vom aktiven Mitmachen und Mitbestimmen. Kinder und
            Jugendliche gestalten ihr Gruppenleben gemeinsam und bestimmen
            gemeinsam über ihr Programm. Diese Mitbestimmung auf allen Ebenen
            des BdP gibt Kindern und Jugendlichen erste politische
            Wirksamkeitserfahrungen und bestärkt sie in ihrem Engagement. Der
            BdP wird als Jugendverband von jungen Erwachsenen geführt. Seine
            Jugendarbeit wird aber vor Ort in hohem Maße durch Kinder und
            Jugendliche gestaltet. So ist der BdP ein starkes und authentisches
            Organ junger Menschen in Deutschland.
          </Text>
        </Box>
      </Layout>
    </Template>
  )
}
