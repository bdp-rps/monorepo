import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

export default function Tile({ image, title, children }) {
  const { theme } = useFela()

  const styleProps = {
    image,
    title,
  }

  return (
    <Box
      padding={3}
      spacing={1}
      extend={{
        backgroundColor: 'white',
        boxShadow: '0 5px 5px rgba(0,0,0,.1)',
      }}>
      <Box
        justifyContent="flex-end"
        alignItems="flex-start"
        extend={{
          backgroundImage: image ? 'url("' + image + '")' : undefined,
          backgroundSize: 'cover',
          width: '100%',
          height: image ? 120 : 'auto',
        }}>
        {title ? (
          <Box
            paddingLeft={1.5}
            paddingRight={1.5}
            extend={{ backgroundColor: theme.tokens.secondary }}>
            <Text intent="category">{title}</Text>
          </Box>
        ) : null}
      </Box>
      <Text>{children}</Text>
    </Box>
  )
}
