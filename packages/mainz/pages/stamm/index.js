import { useRouter } from 'next/router'
import Head from 'next/head'

import { Box, Text, Tile, Spacer, Grid } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'
import PostTile from '../../components/PostTile'

const ProfileTile = ({ image, name, age, goal, job }) => {
  return (
    <Box
      marginBottom={4}
      basis={['100%', , 'calc(50% - 16px)', 'calc(33.33% - 16px)']}>
      <Tile title={name} image={`/images/${image}.jpg`} imageHeight={500}>
        <br />
        <Text>Alter: {age}</Text>
        <br />
        <Text>Meine Aufgabe ist: {job}</Text>
        <br />
        <Text>Das würde ich mit dem Stamm gerne mal erleben: {goal}</Text>
      </Tile>
    </Box>
  )
}
const peoples = [
  {
    name: 'Timon',
    age: '26',
    job: 'Stammesführung',
    image: 'timon',
    goal: 'erfolgreich auf dem Peter Rohland Singewettstreit auf der Burg Waldeck teilnehmen.',
  },
  {
    name: 'Thomas',
    age: 'knackige 38',
    job: 'Kassenwart',
    image: 'timon',
    goal: 'ich würde gerne mit dem Stamm mit einen mindestens 50-köpfigen Singekreis am Bundeslager-Singewettstreit  „Im Schatten des Doms“ performen und den ersten Platz machen.',
  },
  {
    name: 'Michelle',
    age: '30',
    job: 'Elternarbeit, Unterstützung der Stammes- und Gruppenführung',
    image: 'michelle',
    goal: 'die erste Versprechensfeier',
  },
  {
    name: 'Victoria',
    age: '28',
    job: ' Elternarbeit, Unterstützung der Stammes- und Gruppenführung',
    image: 'timon',
    goal: 'den Wanderpokal auf dem Landeswölflingslager zu gewinnen.',
  },
  {
    name: 'Ko',
    age: '25',
    job: 'Stammesführung',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Wiebke',
    age: '27',
    job: 'Stammesführung',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Ronja',
    age: '??',
    job: 'Gruppenleitung ',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Melina',
    age: '??',
    job: 'Gruppenleitung ',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Antonia',
    age: '??',
    job: 'Gruppenleitung ',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Leoni',
    age: '22',
    job: 'Gruppenleitung ',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Merle',
    age: '??',
    job: 'Gruppenleitung ',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Mira',
    age: '??',
    job: 'Gruppenleitung ',
    image: 'timon',
    goal: '??',
  },
  {
    name: 'Tobi',
    age: '28',
    job: 'Öffentlichkeitsarbeit ',
    image: 'timon',
    goal: '??',
  },
]
export default () => (
  <Template>
    <Head>
      <title>Pfadfinder Aufbaugruppe Mainz Vorstellung</title>
      <meta
        name="description"
        content="Hier stellts sich die Pfadfinder Aufbaugruppe Mainz Neustadt BdP vor"
      />
    </Head>
    <Layout paddingTop={10} paddingBottom={10}>
      <Box>
        <Text>
          Wir sind eine bunte Gruppe aus begeisterten BdP Pfadfinder*innen, die
          schon lange von einem Stamm in Mainz träumen. Pfadfinden bedeutet für
          uns Gemeinschaft, Freundschaften fürs Leben, Abenteuer und einen
          sicheren Ort, an dem wir neue Ideen ausprobieren und ganz wir selbst
          sein können.Das wollen wir nicht nur für uns zurück in den Alltag
          holen, sondern vor allem vielen Kindern und Jugendlichen hier in der
          Stadt ermöglichen.
        </Text>
      </Box>
      <Spacer size={4} />
      <Box>
        <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
          {peoples.map((people) => (
            <ProfileTile {...people} />
          ))}
        </Grid>
      </Box>
    </Layout>
  </Template>
)
