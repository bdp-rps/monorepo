import { useRouter } from 'next/router'
import Head from 'next/head'

import { Box, Text, Grid, Tile } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

const steckbriefe = [
  {
    name: 'Melina',
    pronounce: 'sie/ihr',
    jobs: 'Mitglieder Verwaltung und Büro Gedöns',
    memberSince: '2010',
    hikeOrCamp: 'Lager',
    nicestMoment: 'Grundkurs 2023',
    freetime: 'Studiere Erziehungswissenschaften und Archäologie',
    icecream: 'Heidelbeereis',
  },
  {
    name: 'Anna',
    pronounce: 'sie/ihr',
    jobs: 'Meutenführung',
    memberSince: '2010',
    hikeOrCamp: 'Beides',
    nicestMoment:
      'Meine Wache zum R/R-Übergang, da saß meine ganze Runde im Wald verteilt mit Fackeln und plötzlich sind die Waldtiere aus ihren Verstecken gekommen und haben uns besucht. Rehe sind an mir vorbeistolziert, ganz ohne Panik, einfach magisch',
    freetime:
      'die meiste Zeit studieren und lernen, gerne aber auch Rugby spielen',
    icecream: 'Joghurt/Zitrone',
  },
  {
    name: 'Ko',
    pronounce: 'Er/ihm',
    jobs: 'Stammesführung',
    memberSince: '2005',
    hikeOrCamp: 'Fahrt',
    nicestMoment: 'Unsere Großfahrt nach Slowenien ',
    freetime: 'Arbeiten, Musik machen und hören, Lesen, Fahrrad fahren',
    icecream: 'Pistazie',
  },
  {
    name: 'Thore',
    pronounce: 'dey/deren/demm',
    jobs: 'SiFü Salix Alba',
    memberSince: '2014',
    hikeOrCamp: 'Beides',
    nicestMoment:
      'Als ich mitten in der Natur nachts zum ersten Mal einen klaren Blick auf die Milchstraße hatte. ',
    freetime: 'Lesen, Studieren ',
    icecream: 'Haselnuss/Pistazie',
  },
  {
    name: 'Victoria',
    pronounce: 'sie/ihr',
    jobs: 'Lagerküche, Räuberrunden, Hintergrund ',
    memberSince: '2000',
    hikeOrCamp: 'Beides',
    nicestMoment:
      'Die ersten Versprechen bei Tilia, auf Fahrt sein in Norwegen, BuLa-Singewettstreit mit dem ganzen LV',
    freetime: 'Arbeiten, Musik, lesen, wandern, reisen, joggen',
    icecream: 'Zitrone',
  },
  {
    name: 'Mimi',
    pronounce: 'sie',
    jobs: 'Meutenführung',
    memberSince: '2001',
    hikeOrCamp: 'Beides',
    nicestMoment: 'Fahrt in Wales ',
    freetime: 'arbeiten, lesen und reisen ',
    icecream: 'Stracciatella',
  },
  {
    name: 'Carolina',
    pronounce: 'Sie/ihr',
    jobs: 'Heimwärterin',
    memberSince: 'einem 3/4 Jahr',
    hikeOrCamp: 'Fahrt',
    nicestMoment: 'Die Sommerfahrt',
    freetime: 'Studieren, lesen, Musik, mit Freunden treffen',
    icecream: 'Haselnuss',
  },
  {
    name: 'Ole',
    pronounce: 'er/ihm',
    jobs: 'Sippenleitung/Heimwärter',
    memberSince: '1,5 Jahren',
    hikeOrCamp: 'Fahrt',
    nicestMoment: 'die Slowenien Fahrt',
    freetime: 'Chemie Studieren',
    icecream: 'Zitrone',
  },
  {
    name: 'Michelle',
    pronounce: 'sie/ihr',
    jobs: 'R*R-Beauftragte, Küchenfee',
    memberSince: '1999',
    hikeOrCamp: 'Beides',
    nicestMoment:
      'Aus meiner eigenen aktiven Zeit Großfahrt nach Wales 2012, bei den Tilias unser erstes Lager im Mai 2023. ',
    freetime: 'Als Lehrerin Deutsch und Geschichte am Gymnasium unterrichten',
    icecream: 'Pistazie mit Schokokern',
  },
  {
    name: 'Tobi',
    pronounce: '',
    jobs: 'Förderungen und Finanzen',
    memberSince: 'ich fünf Jahre alt bin.',
    hikeOrCamp: 'Beides',
    nicestMoment:
      'Jamboree 2011 in Schweden - Als mein Kindheitsidol Bear Grylls per Fallschirm zur Eröffnungsveranstaltung gelandet ist.',
    freetime:
      'Viel Sport und schauen, dass die deutsche Bahn weniger Energie verbraucht.',
    icecream: 'Spaghetti-Eis',
  },
  {
    name: 'Theresa',
    pronounce: 'Sie/Ihr',
    jobs: 'Gute Laune verbreiten :)',
    memberSince: '2023',
    hikeOrCamp: 'Lager',
    nicestMoment: 'Die Slowenien-Fahrt!',
    freetime: 'Studieren',
    icecream: 'Zitrone-Minze',
  },
  {
    name: 'Mira',
    pronounce: 'sie/ihr',
    jobs: 'Gruppenleitung Ignishedera',
    memberSince: '2007',
    hikeOrCamp: 'Beides',
    nicestMoment: 'Pfadiversprechen meiner aktuellen Sippe',
    freetime:
      'Aktivismus, Freund*innen vor Gericht verteidigen, BDP Bundesvorstand, unterwegs sein, Soziale Arbeit studieren ',
    icecream: 'Cookie',
  },
  {
    name: 'Ronja',
    pronounce: 'sie/ihr',
    jobs: 'beisteuern des Maskottchens',
    memberSince: '2009',
    hikeOrCamp: 'Lager',
    nicestMoment:
      'die Stammeslager als ich selbst noch Wölfling war sind für mich meine Pfadi-Marmeladenglas-Momente',
    freetime: 'Meeresbiologie studieren',
    icecream: 'Zitrone',
  },
  {
    name: 'Timon',
    pronounce: 'er/ihm',
    jobs: 'Stammesführung, Sippe Salix Alba',
    memberSince: '2009',
    hikeOrCamp: 'Fahrt',
    nicestMoment: 'Die erste Tilia Großfahrt nach Slowenien 2024',
    freetime: 'Arbeit (Webentwickler), Gitarre/Klarinette/Kontrabass spielen',
    icecream: 'Pistaccio',
  },
]

