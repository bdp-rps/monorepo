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
          titleBackground="rgba(255, 255, 255, 0.8)"
          extend={{
            border: '2px solid black',
            borderRadius: theme.tokens.borderRadius,
            backgroundColor: 'background.accent',
            padding: 0,
          }}
        >
          <Box padding={2.5}>
            <Text color="white">{description}</Text>
            <Box paddingTop={2}>
              <Text variant="note" color="white">
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
