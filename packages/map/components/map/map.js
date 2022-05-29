import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-control-geocoder'

import getPlaces from '../../api/getPlaces'

import dynamic from 'next/dynamic'

import { Box } from '@bdp-rps/ui'

import PlaceMarker from './placeMarker'
import LeafletControlGeocoder from './leafletControlGeocoder'

const Map = ({ position, setPosition, placeMarkerVisible, filters = [] }) => {
  const [places, setPlaces] = useState([])

  useEffect(async () => {
    const data = await getPlaces()
    setPlaces(data.data)
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((item) => {
      Object.keys(filters).map(function (key, index) {
        if (
          item.attributes[key] === undefined ||
          item.attributes[key] != filters[key]
        ) {
          return false
        }
        return true
      })
    })
    console.log('filteredPlaces', filteredPlaces)
  }, [filters])

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

      <DraggableMarker
        position={position}
        visible={placeMarkerVisible}
        setPosition={setPosition}
      />

      {places?.map((place) => (
        <PlaceMarker {...place.attributes} />
      ))}
    <LeafletControlGeocoder></LeafletControlGeocoder>
    </MapContainer>
  
    
  )
}

export default Map
