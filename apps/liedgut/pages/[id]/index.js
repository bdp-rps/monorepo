import React, { useEffect, useState } from 'react'
import { useFela } from 'react-fela'
import NextLink from 'next/link'

import { Text, Box, Spacer, Button, Link, useTheme } from '@bdp-rps/ui'
import { PDFDownloadLink, Font, Document } from '@bdp-rps/react-pdf-renderer'
import {
  renderAuthors,
  Song as PDFSong,
  songs as songList,
} from '@bdp-rps/liedgut'

import Layout from '../../components/Layout'
import Song from '../../components/Song'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Page({ id, songData }) {
  const theme = useTheme()
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    Font.register({
      family: 'Bell Gothic',
      src: 'https://liedgut.bdp-rps.app/fonts/Bell_Gothic.ttf',
    })

    Font.register({
      family: 'Bell Gothic Bold',
      src: 'https://liedgut.bdp-rps.app/fonts/Bell_Gothic_Bold.ttf',
      fontWeight: 'bold',
    })

    setMounted(true)
  }, [])

  if (!songData) {
    return <div>Something went wrong.</div>
  }

  return (
    <>
      <Header id={id} title={songData?.title} />
      <Box grow={1}>
        <Layout>
          <Box minHeight="95vh" space={2} paddingTop={6} paddingBottom={25}>
            <Song {...songData} />
            <Box
              paddingTop={4}
              space={2}
              alignSelf={[, 'flex-start']}
              alignItems="flex-start"
              direction={['column', 'row']}>
              {!isMounted ? null : (
                <Box
                  as={PDFDownloadLink}
                  grow={1}
                  alignSelf="stretch"
                  extend={{ textDecoration: 'none' }}
                  document={
                    <Document>
                      <PDFSong {...songData} />
                    </Document>
                  }
                  fileName={id + '.pdf'}>
                  {({ blob, url, loading, error }) => {
                    {
                      console.log(blob, url, loading, error)
                    }
                    return (
                      <Button loading={loading}>Als PDF herunterladen</Button>
                    )
                  }}
                </Box>
              )}
              <NextLink href={'/' + id + '/bearbeiten'}>
                <Button variant="secondary">Änderungsvorschlag</Button>
              </NextLink>
            </Box>
          </Box>
        </Layout>
      </Box>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: songList.map((id) => ({
      params: {
        id,
      },
    })),
  }
}

export async function getStaticProps({ params }) {
  const songs = require('@bdp-rps/liedgut/lib/songs').default
  const songData = songs[params.id]

  return {
    props: {
      songData,
      id: params.id,
    },
  }
}
