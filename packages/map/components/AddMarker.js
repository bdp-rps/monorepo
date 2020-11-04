import { Marker, Popup } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import { Box } from '@bdp-rps/ui';
import L from 'leaflet';
 
let position = { lat: 49.66263157989627, lng: 10.008544921875002 }

const addMarker = ({ center, setLocationToAdd, locationToAdd }) => {

    const [isDone, setDone] = useState(false)

    useEffect(() => {
        if (center) {
            position = center;
            setDone(true);
        }
    }, [center])

    if (!isDone) {
        return null
    }

    // const onDragEnd = (position) => {
    //      setLocationToAdd(position);
    // }

    const url = '/images/AddPlaceIcon.png'
    const icon = L.icon({
        iconUrl: url,
        iconSize: [40, 40], // size of the icon
        popupAnchor: [-3, -76]
    })

    return (
        <Box >
            <Marker
                position={position}
                icon={icon}
                draggable={true}
                onDragend={(event) => {()=>setLocationToAdd(position) }}
            >
            </Marker>
        </Box>
    )
}

export default addMarker;