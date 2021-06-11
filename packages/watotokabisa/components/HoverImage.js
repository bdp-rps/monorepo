import React, { useState } from 'react'
import { Box, useTheme } from '@bdp-rps/ui'

export default function HoverImage({ children, imageURL, ...props }) {
  const theme = useTheme()
  return (
    <Box
      {...props}
      extend={{
        ...theme.border,
        overflow: 'clip',
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        ':hover :first-child': {
          display: 'flex',
        },
      }}>
      <Box
        extend={{
          display: ['flex', , 'none'],
          flex: 1,
        }}>
        {children}
      </Box>
    </Box>
  )
}
