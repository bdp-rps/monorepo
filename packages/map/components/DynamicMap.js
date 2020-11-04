 

import { TileLayer, Map, Marker, Popup } from 'react-leaflet';
import PlaceMarker from './PlaceMarker';
import AddMarker from './AddMarker';
import React, { useRef, useEffect } from 'react';
import { Box } from '@bdp-rps/ui';
import L from 'leaflet';
import '../styles.css';

export default ({ places, addingLocation, setLocationToAdd, locationToAdd }) => {
    const map = useRef(null)
    return (
        <Box >
            <Map
                ref={map}
                center={[50, 10]}
                zoom={6}
                maxZoom={19}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                </TileLayer>
                {
                    places.map((place, key) => {
                    return <PlaceMarker key={key} place={place} />
                })}
                {addingLocation ? <AddMarker center={map.current.leafletElement.getBounds().getCenter()} setLocationToAdd={setLocationToAdd} locationToAdd={locationToAdd} /> : null}
            </Map>
        </Box>
    )
}



