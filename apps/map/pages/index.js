import React, { useState, useMemo, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { Text, Box } from '@bdp-rps/ui'
import getPlaces from '../api/getPlaces'
import Menu from '../components/menu/menu'

export default function page() {
  const [position, setPosition] = useState(null)
  const [zoom, setZoom] = useState(13)
  const [filters, setFilters] = useState([])
  const [placeMarkerVisible, setPlaceMarkerVisible] = useState(false)
  const [places, setPlaces] = useState([])
  const Map = useMemo(
    () => dynamic(() => import('../components/map/map'), { ssr: false }),
    []
  )
  useEffect(async () => {
    const data = await getPlaces()
    setPlaces(data.data)
  }, [])

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
        places={places}
        setPlaces={setPlaces}
        placeMarkerVisible={placeMarkerVisible}
        filters={filters}
      />
      <Menu
        places={places}
        position={position}
        setPosition={setPosition}
        placeMarkerVisible={placeMarkerVisible}
        setPlaceMarkerVisible={setPlaceMarkerVisible}
        setFilters={setFilters}
      />
    </Box>
  )
}
