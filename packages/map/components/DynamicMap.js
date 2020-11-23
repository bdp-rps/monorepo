import { TileLayer, MapContainer as Map, Marker, Popup } from 'react-leaflet';
import PlaceMarker from './PlaceMarker';
import AddMarker from './AddMarker';
import React, { useRef, useEffect } from 'react';
import { Box } from '@bdp-rps/ui';
import L from 'leaflet';
import types from '../src/types/placeTypes';
import placeList from '../src/places';



const places = placeList.reduce((places, name) => {
    const place = require('../src/places/' + name + '.json')
    places[name] = {
        ...place,
    }
    return places
}, {})

const DynamicMap = ({ addingLocation, setLocationToAdd, locationToAdd }) => {
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
                {placeList.map((name, key) => {
                    const {
                        title,
                        location,
                        type
                    } = places[name]
                    // console.log("Placename: " + name)
                    // console.log("Placetypes: ")
                    // console.log(types)
                    // console.log("Placelocation: ")
                    // console.log(location[0])
                    return (<PlaceMarker location={location}key={key} type={types[type]}  />)
                })
                }
            </Map>
        </Box>
    )
}
export default DynamicMap;

/* {addingLocation ? <AddMarker center={map.current.leafletElement.getBounds().getCenter()} setLocationToAdd={setLocationToAdd} locationToAdd={locationToAdd} /> : null} */
/*return (<PlaceMarker location={location}key={key} type={type}  />)*/

