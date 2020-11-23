import { Box, Text, Collumn, useTheme } from '@bdp-rps/ui';
import Header from '../../components/Header'
import dynamic from 'next/dynamic';
import SideBar from '../../components/Map/Sidebar';
 import React, { useState } from 'react';


const Map = dynamic(() => import('../../components/Map/DynamicMap'), { ssr: false })

  function Placefinder ({ children, placetypes, places}) {
   const [addingLocation, setAddingLocation] = useState(false)
   const [locationToAdd, setLocationToAdd] = useState('')
  return (
    <Box  >
      <Header />
      <Box
        direction="row">
        <Box grow={1}>
          <SideBar placetypes={placetypes} setAddingLocation={setAddingLocation} locationToAdd={locationToAdd} />
        </Box>
        <Box grow={10}>
          <Map  places={places} addingLocation={addingLocation}locationToAdd={locationToAdd} setLocationToAdd={setLocationToAdd}/>
        </Box>
        <Box>
      </Box>
    </Box>
    </Box>
  )
}
Placefinder.getInitialProps = async ({ req }) => {
  // const resPlaceTypes = await fetch('http://localhost:5000/placetypes');
  // const resPlaces =  await fetch('http://localhost:5000/places');
  // const placetypes = await resPlaceTypes.json();
  // const places = await resPlaces.json();
  // return { placetypes,places};
};

export default Placefinder;
