import { Box, Tile, Text } from '@bdp-rps/ui'
import NextLink from 'next/link'

import months from '../data/months.json'

export default function PostTile({
  id,
  title,
  teaser,
  author,
  description,
  highlight,
  date,
}) {
  return (
    <NextLink href={'/blog/' + id} passHref>
      <Box as="a" grow={highlight ? 1 : 0} extend={{ textDecoration: 'none' }}>
        <Tile
          title={title}
          image={'/posts/' + id + '/' + teaser + '.jpg'}
          highlight={highlight}
          imageHeight={200}>
          {description}
          <Box paddingTop={2}>
            <Text variant="note">
              {date.day}. {months[date.month - 1]}, {date.year}, von{' '}
              {author.name}
            </Text>
          </Box>
        </Tile>
      </Box>
    </NextLink>
  )
}
