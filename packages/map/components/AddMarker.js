import { Marker, Popup, useMap } from 'react-leaflet';
import React, { useRef, useState, useMemo, useCallback } from 'react';
import { Box } from '@bdp-rps/ui';
import L from 'leaflet';


const addMarker = ({ setLocationToAdd}) => {
    const map = useMap()
    const center = map.getCenter();
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                    setLocationToAdd(marker.getLatLng())
                }
            },
        }),
        [],
    )




    const url = 'AddPlaceIcon.png'
    const icon = L.icon({
        iconUrl: url,
        iconSize: [40, 40],
        popupAnchor: [-3, -76]
    })

    return (
        <Box >
            <Marker
                position={position}
                icon={icon}
                draggable={true}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
            </Marker>
        </Box>
    )
}

export default addMarker;