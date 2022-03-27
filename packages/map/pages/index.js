import React, { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'

import { Text, Box } from '@bdp-rps/ui'
import Header from '../components/Header'
import Menu from '../components/map/menu'

export default function page() {
  const [position, setPosition] = useState(null)
  const [placeMarkerVisible, setPlaceMarkerVisible] = useState(false)

  const Map = useMemo(
    () =>
      dynamic(
        () => import('../components/map/map'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
      ),
    []
  )
  return (
    <Box extend={{ position: 'relative', overflow: 'hidden' }} height="100%">
      <Map
        position={
          position !== null
            ? position
            : { lat: 51.42618636026203, lng: 9.478454589843752 }
        }
        setPosition={setPosition}
        placeMarkerVisible={placeMarkerVisible}
      />
      <Menu
        position={position}
        placeMarkerVisible={placeMarkerVisible}
        setPlaceMarkerVisible={setPlaceMarkerVisible}
      />
    </Box>
  )
}
