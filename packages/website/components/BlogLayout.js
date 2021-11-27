import React from 'react'
import { Text, Spacer, Link, Box, useTheme } from '@bdp-rps/ui'
import { MDXProvider } from '@mdx-js/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Layout from './Layout'
import Template from './Template'

import months from '../data/months.json'

const Title = ({ children }) => {
  const theme = useTheme()

  return (
    <Box
      paddingTop={1}
      paddingBottom={0.5}
      paddingLeft={2}
      paddingRight={2}
      alignSelf="flex-start"
      extend={{ backgroundColor: theme.tokens.secondary }}>
      <Text
        intent="title"
        color={theme.tokens.primary}
        extend={{ lineHeight: 1, wordBreak: 'break-all' }}>
        {children}
      </Text>
    </Box>
  )
}

export default ({ children, meta }) => {
  const router = useRouter()
  const id = router.pathname.replace('/blog/', '')

  return (
    <Template>
      <Layout paddingTop={10} paddingBottom={20}>
        <NextLink href="/blog" passHref>
          <Link>← Zurück zur Übersicht</Link>
        </NextLink>
        <Spacer size={5} />
        <Title>{meta.title}</Title>
        <Spacer size={1} />
        <Text intent="note">
          von {meta.author.name} ({meta.author.position}), veröffentlicht am{' '}
          {meta.date.day} {months[meta.date.month - 1]}, {meta.date.year}
        </Text>
        <Spacer size={8} />
        <MDXProvider
          components={{
            p: ({ children }) => (
              <Text as="p" extend={{ marginBottom: 18 }}>
                {children}
              </Text>
            ),
            h1: ({ children }) => <Text intent="subtitle">{children}</Text>,
            h2: ({ children }) => <Text intent="subtitle">{children}</Text>,
            h3: ({ children }) => <Text intent="category">{children}</Text>,
            h4: ({ children }) => <Text>{children}</Text>,
            h5: ({ children }) => <Text intent="note">{children}</Text>,
            a: ({ href, children }) => <Link href={href}>{children}</Link>,
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
                  src.indexOf('http') === -1 ? '/posts/' + id + '/' + src : src
                }
              />
            ),
          }}>
          <main>{children}</main>
        </MDXProvider>
      </Layout>
    </Template>
  )
}
