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
  Accordion,
} from '@bdp-rps/ui'

import postPlaces from '../../api/postPlaces'
import getPlacefeatures from '../../api/postPlaces'

const PlaceForm = ({ setPlaceMarkerVisible, placeMarkerVisible, position }) => {
  const [placeFeature, setPlaceFeatures] = useState([])

  useEffect(() => {
    if (position) {
      latField.update({
        value: position.lat,
        isValid: true,
        isTouched: true,
        errorMessage: '',
      })
      lngField.update({
        value: position.lng,
        isTouched: true,
        isValid: true,
        errorMessage: '',
      })
    }
  }, [position])

  useEffect(async () => {
    const features = await getPlacefeatures()
    console.log(features)
    setPlaceFeatures(features)
  }, [])

  const nameField = useField({
    name: 'name',
    required: true,
  })
  const typeField = useField({
    name: 'type',
    required: true,
  })
  const sizeField = useField({
    name: 'size',
    required: true,
  })
  const latField = useField({
    name: 'lat',
    disabled: true,

    validation: {
      'Benutze den Marker um eine Position zu setzen': (val) => val !== '',
    },
  })

  const lngField = useField({
    name: 'lng',
    disabled: true,
    validation: {
      'Benutze den Marker um eine Position zu setzen': (val) => val !== '',
    },
  })
  const placeField = useField({
    name: 'place',
    required: true,
  })
  const streetField = useField({
    name: 'street',
    required: true,
  })
  const postcodeField = useField({
    name: 'postcode',
    required: true,
  })
  const mailField = useField({
    name: 'mail',
    required: true,
  })
  const phoneField = useField({
    name: 'phone',
    required: true,
  })

  const descriptionField = useField({
    name: 'description',
    required: true,
  })

  const { submit, reset } = useForm(
    nameField,
    sizeField,
    latField,
    lngField,
    placeField,
    streetField,
    postcodeField,
    mailField,
    phoneField,
    descriptionField,
    typeField
  )

  return (
    <Box
      as="form"
      space={2}
      onSubmit={(e) => {
        e.preventDefault()
        submit(async (isValid, data) => {
          console.log('isValid', isValid)
          if (isValid) {
            const response = await postPlaces(data)
            if (response?.status === 200) {
              reset()
            }
          }
        })
      }}>
      <TextInput label="Name" {...nameField.props} />
      <SelectInput label="Größe" {...sizeField.props}>
        <option value="" />
        <option value="small">Klein</option>
        <option value="medium">Mittel</option>
        <option value="large">Groß</option>
      </SelectInput>
      <SelectInput label="Platztyp" {...typeField.props}>
        <option value="" />
        <option value="heim">Heim</option>
        <option value="lager">Lagerplatz</option>
        <option value="stammesheim">Stammesheim</option>
        <option value="stammeslager">Stammeslagerplatz</option>
      </SelectInput>
      <TextInput label="Ort" {...placeField.props} />
      <TextInput label="Straße" {...streetField.props} />
      <TextInput label="Postleitzahl" {...postcodeField.props} />
      <TextInput label="Email" {...mailField.props} />
      <TextInput label="Telefonnummer" {...phoneField.props} />
      <TextArea {...descriptionField.props} label="Beschreibung" />
      <Accordion summary="Ausstattung"></Accordion>
      <TextInput
        placeholder="Klicke auf 'Marker setzen'"
        label="Breitengrad"
        {...latField.props}
      />

      <TextInput
        label="Längengrad"
        placeholder="Klicke auf 'Marker setzen'"
        {...lngField.props}
      />
      <Button
        type="button"
        onClick={() => setPlaceMarkerVisible((prev) => !prev)}>
        {!placeMarkerVisible ? 'Marker setzen' : 'Marker entfernen'}
      </Button>
      <Button type="submit">Hinzufügen</Button>
    </Box>
  )
}
export default PlaceForm
