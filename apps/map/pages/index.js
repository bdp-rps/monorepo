import React, { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'

import { Text, Box } from '@bdp-rps/ui'

import Menu from '../components/menu/menu'

export default function page() {
  const [position, setPosition] = useState(null)
  const [zoom, setZoom] = useState(13)
  const [filters, setFilters] = useState([])
  const [placeMarkerVisible, setPlaceMarkerVisible] = useState(false)

  const Map = useMemo(
    () => dynamic(() => import('../components/map/map'), { ssr: false }),
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
        setZoom={setZoom}
        zoom={zoom}
        placeMarkerVisible={placeMarkerVisible}
        filters={filters}
      />
      <Menu
        position={position}
        placeMarkerVisible={placeMarkerVisible}
        setPlaceMarkerVisible={setPlaceMarkerVisible}
        setFilters={setFilters}
      />
    </Box>
  )
}
