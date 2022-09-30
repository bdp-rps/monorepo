import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'
import Text from '../text'
import Tile from '../tile'
import NextLink from 'next/link'

export default function PostTile({ id, href, highlight, ...post }) {
  const { image, title, text, subtitle, publish, author } = post.attributes

  return (
    <NextLink href={href} passHref>
      <Box as="a" grow={highlight ? 1 : 0} extend={{ textDecoration: 'none' }}>
        <Tile
          title={title}
          image={'https://docs.bdp-rps.de' + image.data.attributes.url}
          highlight={highlight}
          imageHeight={200}>
          {subtitle}
          <Box paddingTop={2}>
            <Text variant="note">{author}</Text>
          </Box>
        </Tile>
      </Box>
    </NextLink>
  )
}

Tile.propTypes = {
  /** The highlighted tile title. */
  id: PropTypes.string,
  /** The tile main content. */
  href: PropTypes.string,
  /** The highlighted image.. */
  highlight: PropTypes.bool,
  post: PropTypes.
}
