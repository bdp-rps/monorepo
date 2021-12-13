import React from 'react'
import { Box, Click, Text, useTheme } from '@bdp-rps/ui'

export default function NavBarItem({ href, active, children }) {
  const theme = useTheme()
  return (
    <Box
      as={Click}
      href={href}
      paddingHorizontal={3}
      paddingVertical={2}
      alignSelf="flex-start"
      extend={{
        textDecoration: 'none',
        cursor: 'pointer',
      }}>
      <Text
        color="white"
        variant="heading"
        subStyle="emphasis"
        extend={{
          lineHeight: 1.35,
          textShadow: theme.tokens.textOnImageShadow,
          borderBottomWidth: 3,
          borderBottomColor: active ? 'background.secondary' : 'transparent',
          borderBottomStyle: 'solid',
        }}>
        {children}
      </Text>
    </Box>
  )
}
