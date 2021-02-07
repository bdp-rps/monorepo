import React, { useState, useEffect } from 'react'
import { Box, Link, TextInput, Text, Button, useTheme } from '@bdp-rps/ui'

import Header from '../components/Header'
import SideBar from '../components/Sidebar';
import dynamic from 'next/dynamic';
import typeList from '../src/types';
import placeList from '../src/places';

const placeData = placeList.reduce((placeData, name) => {
  const place = require('../src/places/' + name + '.json')
  placeData[name] = {
    ...place,
  }
  return placeData
}, {})



const typeData = typeList.reduce((typeData, name) => {
  const type = require('../src/types/' + name + '.json')
  typeData[name] = {
    ...type,
  }
  return typeData
}, {})


const Map = dynamic(() => import('../components/Map'), { ssr: false })

function Placefinder({ children }) {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState()
  const [types, setType] = useState(typeData)
  const [addingLocation, setAddingLocation] = useState(false)
  const [locationToAdd, setLocationToAdd] = useState('')

  useEffect(() => {
    const places = []
    Object.entries(placeData).map((value) => {
      places.push({
        ...value[1]
      }
      )
    })
    setPlaces(() => places)
    setFilteredPlaces(()=> places)
  }, [])

  return (
    <Box  >
      <Header />
      <Box
        direction="row">
        <Box grow={1}>
          <SideBar
            setPlaces={setFilteredPlaces}
            types={types}
            setAddingLocation={setAddingLocation}
            locationToAdd={locationToAdd}
            addingLocation={addingLocation}
            places={places} />
        </Box>
        <Box grow={10}>
          <Map
            places={filteredPlaces}
            types={types}
            addingLocation={addingLocation}
            locationToAdd={locationToAdd}
            setLocationToAdd={setLocationToAdd} />
        </Box>
        <Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Placefinder;
