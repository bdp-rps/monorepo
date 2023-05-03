import { useRouter } from 'next/router'
import Head from 'next/head'

import { Box, Text, Tile, Spacer, Grid } from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'
const steckbriefe = [
  {
    name: 'Melina',
    age: '22',
    food: 'Nachtisch',
    backpack: 'Sonnenbrille',
    game: 'Das Roboterspiel',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'melina.jpg',
    song: '',
  },
  {
    name: 'Ronja',
    age: '21',
    food: 'Nachtisch',
    backpack: 'Hundeleckerlis',
    game: 'Das Roboterspiel',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'timon.jpg',
    song: '',
  },
  {
    name: 'Tobi',
    age: '29',
    food: 'Restessen',
    backpack: 'Opinel',
    game: '',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'timon.jpg',
    song: '',
  },
  {
    name: 'Wiebke',
    age: '28',
    food: 'Brot mit Nutella',
    backpack: 'Nagelknipser',
    game: 'Schreien und Rennen',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'timon.jpg',
    song: '',
  },
  {
    name: 'Frieda',
    age: '1 1/2',
    food: 'Rinderlunge',
    backpack: 'Schleppleine',
    game: 'Rennen ohne schreien',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'frieda.jpg',
    song: '',
  },
  {
    name: 'Mira',
    age: '22',
    food: 'Pizza Calzone',
    backpack: 'Zahnbürste',
    game: 'Chaosspiel',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'timon.jpg',
    song: 'Bella Ciao',
  },
  {
    name: 'Michelle',
    age: '30',
    food: 'Gefüllte Klöße',
    backpack: 'selbstgemacht Werwolfspielkarten',
    game: 'Das kotzende Känguru',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'timon.jpg',
    song: 'Der Tramper',
  },
  {
    name: 'Victoria',
    age: '29',
    food: 'Kumpir',
    backpack: 'Halstuch',
    game: 'Halstuch',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',

    song: '',
    image: 'timon.jpg',
  },
  {
    name: 'Ko',
    age: '29',
    food: 'Kumpir',
    backpack: 'Halstuch',
    game: 'Halstuch',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',

    song: '',
    image: 'timon.jpg',
  },
  {
    name: 'Anna',
    age: '20',
    food: 'selbstgemachte gefüllte Nudeln',
    backpack: 'zwei Heimweheinhörner',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',

    song: '',
    image: 'timon.jpg',
  },
  {
    name: 'Thomas',
    age: '38',
    food: ' ',
    backpack: ' ',
    game: '',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',

    song: '',
    image: ' ',
  },
  {
    name: 'Timon',
    age: '27',
    food: '',
    backpack: ' ',
    game: '',
    aboutMe:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'timons.jpg',
    song: 'schließ Aug und Ohr',
  },
]

const InfoPoint = ({ info, title }) => {
  return (
    <Text>
      <b>{title}:</b> {info}
    </Text>
  )
}
const SteckBriefComponent = ({ data }) => {
  const { name, age, aboutMe, food, game, backpack, image, song } = data
  return (
    <Tile
      title={data.name}
      image={'/images/steckbriefe/' + image}
      imageHeight={400}>
      <Box space={2}>
        <Text>{aboutMe}</Text>
        <InfoPoint title="Name" info={name} />
        <InfoPoint title="Alter" info={age} />
        <InfoPoint title="Lieblingslied" info={song} />
        <InfoPoint title="Lieblingsspiel" info={game} />
        <InfoPoint title="Lieblingsessen auf Lagern" info={food} />
        <InfoPoint title="Was im Rucksack nicht fehlen darf" info={backpack} />
      </Box>
    </Tile>
  )
}
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
      <Text variant="subtitle">Steckbriefe</Text>
      <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
        {steckbriefe.map((steckbrief) => (
          <SteckBriefComponent data={steckbrief} />
        ))}
      </Grid>
    </Layout>
  </Template>
)
