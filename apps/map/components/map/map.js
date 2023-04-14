import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-control-geocoder'

import ChangeView from './changeView'

import dynamic from 'next/dynamic'

import { Box } from '@bdp-rps/ui'

import PlaceMarker from './placeMarker'
import LeafletControlGeocoder from './leafletControlGeocoder'

const Map = ({
  position,
  setPosition,
  zoom,
  setZoom,
  placeMarkerVisible,
  filters = [],
  setPlaces,
  places,
}) => {
  // useEffect(() => {
  //   const filteredPlaces = places.filter((item) => {
  //     Object.keys(filters).map(function (key, index) {
  //       if (
  //         item.attributes[key] === undefined ||
  //         item.attributes[key] != filters[key]
  //       ) {
  //         return false
  //       }
  //       return true
  //     })
  //   })
  //   console.log('filteredPlaces', filteredPlaces)
  // }, [filters])
  console.log('map.js')
  const DraggableMarker = useMemo(
    () => dynamic(() => import('./draggableMarker'), { ssr: false }),
    []
  )
  return (
    <MapContainer
      style={{ height: '100vh', width: '100%' }}
      center={position}
      zoom={zoom}
      zoomControl={false}
      scrollWheelZoom={true}>
      <ChangeView center={position} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <DraggableMarker
        position={position}
        visible={placeMarkerVisible}
        setPosition={setPosition}
      />

      {places?.map((place) => (
        <PlaceMarker {...place.attributes} setPosition={setPosition} />
      ))}
      <LeafletControlGeocoder />
    </MapContainer>
  )
}

export default Map
