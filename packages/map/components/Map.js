import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import PlaceMarker from './PlaceMarker';
import AddMarker from './AddMarker';
import React, { useRef, useEffect } from 'react';
import { Box } from '@bdp-rps/ui';
import placeList from '../src/places';



const places = placeList.reduce((places, name) => {
    const place = require('../src/places/' + name + '.json')
    places[name] = {
        ...place,
    }
    return places
}, {})

const Map = ({ types, addingLocation, setLocationToAdd, locationToAdd }) => {
    return (
        <Box >
            <div id="mapid">
                <MapContainer
                    center={[50, 10]}
                    zoom={6}
                    maxZoom={19}
                    ondragend={(event) => { console.log(event) }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                    </TileLayer>
                    {placeList.map((name, key) => {
                        const {
                            title,
                            location,
                            type
                        } = places[name]
                        return (<PlaceMarker location={location} key={key} type={types[type]} />)
                    })
                    }
                    {addingLocation ? <AddMarker setLocationToAdd={setLocationToAdd} locationToAdd={locationToAdd} /> : null}

                </MapContainer>
            </div>
        </Box>
    )
}
export default Map;



