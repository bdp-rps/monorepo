import React, { useState } from 'react'
import {
  Box,
  Link,
  TextInput,
  Text,
  Button,
  useTheme,
  useField,
} from '@bdp-rps/ui'
import NextLink from 'next/link'
import {
  arrayMap,
  arrayReduce,
  arrayFilter,
  objectMap,
  objectReduce,
} from 'fast-loops'

import ListItem from '../components/ListItem'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

import songList from '../src/songs'
import removeChords from '../src/utils/removeChords'
import removeBreaks from '../src/utils/removeBreaks'

function SongList({ songs }) {
  const search = useField({ name: 'search' })
  const theme = useTheme()

  const normalizedSearch = search.value.toLowerCase().trim()
  const isFiltered = normalizedSearch.length > 0

  const hits = objectMap(
    songs,
    (
      {
        title,
        content,
        normalizedTitle,
        normalizedContent,
        normalizedAlternativeTitle,
      },
      name
    ) => {
      const titleIndex = normalizedTitle.indexOf(normalizedSearch)
      const contentIndex = normalizedContent.indexOf(normalizedSearch)

      const matchesTitle = titleIndex !== -1
      const matchesContent = contentIndex !== -1
      const matchesAlternativeTitle =
        normalizedAlternativeTitle.includes(normalizedSearch)

      const isVisible =
        matchesTitle || matchesContent || matchesAlternativeTitle

      const shownTitle = matchesTitle ? (
        <>
          {title.substr(0, titleIndex)}
          <b>{title.substr(titleIndex, normalizedSearch.length)}</b>
          {title.substr(normalizedSearch.length + titleIndex, title.length)}
        </>
      ) : (
        title
      )

      const shownContent = matchesContent && (
        <>
          {contentIndex - 20 > 0 ? '...' : null}
          {content.substring(Math.max(contentIndex - 20, 0), contentIndex)}
          <b>
            {content.substr(
              contentIndex,
              Math.min(normalizedSearch.length, 50)
            )}
          </b>
          {normalizedSearch.length <= 50
            ? content.substring(
                normalizedSearch.length + contentIndex,
                contentIndex + 50
              )
            : null}
          {contentIndex + 50 < content.length ? '...' : null}
        </>
      )

      return {
        isVisible,
        title: shownTitle,
        content: shownContent,
      }
    }
  )

  const totalHits = objectReduce(
    hits,
    (totalHits, { isVisible }) => totalHits + (isVisible ? 1 : 0),
    0
  )

  return (
    <Box minHeight="95vh" paddingTop={4} paddingBottom={15} space={1}>
      <TextInput
        {...search.props}
        placeholder={
          'Suche nach Titel oder Liedtext z.B. "Am Ural" oder "schöne Stadt am Karmar"'
        }
      />
      <Text color="grey">{totalHits} Lieder gefunden</Text>

      <Box paddingTop={2}>
        {arrayMap(Object.keys(hits), (name) => {
          const { title, content, isVisible } = hits[name]

          return (
            <NextLink key={name} href={'/' + name} passHref>
              <ListItem
                extend={{
                  display: isVisible ? 'flex' : 'none',
                }}>
                <Box>
                  <Text color={theme.tokens.primary}>{title}</Text>
                  {isFiltered && <Text>{content}</Text>}
                </Box>
              </ListItem>
            </NextLink>
          )
        })}
      </Box>
    </Box>
  )
}

export default function Page({ songs }) {
  return (
    <>
      <Header />
      <Box grow={1}>
        <Layout>
          <SongList songs={songs} />
        </Layout>
      </Box>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const songs = arrayReduce(
    songList,
    (songs, name) => {
      const song = require('../src/songs/' + name + '.json')

      const content = removeChords(removeBreaks(song.content))

      return {
        ...songs,
        [name]: {
          ...song,
          content,
          normalizedContent: content.toLowerCase(),
          normalizedTitle: song.title.toLowerCase(),
          normalizedAlternativeTitle: song.alternativeTitle.toLowerCase(),
        },
      }
    },
    {}
  )

  return {
    props: {
      songs,
    },
  }
}
