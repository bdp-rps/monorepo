import React from 'react'

import { Text, Box, useTheme, IconCancel, IconButton } from '@bdp-rps/ui'

export default function Menu({ menuVisible, hideMenu, children, ...props }) {
  const theme = useTheme()

  if (!menuVisible) {
    return null
  }

  return (
    <Box
      alignItems="flex-end"
      extend={{
        background: theme.tokens.primary,
        position: 'fixed',

        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Box padding={4}>
        <IconButton
          icon={(props) => <IconCancel fill="white" {...props} />}
          iconSize={40}
          onClick={hideMenu}
        />
      </Box>
      <Box alignSelf="flex-start" padding={10}>
        {children}
      </Box>
    </Box>
  )
}
