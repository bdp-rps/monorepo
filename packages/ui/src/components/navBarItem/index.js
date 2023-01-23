import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'
import Click from '../click'

export default function NavBarItem({ href, active, onClick, children }) {
  const { theme } = useFela()

  return (
    <Box
      as={Click}
      href={href}
      onClick={onClick}
      paddingTop={[3, , 2, 4]}
      paddingBottom={[3, , 2, 4]}
      paddingRight={[1.5, , 2]}
      paddingLeft={[1.5, , 2]}
      width={['100%', , 'auto']}
      minWidth={50}
      extend={{
        textDecoration: 'none',
        cursor: 'pointer',
        ':hover': {
          '> p': {
            color: theme.tokens.secondaryLight,
          },
        },
        '@media (min-width: 800px)': {
          ':first-child': {
            paddingLeft: 0,
          },
          ':last-child': {
            paddingRight: 0,
          },
        },
      }}>
      <Text
        color={active ? theme.tokens.secondary : theme.tokens.background}
        extend={{ fontSize: 18, lineHeight: 1 }}>
        {children}
      </Text>
    </Box>
  )
}
