import React, { useState } from 'react'
import { Box, Link, TextInput, Text, Button, useTheme } from '@bdp-rps/ui'

import Header from '../components/Header'
import SideBar from '../components/Sidebar';
import dynamic from 'next/dynamic';
import fetch from 'node-fetch'


const Map = dynamic(() => import('../components/DynamicMap'), { ssr: false })

function Placefinder({ children, placetypes, places }) {
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
          <Map places={places} addingLocation={addingLocation} locationToAdd={locationToAdd} setLocationToAdd={setLocationToAdd} />
        </Box>
        <Box>
        </Box>
      </Box>
    </Box>
  )
}
Placefinder.getInitialProps = async ({ req }) => {
  // const resPlaceTypes = await fetch('http://localhost:5000/placetypes');
  // const resPlaces = await fetch('http://localhost:5000/places');
  // const placetypes = await resPlaceTypes.json();
  // const places = await resPlaces.json();
  const placetypes = [{
    name: 'Lagerplatz',
    description: 'Ein Lagerplatz',
    icon: ''
  }, {
    name: 'Stammeslagerplatz',
    description: 'Ein Stammeslagerplatz',
    icon: ''
  },
  {
    name: 'Heim',
    description: 'Ein Heim',
    icon: ''
  },
  {
    name: 'Stammesheim',
    description: 'Ein Stammesheim',
    icon: ''
  }]
  // return { placetypes, places };
};

export default Placefinder;
