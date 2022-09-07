import { Box, Tile, Text } from '@bdp-rps/ui'
import NextLink from 'next/link'

import months from '../data/months.json'

export default function PostTile({
  title,
  image,
  teaser,
  description,
  highlight,
  imageHeight,
}) {
  return (
    <Box grow={highlight ? 1 : 0} extend={{ textDecoration: 'none' }}>
      <Tile
        title={title}
        image={`/images/${image}.jpg`}
        highlight={highlight}
        imageHeight={imageHeight}>
        {description}
        <Box paddingTop={2}>
          <Text variant="note">{teaser}</Text>
        </Box>
      </Tile>
    </Box>
  )
}
