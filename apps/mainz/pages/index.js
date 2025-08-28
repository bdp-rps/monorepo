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
  Grid,
  IconCalendar,
  IconClock,
  IconCompass,
} from '@bdp-rps/ui'
import NextLink from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import getEvents from '../utils/getEvents'

import { getBlogposts, getBlogpostsMainz } from '../api/getBlogposts'
import { useState } from 'react'

let gruppenDaten = [
  {
    img: 'schlange',
    name: 'Meute Schlange',
    age: 'von sieben bis elf',
    place: 'Im Stammesheim',
    time: 'ab 17:00 Uhr bis 18:30 Uhr',
    day: 'Mittwochs',
    description:
      'Wir sind eine fröhliche und neugierige Gruppe von Kindern im Alter von 7 bis 11 Jahren, die gemeinsam die Welt der Pfadfinder entdecken. Bei uns steht das spielerische Lernen und die Entwicklung von Teamgeist im Vordergrund. Wir basteln, singen, spielen und erleben spannende Abenteuer in der Natur. Durch gemeinsame Aktivitäten und kleine Herausforderungen lernen wir, Verantwortung zu übernehmen und uns gegenseitig zu unterstützen. Unsere Gruppenstunden sind geprägt von Kreativität, Bewegung und viel Spaß.',
    since: '2022',
    groupLeaders: 'Anna, Leo und Jette',
  },
  {
    img: 'salix-alba',
    name: 'Salix Alba',
    age: 'von elf bis dreizehn',
    place: 'Im Sommer im Garten und im Winter im Stammesheim',
    time: 'ab 17:00 Uhr bis 18:30 Uhr',
    day: 'Donnerstags',
    description:
      'Wir sind eine Gruppe von Jugendlichen, die ihre Begeisterung für die Natur, Gemeinschaft und Musik teilt. Bei uns steht das gemeinsame Erleben im Vordergrund - ob beim Wandern, Zelten oder Musizieren. Unsere Fahrt nach Slowenien war dabei nur einer von vielen Höhepunkten. In unseren Gruppenstunden entdecken wir die Natur, lernen neue Lieder und wachsen als Gruppe zusammen.',
    since: '2024',
    groupLeaders: 'Thore und Timon',
  },
  {
    img: 'ignis-hedera',
    name: 'Ignis Hedera',
    age: 'von zwölf bis fünfzehn',
    place: 'Im Sommer im Garten und im Winter im Stammesheim',
    time: 'ab 17:00 Uhr bis 18:30 Uhr',
    day: 'Mittwochs',
    description:
      'Wir sind eine lebendige Gruppe von Jugendlichen, die gemeinsam die Pfadfinderwelt erkundet. Bei uns steht der Spaß an der Gemeinschaft und das Entdecken neuer Fähigkeiten im Mittelpunkt. Ob beim Kochen über dem Feuer, bei Geländespielen oder beim gemeinsamen Musizieren - wir lernen spielerisch, Verantwortung zu übernehmen und als Team zusammenzuarbeiten. Unsere Gruppenstunden sind geprägt von Kreativität, Abenteuer und gegenseitigem Respekt.',
    since: '2023',
    groupLeaders: '',
  },
  {
    img: 'raueber',
    name: 'RäubeR/Runde',
    age: 'von achtzehn bis anfang dreißig',
    place: 'Im Garten, im Stammesheim oder manchmal in der Kneipe',
    time: 'ab 19:00 Uhr',
    day: 'Mittwochs',
    description:
      'Wir sind eine engagierte Gruppe von jungen Erwachsenen im Alter von etwa 18 bis Mitte 30, die mit Herz und Leidenschaft das Pfadfinderleben aktiv gestalten. Gemeinsam organisieren wir alles, was die Pfadfindergruppe am Laufen hält – von den wöchentlichen Gruppenstunden über spannende Fahrten bis hin zu unvergesslichen Lagern.Unser Ziel ist es, den jüngeren Generationen spannende und lehrreiche Abenteuer zu ermöglichen, während wir gleichzeitig selbst als Team zusammenwachsen und Verantwortung übernehmen. Wir legen großen Wert auf Zusammenarbeit, Kreativität und Spaß, während wir die Grundlagen der Pfadfinderbewegung in die Praxis umsetzen.',
    since: '2022',
    groupLeaders: '',
  },
]

const InfoPoint = ({ info, title }) => {
  return (
    info && (
      <Box>
        <Text variant="note">{title}</Text>
        <Text>{info}</Text>
      </Box>
    )
  )
}

