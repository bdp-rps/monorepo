import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import getPlaces from '../../api/getPlaces'

import dynamic from 'next/dynamic'

import { Box } from '@bdp-rps/ui'

import PlaceMarker from './placeMarker'

const Map = ({ position, setPosition, placeMarkerVisible }) => {
  const [places, setPlaces] = useState([])

  useEffect(async () => {
    const data = await getPlaces()
    setPlaces(data.data)
  }, [])

  const DraggableMarker = useMemo(
    () => dynamic(() => import('./draggableMarker'), { ssr: false }),
    []
  )

  return (
    <MapContainer
      style={{ height: '100vh', width: '100%' }}
      center={position}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {placeMarkerVisible && (
        <DraggableMarker position={position} setPosition={setPosition} />
      )}
      {places.map((place) => (
        <PlaceMarker {...place.attributes} />
      ))}
    </MapContainer>
  )
}

export default Map
