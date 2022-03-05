import React, { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'

import { Text, Box } from '@bdp-rps/ui'
import Header from '../components/Header'
import Menu from '../components/map/menu'

export default function page() {
  const [position, setPosition] = useState([
    51.42618636026203, 9.478454589843752,
  ])
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
    <Box extend={{ position: 'relative' }} width="100vw" height="100%">
      <Map
        position={position}
        setPosition={setPosition}
        placeMarkerVisible={placeMarkerVisible}
      />
      <Menu position={position} setPlaceMarkerVisible={setPlaceMarkerVisible} />
    </Box>
  )
}
