import React, { useState } from 'react'
import { Box, TextInput, Text, Button, useTheme } from '@bdp-rps/ui'
import NextLink from 'next/link'

import Link from '../components/Link'
import ListItem from '../components/ListItem'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

import songList from '../src/songs'

const songData = songList.reduce((songData, name) => {
  const song = require('../src/songs/' + name + '.json')

  songData[name] = {
    ...song,
    content: song.content
      .replace(/\{[A-Z0-9]*\}/gi, '')
      .replace(/(?:\r\n|\r|\n)/gi, ' '),
    normalizedContent: song.content
      .replace(/\{[A-Z0-9]*\}/gi, '')
      .replace(/(?:\r\n|\r|\n)/gi, ' ')
      .toLowerCase(),

    normalizedTitle: song.title.toLowerCase(),
  }

  return songData
}, {})

const SongList = () => {
  const [search, setSearch] = useState('')
  const theme = useTheme()

  const normalizedSearch = search.toLowerCase().trim()

  return (
    <Box minHeight="95vh" paddingTop={5} paddingBottom={15} space={5}>
      <TextInput
        value={search}
        onChange={setSearch}
        placeholder={
          'Suche nach Titel oder Liedtext z.B. "Am Ural" oder "schöne Stadt am Karmar"'
        }
      />

      <Box>
        {songList.map(name => {
          const {
            title,
            normalizedTitle,
            content,
            normalizedContent,
          } = songData[name]

          const titleIndex = normalizedTitle.indexOf(normalizedSearch)
          const matchesTitle = titleIndex !== -1

          const contentIndex = normalizedContent.indexOf(normalizedSearch)
          const matchesContent = contentIndex !== -1

          return (
            <NextLink key={name} href={'/' + name} passHref>
              <ListItem
                extend={{
                  display: matchesTitle || matchesContent ? 'flex' : 'none',
                }}>
                <Box>
                  <Text color={theme.tokens.primary}>
                    {matchesTitle ? (
                      <>
                        {title.substr(0, titleIndex)}
                        <b>
                          {title.substr(titleIndex, normalizedSearch.length)}
                        </b>
                        {title.substr(
                          normalizedSearch.length + titleIndex,
                          title.length
                        )}
                      </>
                    ) : (
                      title
                    )}
                  </Text>
                  {normalizedSearch.length > 0 ? (
                    <Text>
                      {matchesContent ? (
                        <>
                          {contentIndex - 20 > 0 ? '...' : null}
                          {content.substring(
                            Math.max(contentIndex - 20, 0),
                            contentIndex
                          )}
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
                      ) : null}
                    </Text>
                  ) : null}
                </Box>
              </ListItem>
            </NextLink>
          )
        })}
      </Box>
    </Box>
  )
}

export default () => (
  <>
    <Header />
    <Layout>
      <SongList />
    </Layout>
    <Footer />
  </>
)
