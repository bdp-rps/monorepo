import React, { useState, useEffect } from 'react'
import { Box, Link, TextInput, Text, Button, useTheme } from '@bdp-rps/ui'

import Header from '../components/Header'
import SideBar from '../components/Sidebar';
import dynamic from 'next/dynamic';
import typeList from '../src/types';

const types = typeList.reduce((types, name) => {
  const type = require('../src/types/' + name + '.json')
  types[name] = {
    ...type,
  }
  return types
}, {})


const Map = dynamic(() => import('../components/Map'), { ssr: false })

function Placefinder({ children }) {

  const [addingLocation, setAddingLocation] = useState(false)
  const [locationToAdd, setLocationToAdd] = useState('')
  return (
    <Box  >
      <Header />
      <Box
        direction="row">
        <Box grow={1}>
          <SideBar types={types} setAddingLocation={setAddingLocation} locationToAdd={locationToAdd} addingLocation={addingLocation} />
        </Box>
        <Box grow={10}>
          <Map types={types} addingLocation={addingLocation} locationToAdd={locationToAdd} setLocationToAdd={setLocationToAdd} />
        </Box>
        <Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Placefinder;
