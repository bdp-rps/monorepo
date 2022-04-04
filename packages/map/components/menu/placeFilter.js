import React, { useEffect, useState } from 'react'
import { Box, Text, Button, SelectInput, Spacer } from '@bdp-rps/ui'

import postPlaces from '../../api/postPlaces'

const PlaceFilter = ({ setFilters }) => {
  return (
    <Box space={3}>
      <SelectInput
        label="Größe"
        onChange={(e) =>
          setFilters((prev) => {
            if (e.target.value === '') {
              delete prev['size']
              return { ...prev }
            }
            return { ...prev, size: e.target.value }
          })
        }>
        <option value="small">Klein</option>
        <option value="medium">Mittel</option>
        <option value="large">Groß</option>
      </SelectInput>
      <SelectInput
        label="Platztyp"
        onChange={(e) => {
          setFilters((prev) => {
            if (e.target.value === '') {
              delete prev['type']
              return { ...prev }
            }
            return { ...prev, type: e.target.value }
          })
        }}>
        <option value="heim">Heim</option>
        <option value="lager">Lagerplatz</option>
        <option value="stammesheim">Stammesheim</option>
        <option value="stammeslager">Stammeslagerplatz</option>
      </SelectInput>
    </Box>
  )
}
export default PlaceFilter
