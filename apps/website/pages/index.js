import * as React from 'react'
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
} from '@bdp-rps/ui'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Template from '../components/Template'
import PostTile from '../components/PostTile'

import getEvents from '../utils/getEvents'

import getBlogposts from '../api/getBlogposts'
import InstaFeed from '../components/InstaFeed'

export default function page({ events, posts }) {
  const theme = useTheme()

  return (
    <Template
      description="Wir sind der Landesverband Rheinland-Pfalz/Saarland im Bund der
    Pfadfinderinnen und Pfadfinder">
      <Layout paddingTop={5} paddingBottom={5}>
        <Box space={2}>
          <Text variant="category">Willkommen bei den Pfadfindern.</Text>
          <Text>
            Wir sind der Landesverband Rheinland-Pfalz/Saarland im Bund der
            Pfadfinderinnen und Pfadfinder.
            <br />
            Unser Bund ist der größte interkonfessionelle Pfadfinderbund in
            Deutschland.
            <br />
            In Rheinland-Pfalz und im Saarland sind wir mit 22 Gruppen präsent.
          </Text>
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
          <Text>Feed in Kürze wieder verfügbar.</Text>
        </Box>
      </Layout>
    </Template>
  )
}

export async function getStaticProps() {
  const events = await getEvents()

  return {
    // alle 20 minuten
    revalidate: 1200,
    props: {
      events,
    },
  }
}
