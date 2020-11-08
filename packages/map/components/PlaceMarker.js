import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Box } from '@bdp-rps/ui';


export default ({ place }) => {
    const position = [place.lat, place.long];

    let url = '../src/Stammesheim.png'
     switch (place.placetype.name) {
        case 'Stammesheim':
            url = '../src/Stammesheim.png'
            break;
        case 'Stammeszeltplatz':
            url = '../src/Stammeszeltplatz.png'
            break;
        case 'Zeltplatz':
            url = '../src/Zeltplatz.png';
            break;
        case 'Heim':
            url = '../src/Heim.png';
            break;
    }

    const icon = L.icon({
        iconUrl: url,
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
 