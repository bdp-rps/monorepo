import React from 'react'
import NextLink from 'next/link'
import Add from './Add';
import Filter from './Filter'
import { Box, useTheme, TabNav, TabNavItem } from '@bdp-rps/ui'
import Layout from '../components/Layout'
import addPlace from '../api/addPlace'

const Sidebar = ({ types, setAddingLocation, locationToAdd, addingLocation,setPlaces, places }) => {
     const [activeTab, setActiveTab] = React.useState('add');
    return (
        <Box>
            <TabNav onChange={setActiveTab}>
                <TabNavItem id="add" active={activeTab === 'add'}>Hinzufügen</TabNavItem>
                <TabNavItem id="filter" active={activeTab === 'filter'} >Filtern</TabNavItem>
                <TabNavItem id="favorites" active={activeTab === 'favorites'} disabled>Favoriten</TabNavItem>
            </TabNav>
            <Box>
                {activeTab === 'favorites' ? 'Favoriten' : null}
            </Box>
            <Box
                grow={1}
                space={5}
                padding={5}
                display={activeTab === 'add' ? 'flex' : 'none'}>
                <Add
                    onSubmit={async (place, meta) => await addPlace(place, { ...meta, change: false })}
                    types={types}
                    setAddingLocation={setAddingLocation}
                    addingLocation={addingLocation}
                    locationToAdd={locationToAdd} />
            </Box>
            <Box
                grow={1}
                space={5}
                padding={5}
                display={activeTab === 'filter' ? 'flex' : 'none'}>
                <Filter
                    types={types}
                    setPlaces={setPlaces}
                    places={places}
                />
            </Box>

        </Box>
    )
}

export default Sidebar