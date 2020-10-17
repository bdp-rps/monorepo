import React, { useEffect, useState } from 'react'
import { Text, Box, Spacer, Button, Link, useTheme } from '@bdp-rps/ui'
import { PDFDownloadLink, Font, Document } from '@bdp-rps/react-pdf-renderer'
import { useRouter } from 'next/router'
import { useFela } from 'react-fela'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Song from '../components/Song'
import Header from '../components/Header'
import Footer from '../components/Footer'

import PDFSong from '../src/templates/Song'
import renderAuthors from '../src/utils/renderAuthors'

export default function Page() {
  const theme = useTheme()
  const router = useRouter()
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    Font.register({
      family: 'Bell Gothic',
      src: 'https://liedgut.bdp-rps.app/fonts/Bell_Gothic.ttf',
    })

    Font.register({
      family: 'Bell Gothic Bold',
      src: 'https://liedgut.bdp-rps.app/fonts/Bell_Gothic_Bold.ttf',
      fontWeight: 'bold',
    })
  }, [])

  const { songId } = router.query

  const songData = require('../src/songs/' + songId + '.json')

  if (!songData) {
    return <div>Something went wrong.</div>
  }

  return (
    <>
      <Header />
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
                fileName={songId + '.pdf'}>
                {({ blob, url, loading, error }) => (
                  <Button loading={loading}>Als PDF herunterladen</Button>
                )}
              </Box>
            )}
            <NextLink href={'/bearbeiten/' + songId}>
              <Button variant="secondary">Änderungsvorschlag</Button>
            </NextLink>
          </Box>
        </Box>
      </Layout>
      <Footer />
    </>
  )
}

Page.getInitialProps = () => ({})
