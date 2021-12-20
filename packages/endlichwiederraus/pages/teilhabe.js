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
        <title>Teilhabe und Mitgestaltung</title>
        <meta
          type="description"
          content="Endlich wieder Raus ist eine Kampagne des Bund der Pfadfinderinnen und Pfadfinder."
        />
      </Head>
      <Layout paddingTop={10} paddingBottom={10}>
        <Box space={5}>
          <Text intent="title" color={theme.colors.grey1}>
            Teilhabe und Mitgestaltung
          </Text>
          <br />
          <Text extend={{ zIndex: 1 }}>
            Unsere Demokratie lebt von Mitbestimmung. Leider sind Kinder und
            Jugendliche aber zu häufig nur Objekte der Politik. Sie sind auf die
            Vertretung durch Jugendverbände, Schulen und Eltern angewiesen, um
            politische Wirkung zu erzielen. Und das, obwohl junge Menschen auch
            selbst große Lust auf Politik haben. Wo sie kind- und jugendgerecht
            beteiligt werden, gestalten sie Politik begeistert mit. Wenn man sie
            dabei ernst nimmt, werden Mündigkeit, Verständnis für demokratische
            Prozesse und die Bereitschaft zur Teilhabe gestärkt.
          </Text>
          <Box
            as="img"
            src="/elemente/orange/element_1.png"
            alignSelf="flex-end"
            width={300}
            extend={{
              position: 'relative',
              marginBottom: -40,
              marginTop: -180,
              zIndex: 0,
              opacity: 0.3,
            }}
          />
        </Box>
      </Layout>
      <br />
      <br />

      <Box
        paddingTop={15}
        paddingBottom={15}
        extend={{ backgroundColor: theme.colors.blueLight }}>
        <Layout>
          <Text
            intent="alternative"
            color={theme.colors.white}
            extend={{ zIndex: 1 }}>
            <Box
              as="img"
              width={[280, , 300]}
              src="/elemente/gelb/element_3.png"
              marginLeft={[-30, , -25]}
              marginRight={[-19, , -16]}
              marginTop={[-10, , -27]}
              extend={{
                display: 'inline',
                float: 'left',
              }}
            />
            Von wechselnden und unklaren Schulkonzepten bis hin zu geschlossenen
            Spielplätzen: In der Corona-Krise waren Kinder und Jugendliche zu
            häufig Spielball erwachsener Interessen. Zum Schutz der älteren
            Generationen mussten sie großen Verzicht üben. Fördermaßnahmen
            werden zu oft lediglich als Ausgleich für schulische
            Leistungsdefizite gedacht und finanziert. In der Krisenorganisation,
            wie auch in der abzusehenden „Normalität“ werden Kinder und
            Jugendliche, weil sie keine starke Stimme (Lobby) haben, nicht
            berücksichtigt. Die so wichtigen emotionalen, psychologischen und
            sozialen Bedürfnisse von Kindern und Jugendlichen finden in der
            öffentlichen Debatte zu wenig Beachtung.
          </Text>
        </Layout>
      </Box>
      <br />
      <Layout paddingTop={15} paddingBottom={20}>
        <Box
          as="img"
          src="/elemente/gelb/element_4.png"
          alignSelf="flex-end"
          width={[270, , 300]}
          extend={{
            position: 'absolute',
            marginTop: -260,
            zIndex: 0,
          }}
        />
        <Box
          as="img"
          width={400}
          src="/elemente/orange/element_2.png"
          extend={{
            position: 'absolute',
            marginTop: -120,
            opacity: 0.7,
            marginLeft: -120,
            zIndex: -1,
          }}
        />
        <Text extend={{ zIndex: 1 }}>
          Im BdP werden auch die Jüngsten altersgerecht an allen
          Entscheidungsprozessen beteiligt. Dadurch lernen sie spielerisch die
          Regeln des Zusammenlebens in einer demokratischen Gemeinschaft.
          Pfadfinden lebt vom aktiven Mitmachen und Mitbestimmen. Kinder und
          Jugendliche gestalten ihr Gruppenleben gemeinsam und bestimmen
          gemeinsam über ihr Programm. Diese Mitbestimmung auf allen Ebenen des
          BdP gibt Kindern und Jugendlichen erste politische
          Wirksamkeitserfahrungen und bestärkt sie in ihrem Engagement. Der BdP
          wird als Jugendverband von jungen Erwachsenen geführt. Seine
          Jugendarbeit wird aber vor Ort in hohem Maße durch Kinder und
          Jugendliche gestaltet. So ist der BdP ein starkes und authentisches
          Organ junger Menschen in Deutschland.
        </Text>
      </Layout>
    </Template>
  )
}
