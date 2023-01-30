import React from 'react'
import { useFela } from 'react-fela'
import { Box, Text } from '@bdp-rps/ui'

export default function PopupTile({ title, children }) {
  const { theme } = useFela()

  return (
    <Box
      padding={4}
      space={2}
      extend={{
        backgroundColor: 'white',
        boxShadow: '0 5px 5px rgba(0,0,0,.1)',
      }}>
      <Box
        height={12}
        justifyContent="flex-end"
        alignItems="flex-start"
        width="100%">
        {title ? (
          <Box
            paddingTop={1.5}
            paddingBottom={1.5}
            paddingLeft={2}
            paddingRight={2}
            extend={{
              backgroundColor: theme.tokens.secondary,
            }}>
            <Text variant={'subtitle'} color={theme.tokens.primary}>
              {title}
            </Text>
          </Box>
        ) : null}
      </Box>
      <Text>{children}</Text>
    </Box>
  )
}