const GroupComponent = ({ data }) => {
  const { name, img, age, day, place, description, since, groupLeaders, time } =
    data
  return (
    <Tile
      title={<Text>{name}</Text>}
      image={'/images/gruppen/' + img + '.jpg'}
      imageHeight={400}>
      <Box space={6}>
        <Box space={2}>
          <Box direction="row" space={2}>
            <Box direction="row" space={1} alignItems="center">
              <IconCalendar size={18} />
              <Text variant="note">{day}</Text>
            </Box>
            <Box direction="row" space={1} alignItems="center">
              <IconClock size={18} />
              <Text variant="note">{time}</Text>
            </Box>
          </Box>
          <Box direction="row" space={1} alignItems="center" flexWrap="wrap">
            <Box>
              <IconCompass size={18} />
            </Box>
            <Box>
              <Text variant="note">{place}</Text>
            </Box>
          </Box>
        </Box>
        <Box
          extend={{
            borderTop: '1px solid',
            borderColor: 'grey',
          }}
        />
        <Box space={4}>
          <Grid columns={['1fr', , '1fr 1fr']} gap={4}>
            <InfoPoint
              title="Unsere Gruppenleitungen sind"
              info={groupLeaders}
            />
            <InfoPoint title="Unsere Altersspanne ist" info={age} />
            <InfoPoint title="Uns gibt es seit" info={since} />
          </Grid>
          <InfoPoint title="Wer wir sind" info={description} />
        </Box>
        <Box alignSelf="flex-start">
          <Button href="mailto:pfadfinden@bdp-mainz.de" size="small">
            Kontaktiere uns
          </Button>
        </Box>
      </Box>
    </Tile>
  )
}

export default function page({ events, posts, postsMainz }) {
  const theme = useTheme()

  const [firstPost, ...otherPosts] = posts
  const [firstPostsMainz, ...otherPostsMainz] = postsMainz

  return (
    <Template>
      <Head>
        <title>Pfadfinder Stamm Tilia Mainz Startseite</title>
        <meta
          name="description"
          content="Startseite für die Pfadfinder Stamm Tilia Mainz Neustadt BdP"
        />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={8}>
          <Box space={2}>
            <Text variant="category">Ahoi und Hallo!</Text>
            <Text>
              Wir sind eine bunte Gruppe aus begeisterten BdP Pfadfinder*innen,
              die schon lange von einem Stamm in Mainz träumen. Pfadfinden
              bedeutet für uns Gemeinschaft, Freundschaften fürs Leben,
              Abenteuer und einen sicheren Ort, an dem wir neue Ideen
              ausprobieren und ganz wir selbst sein können.
              <br />
              Das wollen wir nicht nur für uns zurück in den Alltag holen,
              sondern vor allem vielen Kindern und Jugendlichen hier in der
              Stadt ermöglichen. Diese Idee soll nun endlich in die Tat
              umgesetzt werden: <br />
            </Text>
          </Box>
          <Box>
            <Text variant="subtitle">Das sind unsere Gruppen:</Text>
            <Grid gap={5} columns={['1fr', , '1fr 1fr']}>
              {gruppenDaten.map((data) => (
                <GroupComponent data={data} key={data.name} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Layout>

      <Layout
        grow={1}
        alignSelf="stretch"
        paddingTop={5}
        paddingBottom={10}
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text variant="subtitle">Das läuft bei uns.</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <PostTile
              highlight
              href={'/stamm/blog/' + firstPostsMainz.id}
              {...firstPostsMainz}
            />
          </Box>
          <Box grow={1} space={4}>
            {otherPostsMainz.splice(0, 2).map((post, index) => (
              <PostTile key={index} href={'/stamm/blog/' + post.id} {...post} />
            ))}
          </Box>
        </Box>
        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/stamm/blog" size="large">
            Weitere Beiträge
          </Button>
        </Box>
      </Layout>
      <Layout
        grow={1}
        alignSelf="stretch"
        paddingTop={5}
        paddingBottom={10}
        extend={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <Text variant="subtitle">Das läuft in unserem Landesverband.</Text>
        <Box paddingTop={2} direction={['column', , , 'row']} space={4}>
          <Box grow={5}>
            <PostTile
              highlight
              href={'/landesverband/blog/' + firstPost.id}
              {...firstPost}
            />
          </Box>
          <Box grow={1} space={4}>
            {otherPosts.splice(0, 2).map((post, index) => (
              <PostTile
                key={index}
                href={'/landesverband/blog/' + post.id}
                {...post}
              />
            ))}
          </Box>
        </Box>
        <Box paddingTop={9} alignSelf="flex-start" alignItems="flex-start">
          <Button href="/landesverband/blog/" size="large">
            Weitere Beiträge
          </Button>
        </Box>
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const events = await getEvents()
  const posts = await getBlogposts()
  const postsMainz = await getBlogpostsMainz()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      events,
      posts: posts.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
      postsMainz: postsMainz.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
    },
  }
}
