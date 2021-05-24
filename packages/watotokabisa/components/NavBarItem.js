import React from 'react'
import { Box, Text, useTheme } from '@bdp-rps/ui'

export default function NavBarItem({ href, active, onClick, children }) {
  const theme = useTheme()
  return (
    <Box
      as={href ? 'a' : 'div'}
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
          '> h3': {
            color: theme.tokens.secondary,
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
        color={active ? theme.tokens.secondary : 'white'}
        intent="heading"
        extend={{ lineHeight: 1 }}>
        {children}
      </Text>
    </Box>
  )
}
