import React from 'react'
import NextLink from 'next/link'
import Add from './Add';
import { Box, useTheme, TabNav, TabNavItem } from '@bdp-rps/ui'

import Layout from '../Layout'

export default ({placetypes, setAddingLocation,locationToAdd}) =>{
    const theme = useTheme();
    const [activeTab, setActiveTab] = React.useState('add');
    return (
        <Box>
            <TabNav onChange={setActiveTab}>
                <TabNavItem id="add" active={activeTab === 'add'}>Hinzufügen</TabNavItem>
                <TabNavItem id="filter" active={activeTab === 'filter'} disabled>Filtern</TabNavItem>
                <TabNavItem id="favorites" active={activeTab === 'favorites'} disabled>Favoriten</TabNavItem>
            </TabNav>
            <Box>
                {activeTab === 'favorites' ? 'Favoriten' : null}
                {activeTab === 'filter' ? 'Filter' : null}
            </Box>
            <Box
            grow={1}
            space={5}
            padding={5}
            display={activeTab === 'add' ? 'flex' : 'none'}>
            <Add placetypes={placetypes} setAddingLocation={setAddingLocation} locationToAdd={locationToAdd}/>
          </Box>
        
        </Box>
    )

}