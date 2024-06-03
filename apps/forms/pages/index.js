import * as React from 'react'
import NextLink from 'next/link'
import { Box, Text } from '@bdp-rps/ui'

import Template from '../components/Template'
import Layout from '../components/Layout'

export default function Page() {
  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={20} space={8}>
        <NextLink href="/formulare/reisekosten" passHref>
          <Box
            padding={5}
            as="a"
            extend={{
              textDecoration: 'none',
              backgroundColor: 'white',

              boxShadow: '0 0 4px rgba(0,0,0,0.2)',
              borderRadius: 8,
            }}>
            <Text variant="category">Reisekosten - Auto</Text>
          </Box>
        </NextLink>
        <NextLink href="/formulare/kursanmeldung" passHref>
          <Box
            padding={5}
            as="a"
            extend={{
              textDecoration: 'none',
              backgroundColor: 'white',

              boxShadow: '0 0 4px rgba(0,0,0,0.2)',
              borderRadius: 8,
            }}>
            <Text variant="category">Kursanmeldung</Text>
          </Box>
        </NextLink>
      </Layout>
    </Template>
  )
}
