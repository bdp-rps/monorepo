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

import { getBlogposts } from '../api/getBlogposts'
import { useState } from 'react'

let gruppenDaten = [
  {
    img: 'woelis',
    name: 'Wölflinge',
    age: 'von sieben bis elf',
    place: 'Im Stammesheim',
    time: 'ab 17:00 Uhr bis 19:00 Uhr',
    day: 'Freitags',
    description:
      'Wölflinge heißen die Sieben- bis Elfjährigen, die sich Namen und Begriffe für das Leben in der Meute, ihrer Gruppe, aus dem "Dschungelbuch" von Rudyard Kipling entliehen haben. Wie die Romanfigur Mogli lernen sie, sich in der Gruppe zurecht zu finden, Regeln für das Gruppenleben zu beachten, Aufgaben zu übernehmen, auf andere Rücksicht zu nehmen und tolerant zu sein, aber auch ihrer Fantasie freien Lauf zu lassen. Wölflinge lieben wilde Spiele und Toben. Sie verkleiden sich gerne und können zum Basteln fast alles gebrauchen. Auf kurzen Fahrten erobern sie sich ihre Umgebung und entdecken auf Lagern neue Orte. Und woran erkennt man einen Wölfling? An einem gelben Halstuch und am Wolfskopf auf dem Hemd.',
    groupLeaders: 'Flo Maul ',
  },
  {
    img: 'pfadis',
    name: 'Pfadfinder',
    age: 'von elf bis fünfzehn',
    place: 'Auf der Burg Birkenfeld',
    time: 'ab 18:30 Uhr bis 20:30 Uhr',
    day: 'Mittwochs',
    description:
      'Pfadfinder*innen kennen keine Schranken, keine Grenzen, keine Hindernisse: Die 11- bis 15-Jährigen leben in der Sippe, so heißt in dieser Stufe eine kleine Gruppe von Kindern und Jugendlichen. Das Programm ihrer wöchentlichen Treffen ist abwechslungsreich: Sie lernen Knoten binden und Zelte aufbauen, sie basteln und singen, sie erkunden die Umgebung und engagieren sich sozial. Sie gehen mit der Sippe auf Fahrt – am Wochenende oder in den Ferien, zu Fuß, mit Rad, Floß oder Boot. Das größte Abenteuer aber ist die Großfahrt: Ziel kann der Harz sein, das schwedische Småland oder die Gletscher Islands – immer auf der Spur des Neuen und Ungewissen. Und woran erkennt man die "Pfadis", wie sie sich nennen? An ihrem blau-gelben Halstuch und der Lilie auf ihrer Kluft.',
    groupLeaders: 'Finn Schau',
  },

  {
    img: 'rovis',
    name: 'Ranger/Rover',
    age: 'von sechzehn bis anfang dreißig',
    place: 'Im Garten, im Stammesheim oder manchmal in der Kneipe',
    time: 'ab 19:00 Uhr',
    day: 'Mittwochs',
    description:
      'Ranger und Rover bringen sich mit ihren Fähigkeiten ein: in der Gruppenleitung, bei der Fahrtenorganisation, der Kassenverwaltung oder in der Lagertechnik. Dabei wird eine ganze Menge von ihnen verlangt: Engagement, Einsatz, Zeit, Kompromissbereitschaft, Teamfähigkeit, Motivation und unendlich viel Geduld. Klingt anstrengend - doch die Ranger und Rover sind mit viel Spaß dabei! Ranger und Rover machen das, was ihnen Spaß macht - der Phantasie sind kaum Grenzen gesetzt. Ab 16 Jahren kann jede und jeder Ranger oder Rover sein. Ihre Arbeit ist demokratisch organisiert: Die Gruppe verteilt Aufgaben und trifft Entscheidungen gemeinsam. Es entsteht ein kunterbunter Haufen, der von den Eigenarten und Talenten jedes Einzelnen lebt.',
    groupLeaders: 'Nicole Erschow',
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
  const { name, img, age, day, place, description, groupLeaders, time } = data
  return (
    <Tile
      title={<Text>{name}</Text>}
      image={'/images/gruppen/' + img + '.jpeg'}
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
          </Grid>
          <InfoPoint title="Wer wir sind" info={description} />
        </Box>
        <Box alignSelf="flex-start">
          <Button href="mailto:alinabauer264@gmail.com" size="small">
            Kontaktiere uns
          </Button>
        </Box>
      </Box>
    </Tile>
  )
}

export default function page({ events, posts }) {
  const theme = useTheme()

  const [firstPost, ...otherPosts] = posts

  return (
    <Template>
      <Head>
        <title>Pfadfinder Stamm Sturmvogel Birkenfeld Startseite</title>
        <meta
          name="description"
          content="Startseite für die Pfadfinder Stamm Sturmvogel Birkenfeld Neustadt BdP"
        />
      </Head>
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={8}>
          <Box space={2}>
            <Text variant="category">Ahoi und Hallo!</Text>
            <Text>
              Wir sind der Stamm Sturmvogel Birkenfeld, eine Pfadfindergruppe
              aus Birkenfeld und Mitglied im BdP . Wenn du Spaß an Abenteuern in
              der Natur, neuen Freunden, wilden Spielen und Singerunden am Feuer
              hast, kontaktiere uns gerne und komm zum Schnuppern zu uns in die
              Gruppenstunde!
            </Text>
            <Text>
              Bei jeglichen Fragen rund um das Pfadfinden oder den Stamm
              Sturmvogel steht Euch unsere Stammesführerin Alina Bauer unter der
              Telefonnummer 01517-0893206 zur Verfügung.
            </Text>
            <Text>
              Während den Schulferien entfallen die Gruppenstunden für
              Pfadfinder*innen und Wölflinge.
            </Text>
          </Box>
          <Box>
            <Tile
              title={<Text>Über uns</Text>}
              image={'/images/sturmvogel.jpeg'}
              imageHeight={400}>
              <Box space={4}>
                <Text>
                  Unser Stamm Sturmvogel wurde schon 1953 gegründet und besteht
                  mittlerweile aus über 100 Mitgliedern. Unsere Gruppenstunden
                  finden wöchentlich auf der Burg Birkenfeld statt und wir
                  freuen uns immer über neue Gesichter! Wenn du Interesse hast,
                  kontaktier uns gerne oder schau einfach mal vorbei:)
                </Text>
              </Box>
            </Tile>
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

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      events,
      posts: posts.data.sort(
        (a, b) =>
          new Date(b.attributes.publish) - new Date(a.attributes.publish)
      ),
    },
  }
}
