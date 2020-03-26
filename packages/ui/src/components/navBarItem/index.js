import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

export default function NavBarItem({ href, onClick, children }) {
  const { theme } = useFela()

  return (
    <Box
      as={href ? 'a' : 'div'}
      href={href}
      onClick={onClick}
      paddingTop={[1, , , 3]}
      paddingBottom={[1, , , 3]}
      paddingRight={1.25}
      paddingLeft={1.25}
      minWidth={50}
      extend={{
        cursor: 'pointer',
        textDecoration: 'none',
        ':first-child': {
          paddingLeft: 0,
        },
        ':last-child': {
          paddingRight: 0,
        },
        ':hover': {
          '> p': {
            color: theme.tokens.secondaryLight,
          },
        },
      }}>
      <Text
        color={theme.tokens.background}
        extend={{ fontSize: 18, lineHeight: 1 }}>
        {children}
      </Text>
    </Box>
  )
}
