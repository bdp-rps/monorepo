import { Box, Tile, Text, useTheme } from '@bdp-rps/ui'
import NextLink from 'next/link'

export default function CardTile({
  title,
  image,
  teaser,
  highlight,
  imageHeight,
  children,
}) {
  const theme = useTheme()
  return (
    <Box grow={highlight ? 1 : 0} extend={{ textDecoration: 'none' }}>
      <Tile
        title={title}
        image={`/images/${image}.jpg`}
        highlight={highlight}
        imageHeight={imageHeight}
        extend={{
          border: '2px solid black',
          borderRadius: theme.tokens.borderRadius,
          background: 'background.primary',
          padding: 0,
          overflow: 'hidden',
        }}>
        <Box padding={6}>{children}</Box>
      </Tile>
    </Box>
  )
}
