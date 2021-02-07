import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import PlaceMarker from './PlaceMarker';
import AddMarker from './AddMarker';
import React, { useRef, useEffect } from 'react';
import { Box } from '@bdp-rps/ui';
import placeList from '../src/places';




const Map = ({ types, addingLocation, setLocationToAdd, locationToAdd, places }) => {
    useEffect(() => {
        // console.log(places)
    }, [])
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
                    {places.map((place) => {
                        return (<PlaceMarker
                            location={place.location}
                            key={place.title}
                            type={types[place.type]} />)
                    })}
                    {addingLocation ?
                        <AddMarker
                            setLocationToAdd={setLocationToAdd}
                            locationToAdd={locationToAdd} /> : null}

                </MapContainer>
            </div>
        </Box>
    )
}
export default Map;



