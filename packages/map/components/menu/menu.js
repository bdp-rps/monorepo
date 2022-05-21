import React, { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Button,
  TextInput,
  TextArea,
  SelectInput,
  Spacer,
  useField,
  useForm,
} from '@bdp-rps/ui'

import postPlaces from '../../api/postPlaces'
import PlaceForm from './placeForm'
import PlaceFilter from './placeFilter'
import NavBar from './navBar'
import NavBarItem from './navBarItem'

const Menu = ({
  visible = false,
  setPlaceMarkerVisible,
  placeMarkerVisible,
  position,
  setFilters,
}) => {
  const [isVisible, setIsVisible] = useState(visible)
  const [tab, setTab] = useState('form')

  return (
    <>
      {isVisible ? (
        <>
          <Box
            width="40vw"
            maxWidth="500px"
            minWidth="250px"
            height="100%"
            bg="white"
            top={0}
            left={0}
            extend={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10000,
              overflow: 'scroll',
            }}>
            <NavBar>
              {/* <NavBarItem
                active={tab === 'filter'}
                onClick={() => setTab('filter')}>
                Filter
              </NavBarItem> */}
              <NavBarItem
                active={tab === 'form'}
                onClick={() => setTab('form')}>
                Hinzufügen
              </NavBarItem>
              <NavBarItem onClick={() => setIsVisible(false)}>
                Schließen
              </NavBarItem>
            </NavBar>
            <Box padding={5}>
              <Text color="white">Platzfinder</Text>
              <Box display={tab === 'form' ? 'flex' : 'none'}>
                <PlaceForm
                  position={position}
                  setPlaceMarkerVisible={setPlaceMarkerVisible}
                  placeMarkerVisible={placeMarkerVisible}
                />
              </Box>
              <Box display={tab === 'filter' ? 'flex' : 'none'}>
                <PlaceFilter setFilters={setFilters} />
              </Box>
            </Box>
            <Spacer size={5} />
          </Box>
        </>
      ) : (
        <Box
          width="auto"
          extend={{ position: 'absolute', top: 0, left: 0, zIndex: 10000 }}>
          <Button onClick={() => setIsVisible(true)}> Öffnen </Button>
        </Box>
      )}
    </>
  )
}

export default Menu
