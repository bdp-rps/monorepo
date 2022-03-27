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

const PlaceForm = () => {
  return (
    <Box>
      <Button type="submit">Filter</Button>
    </Box>
  )
}
export default PlaceForm