const InfoPoint = ({ info, title }) => {
  return (
    <Box space={1}>
      <Text variant="note" subStyle="emphasis">
        {title}
      </Text>
      <Text>{info}</Text>
    </Box>
  )
}
const SteckBriefComponent = ({ data }) => {
  const {
    name,
    pronounce,
    jobs,
    memberSince,
    hikeOrCamp,
    nicestMoment,
    freetime,
    icecream,
  } = data
  return (
    <Tile
      title={
        <>
          <Text>
            {name} ({pronounce})<br />
          </Text>
          <Text variant="note" color="black">
            {jobs}
          </Text>
        </>
      }
      image={'/images/steckbriefe/' + name + '.jpeg'}
      imageHeight={400}>
      <Box space={4} paddingTop={8}>
        <InfoPoint title="Mein schöster Pfadfindermoment" info={nicestMoment} />
        <InfoPoint
          title="Das mache ich so in meiner Freizeit"
          info={freetime}
        />
        <InfoPoint title="Lieblingseis" info={icecream} />
        <InfoPoint title="Fahrt oder Lager?" info={hikeOrCamp} />
      </Box>
    </Tile>
  )
}

export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Stamm Tilia Mainz Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich die Pfadfinder Stamm Tilia Mainz Neustadt BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Box space={12}>
        <Box>
          <Text>
            Als Stamm Tilia bestehen wir zurzeit aus einer Meute mit 15 Kindern
            im Alter von 7 bis 12 und einer Runde von etwa zehn Rangern und
            Rovern, der ältesten Stufe im BdP.
            <br /> In den Gruppenstunden mit der Meute wird jede Woche ganz viel
            gespielt, gelacht, gesungen, gebaut und gebastelt.
            <br /> <br />
            <Text subStyle="emphasis">
              Neue Gesichter sind hier herzlich willkommen!
            </Text>
            <br />
            Der Name Tilia Tilia ist der lateinische Name für Linde. Linden
            wurden früher in vielen Dörfern auf dem Marktplatz, also in der
            Dorfmitte gepflanzt. Sie waren ein wichtiger Treffpunkt, ein Ort der
            versammelten Gemeinschaft, die hier zusammen feierte aber auch
            wichtige Entscheidungen traf. Wir finden, dass diese Bedeutung auch
            zu unserer Pfadfindergruppe passt. Als Gemeinschaft von Freundinnen
            und Freunden wollen wir Verantwortung für uns und unser Umfeld
            übernehmen, kleine Abenteuer erleben und eine schöne Zeit
            miteinander verbringen. Außerdem passt die Linde gut zu unserer
            Naturverbundenheit und Tilia ist einfach ein super schönes Wort :)
          </Text>
          {''}
        </Box>
        <Box>
          <Text variant="subtitle">Das sind wir:</Text>
          <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
            {steckbriefe.map((data) => (
              <SteckBriefComponent data={data} key={data.name} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  </Template>
)
