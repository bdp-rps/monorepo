import { Text, Box, Spacer, Button, useTheme } from '@bdp-rps/ui'
import { useRouter } from 'next/router'
import { useFela } from 'react-fela'
import NextLink from 'next/link'
import renderAuthors from '@bdp-rps/liedgut/lib/utils/renderAuthors'

import Layout from '../../components/Layout'
import Link from '../../components/Link'
import Song from '../../components/Song'
import Header from '../../components/Header'

export default function Page() {
  const theme = useTheme()
  const router = useRouter()
  const { songId } = router.query

  const songData = require('@bdp-rps/liedgut/lib/songs/' + songId)

  if (!songData) {
    return <div>Something went wrong.</div>
  }

  return (
    <>
      <Header />
      <Layout>
        <Box gap={2} paddingTop={10} paddingBottom={10}>
          <NextLink passHref href="/liedgut">
            <Link>← Zurück zur Übersicht</Link>
          </NextLink>
          <Spacer size={2} />
          <Song {...songData.default} />
          <Box paddingTop={4} gap={2} alignSelf="flex-start" direction="row">
            <Button>Als PDF herunterladen</Button>
            <NextLink href={'/liedgut/edit/' + songId}>
              <Button variant="secondary">Änderungsvorschlag</Button>
            </NextLink>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

Page.getInitialProps = () => ({})
