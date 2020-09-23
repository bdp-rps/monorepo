import { Text, Box, Spacer, Button, useTheme } from '@bdp-rps/ui'
import { useRouter } from 'next/router'
import { useFela } from 'react-fela'
import NextLink from 'next/link'

import Layout from '../components/Layout'
import Link from '../components/Link'
import Song from '../components/Song'
import Header from '../components/Header'
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
        <Box space={2} paddingTop={6} paddingBottom={12}>
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
            <NextLink href={'/edit/' + songId}>
              <Button variant="secondary">Änderungsvorschlag</Button>
            </NextLink>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

Page.getInitialProps = () => ({})
