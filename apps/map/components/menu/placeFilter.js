import React, { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Button,
  SelectInput,
  Spacer,
  Accordion,
  Checkbox,
} from '@bdp-rps/ui'

import postPlaces from '../../api/postPlaces'

const PlaceFilter = ({ setFilters, filters }) => {
  return (
    <Box space={3}>
      <Accordion summary="Ausstattung">
        <Box space={2}>
          {/* <Checkbox
            label="Stangenholz"
            onChange={(val) =>
              setFilters((prev) =>
                val
                  ? prev.feature.slice(prev.feature['stangenholz'].indexOf)
                  : prev.feature.concat('stangenholz')
              )
            }
            value={filters.features.find((feature) => feature['stangenholz'])}
          />
          <Checkbox
            label="Feuerholz"
            value={filters.features.find((feature) => feature['feuerholz'])}
          />
          <Checkbox
            label="Duschen"
            value={filters.features.find((feature) => feature['duschen'])}
          />
          <Checkbox
            label="Toiletten"
            value={filters.features.find((feature) => feature['toiletten'])}
          />
          <Checkbox
            label="Küche"
            value={filters.features.find((feature) => feature['küche'])}
          />
          <Checkbox
            label="Trinkwasser"
            value={filters.features.find((feature) => feature['trinkwasser'])}
          />
          <Checkbox
            label="Tagungsraum"
            value={filters.features.find((feature) => feature['tagungsraum'])}
          /> */}
        </Box>
      </Accordion>
    </Box>
  )
}
export default PlaceFilter
