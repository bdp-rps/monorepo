import { Text, Box, Spacer, Button, Link, useTheme } from '@bdp-rps/ui'
import { useRouter } from 'next/router'
import { useFela } from 'react-fela'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Song from '../components/Song'
import Header from '../components/Header'
import Footer from '../components/Footer'
import renderAuthors from '../src/utils/renderAuthors'

export default function Page() {
  const theme = useTheme()
  const router = useRouter()
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
            <Button href={'/dist/' + songId + '.pdf'}>
              Als PDF herunterladen
            </Button>
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
