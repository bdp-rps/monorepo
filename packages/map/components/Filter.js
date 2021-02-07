import React, { useEffect, useState } from 'react';
import { Box, TextInput, SelectInput, TextArea, Text, Button, Modal, Checkbox } from '@bdp-rps/ui';

const Filter = ({ setPlaces, types, places }) => {
    const [typeFilters, setTypeFilters] = useState([])

    useEffect(() => {
        const newTypes = []
        Object.keys(types).map((value) => {
            newTypes.push({
                type: value,
                isSet: false,
                name: types[value].name
            })
        })
        setTypeFilters(
            newTypes
        )
    }, [])


    const handleTypeFilter = () => {
        const filteredPlaces = places.filter((place) => {
            place.type == typeFilters.map((typeFilter) => {
                typeFilter.isSet ? value : null
            })

        })
        setPlaces(filteredPlaces)
    }

    const handleTypeChecked = (value, event) =>{
            event.target
    }

    return (
        <Box>
            <Box space={4} padding={2} minWidth={350}>
                <Text intent="category">Plätze filtern</Text>
                <Box space={4}>

                </Box>
                <Box>
                    {
                    typeFilters.map((filter, key) => {
                        return <Checkbox
                            name={filter.name}
                            space={4} padding={2}
                            onChange={(newValue,event) => handleTypeChecked(newValue,event)}
                            label={filter.name}
                            key={key} 
                            value={filter.isSet}
                        />
                    })}
                </Box>
              
            </Box>
        </Box>
    );
}
export default Filter;
