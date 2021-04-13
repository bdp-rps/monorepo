import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'

export default function Tile({
  image,
  title,
  highlight,
  imageHeight = 120,
  imagePosition = 'center',
  children,
}) {
  const { theme } = useFela()

  const styleProps = {
    image,
    title,
    imageHeight,
  }

  return (
    <Box
      padding={3.5}
      space={2}
      grow={1}
      extend={{
        backgroundColor: 'white',
        boxShadow: '0 5px 5px rgba(0,0,0,.1)',
      }}>
      <Box
        grow={image ? 1 : 0}
        justifyContent="flex-end"
        alignItems="flex-start"
        width="100%"
        height={image ? imageHeight : 'auto'}
        extend={{
          backgroundImage: image ? 'url("' + image + '")' : undefined,
          backgroundSize: 'cover',
          backgroundPosition: imagePosition,
        }}>
        {title ? (
          <Box
            paddingTop={0.5}
            paddingBottom={0.5}
            paddingLeft={2}
            paddingRight={2}
            extend={{ backgroundColor: theme.tokens.secondary }}>
            <Text
              intent={highlight ? 'subtitle' : 'category'}
              color={theme.tokens.primary}>
              {title}
            </Text>
          </Box>
        ) : null}
      </Box>
      <Text>{children}</Text>
    </Box>
  )
}

Tile.propTypes = {
  /** The highlighted tile title. */
  title: PropTypes.string,
  /** The tile main content. */
  children: PropTypes.string,
  /** The highlighted image.. */
  children: PropTypes.string,
}
