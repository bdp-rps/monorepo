import React from 'react'
import { Text, Spacer, Box, useTheme } from '@bdp-rps/ui'
import { MDXProvider } from '@mdx-js/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Layout from './Layout'
import Template from './Template'
import Link from './Link'

import months from '../data/months.json'

export default ({ children, meta }) => {
  const router = useRouter()
  const id = router.pathname.replace('/blog/', '')

  return (
    <Template
      image={'/posts/' + id + '/' + meta.teaser + '.jpg'}
      title={meta.title}>
      <Box bg="background.primary">
        <Layout paddingTop={10} paddingBottom={20}>
          <Link action="/blog">← Zurück zur Übersicht</Link>

          <Spacer size={5} />

          <Text variant="note">
            von {meta.author.name}, veröffentlicht am {meta.date.day}{' '}
            {months[meta.date.month - 1]}, {meta.date.year}
          </Text>
          <Spacer size={8} />
          <MDXProvider
            components={{
              p: ({ children }) => (
                <Text as="p" extend={{ marginVertical: 18 }}>
                  {children}
                </Text>
              ),
              h1: ({ children }) => <Text variant="subtitle">{children}</Text>,
              h2: ({ children }) => <Text variant="subtitle">{children}</Text>,
              h3: ({ children }) => <Text variant="category">{children}</Text>,
              h4: ({ children }) => <Text>{children}</Text>,
              h5: ({ children }) => <Text variant="note">{children}</Text>,
              a: ({ href, children }) => <Link action={href}>{children}</Link>,
              img: ({ src, title, alt, extend, ...props }) => (
                <Box
                  as="img"
                  width="auto"
                  maxWidth="100%"
                  extend={{
                    border: '8px solid white',
                    boxShadow: '0 0 0 2px rgb(0, 0, 0, 0.1)',
                    ...extend,
                  }}
                  src={
                    src.indexOf('http') === -1
                      ? '/posts/' + id + '/' + src
                      : src
                  }
                />
              ),
            }}>
            <main>{children}</main>
          </MDXProvider>
        </Layout>
      </Box>
    </Template>
  )
}
