import React from 'react'
import { Box, Text } from '@bdp-rps/ui'

export default function Page({ challenge }) {
  return (
    <Box>
      <Text>Hallo ich bin eine Challenge</Text>
    </Box>
  )
}

export async function getServerSideProps({ params }) {
  // TODO: whereever we want to get the challenges from we need to fetch them here
}
