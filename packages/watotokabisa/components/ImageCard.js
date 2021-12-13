import React from 'react'
import Image from 'next/image'
import { Box, El, useTheme } from '@bdp-rps/ui'

export default function ImageCard({ image, children, ...props }) {
  const theme = useTheme()

  return (
    <Box
      {...props}
      grow={1}
      shrink={1}
      basis={0}
      extend={{
        position: 'relative',
        border: '2px solid black',
        borderRadius: theme.tokens.borderRadius,
        overflow: 'clip',
        ':hover > .description': {
          opacity: 1,
        },
      }}>
      <El
        as={Image}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        src={image}
        extend={{ zIndex: 0, borderRadius: theme.tokens.borderRadius }}
      />
      {children && (
        <Box
          className="description"
          bg="background.image"
          grow={1}
          alignItems="center"
          justifyContent="center"
          extend={{
            opacity: 1,
            position: 'relative',

            zIndex: 1,
            transition: '200ms opacity ease-in-out',
            medium: {
              opacity: 0,
            },
          }}>
          {children}
        </Box>
      )}
    </Box>
  )
}
