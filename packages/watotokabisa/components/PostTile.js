import { Box, Tile, Text, useTheme } from '@bdp-rps/ui'
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
  const theme = useTheme()
  return (
    <NextLink href={'/blog/' + id} passHref>
      <Box as="a" grow={highlight ? 1 : 0} extend={{ textDecoration: 'none' }}>
        <Tile
          title={title}
          image={'/posts/' + id + '/' + teaser + '.jpg'}
          highlight={highlight}
          titleBackground="white"
          extend={{
            border: '2px solid #333333',
            borderRadius: ' 2% 6% 5% 4% / 1% 1% 2% 4%',
            background: theme.tokens.primary,
            padding: 0,
            overflow: 'clip',
          }}>
          <Box padding={2.5}>
            <Text color="white">{description}</Text>
            <Box paddingTop={2}>
              <Text intent="note" color="white">
                {date.day}. {months[date.month - 1]}, {date.year}, von{' '}
                {author.name}
              </Text>
            </Box>
          </Box>
        </Tile>
      </Box>
    </NextLink>
  )
}
