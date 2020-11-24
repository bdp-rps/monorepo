import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Box } from '@bdp-rps/ui';


const placeMarker = ({ location,type}) => {
    const position = [location[0].lat, location[0].long];
    console.log(type);
    const icon = L.icon({
        iconUrl: type.iconPath,
        iconSize:     [63, 46], 
        popupAnchor:  [-3, -76]
    })
    return (
        <Box>
            <Marker
                position={position}
                icon={icon}
            >
            </Marker>
         </Box>
    )
}

export default placeMarker;
 