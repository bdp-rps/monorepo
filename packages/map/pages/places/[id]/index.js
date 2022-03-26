import React, { useState, useEffect } from 'react'

import { Box, Text } from '@bdp-rps/ui'
import Layout from '../../../components/Layout'
import getPlaces from '../../../api/getPlaces'

import Place from '../../../components/place'

import getPlace from '../../../api/getPlace'

export default function Page({ place }) {
  console.log(place)
  return (
    <Box grow={1}>
      <Layout>
        <Box minHeight="95vh" space={2} paddingTop={6} paddingBottom={25}>
          <Place {...place.data.attributes} />
        </Box>
      </Layout>
    </Box>
  )
}

export async function getStaticPaths() {
  const places = await getPlaces()

  return {
    fallback: true,
    paths: places?.data?.map((place) => ({
      params: {
        id: `${place.id}`,
      },
    })),
  }
}

export async function getStaticProps({ params }) {
  const place = await getPlace(params.id)
  console.log('place', params.id)
  return {
    props: {
      place,
      id: params.id,
    },
    revalidate: 30,
  }
}
