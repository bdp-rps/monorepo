import React from 'react'
import { Box, Click, Text, useTheme } from '@bdp-rps/ui'

export default function NavBarItem({ active, children, onClick }) {
  const theme = useTheme()
  return (
    <Box
      as={Click}
      onClick={onClick}
      paddingHorizontal={3}
      paddingVertical={2}
      extend={{
        textDecoration: 'none',
        cursor: 'pointer',
      }}>
      <Text
        color={active ? 'yellow' : 'white'}
        extend={{
          lineHeight: 1.35,
          borderBottomWidth: 3,
          borderBottomColor: active ? 'background.secondary' : 'transparent',
          borderBottomStyle: 'solid',
        }}>
        {children}
      </Text>
    </Box>
  )
}
