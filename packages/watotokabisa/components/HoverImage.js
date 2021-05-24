import React, { useState } from 'react'
import { Box } from '@bdp-rps/ui'

export default function HoverImage({ children, imageURL, ...props }) {
  return (
    <Box
      {...props}
      extend={{
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
