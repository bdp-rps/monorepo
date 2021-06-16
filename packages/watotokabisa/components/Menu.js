import React from 'react'

import { Text, Box, useTheme, IconCancel, Link } from '@bdp-rps/ui'
export default function Menu({ menuVisible, hideMenu, children, ...props }) {
  const theme = useTheme()
  return menuVisible ? (
    <Box
      alignItems="flex-end"
      extend={{
        ...theme.border,

        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        background: theme.tokens.primary,
        position: 'fixed',
        height: '100%',
        width: '70%',
        top: 0,
        left: 0,
        bottom: 0, 
        right: 0,
      }}>
      <Link onClick={hideMenu}>
        <IconCancel size={40} color={theme.tokens.secondary} />
      </Link>
      <Box alignSelf="flex-start">{children}</Box>
    </Box>
  ) : null
}
