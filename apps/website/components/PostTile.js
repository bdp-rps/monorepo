import * as React from 'react'
import { Box, Tile, Text } from '@bdp-rps/ui'
import NextLink from 'next/link'

export default function PostTile({ id, highlight, ...post }) {
  const { image, title, text, subtitle, publish, author } = post.attributes
  return (
    <NextLink href={'/blog/' + id} passHref>
      <Box as="a" grow={highlight ? 1 : 0} extend={{ textDecoration: 'none' }}>
        <Tile
          title={title}
          image={'https://docs.bdp-rps.de' + image.data.attributes.url}
          highlight={highlight}
          imageHeight={200}
        >
          {subtitle}
          <Box paddingTop={2}>
            <Text variant="note">{author}</Text>
          </Box>
        </Tile>
      </Box>
    </NextLink>
  )
}
