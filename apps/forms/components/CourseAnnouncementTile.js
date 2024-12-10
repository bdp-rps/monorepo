import * as React from 'react'
import { Box, Tile } from '@bdp-rps/ui'
import NextLink from 'next/link'

export default function CourseAnnouncementTile({ ...course }) {
  const { image, courseTitle } = course.attributes
  return (
    <NextLink href={'/formulare/kursanmeldung/' + course.id} passHref>
      <Box as="a" extend={{ textDecoration: 'none' }}>
        <Tile
          title={courseTitle}
          image={
            image ? 'https://docs.bdp-rps.de' + image?.data?.attributes.url : ''
          }
          imageHeight={200}>
          <Box paddingTop={2}></Box>
        </Tile>
      </Box>
    </NextLink>
  )
}
