import React from 'react'
import { Text, Spacer, Link, Box, useTheme } from '@bdp-rps/ui'

import ReactMarkdown from 'react-markdown'

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
        variant="title"
        color={theme.tokens.primary}
        extend={{ lineHeight: 1, wordBreak: 'break-all' }}>
        {children}
      </Text>
    </Box>
  )
}

export default ({ children, meta, image }, props) => {
  const router = useRouter()
  const id = router.pathname.replace('/blog/', '')
  return (
    <Template backgroundImage={`url("https://docs.bdp-rps.de${image}")`}>
      <Layout paddingTop={10} paddingBottom={20}>
        <NextLink href="/blog" passHref>
          <Link>← Zurück zur Übersicht</Link>
        </NextLink>
        <Spacer size={5} />
        <Title>{meta.title}</Title>
        <Spacer size={1} />
        <Text variant="note">
          von {meta.author.name}, veröffentlicht am {meta.date.day}{' '}
          {months[meta.date.month]}, {meta.date.year}
        </Text>
        <Spacer size={8} />
        <ReactMarkdown
          escapeHtml={false}
          components={{
            p: ({ children }) => (
              <Text as="p" extend={{ marginBottom: 18 }}>
                {children}
              </Text>
            ),
            h1: ({ children }) => <Text variant="subtitle">{children}</Text>,
            h2: ({ children }) => <Text variant="subtitle">{children}</Text>,
            h3: ({ children }) => <Text variant="category">{children}</Text>,
            h4: ({ children }) => <Text>{children}</Text>,
            h5: ({ children }) => <Text variant="note">{children}</Text>,
            a: ({ href, children }) => <Link href={href}>{children}</Link>,
            br: () => <br />,
            n: () => <br />,
            hr: () => <Text>Hallo</Text>,
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
          {children}
        </ReactMarkdown>
      </Layout>
    </Template>
  )
}
