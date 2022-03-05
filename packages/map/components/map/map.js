import React, { useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import dynamic from 'next/dynamic'

import { Box } from '@bdp-rps/ui'

import Menu from './menu'

const Map = ({ position, setPosition, placeMarkerVisible }) => {
  const DraggableMarker = useMemo(
    () =>
      dynamic(
        () => import('./draggableMarker'),
        { ssr: false } // This line is important. It's what prevents server-side render
      ),
    []
  )
  return (
    <MapContainer
      style={{ height: '100vh', width: '100%' }}
      center={[51.42618636026203, 9.478454589843752]}
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
    </MapContainer>
  )
}
export default Map
