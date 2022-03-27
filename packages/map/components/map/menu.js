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

const defaultPlace = {
  name: '',
  size: '',
  type: '',
  lat: 0,
  lon: 0,
  place: '',
  street: '',
  postcode: '',
  mail: '',
  phone: '',
  description: '',
}

const Menu = ({
  visible = false,
  initialPlace = defaultPlace,
  setPlaceMarkerVisible,
  placeMarkerVisible,
  position,
}) => {
  const [isVisible, setIsVisible] = useState(visible)
  const [place, setPlace] = useState(initialPlace)

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
    <>
      {isVisible ? (
        <Box
          width="40vw"
          maxWidth="400px"
          minWidth="250px"
          height="100%"
          bg="white"
          padding={5}
          top={0}
          left={0}
          extend={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10000,
            overflow: 'scroll',
          }}>
          <Box>
            <Button onClick={() => setIsVisible(false)}>Close</Button>
          </Box>
          <Text color="white">Platzfinder</Text>
          <Box
            as="form"
            space={2}
            onSubmit={(e) => {
              e.preventDefault()

              console.log('Trying to send place')
              submit(async (isValid, data) => {
                console.log('isValid', isValid)
                if (isValid) {
                  const response = await postPlaces(data)
                  console.log('response', response)
                  if (response?.status === 200) {
                    console.log('geklappt :) ')
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
            {!placeMarkerVisible ? (
              <Button type="button" onClick={() => setPlaceMarkerVisible(true)}>
                Marker setzen
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => setPlaceMarkerVisible(false)}>
                Marker entfernen
              </Button>
            )}
            <Button type="submit">Hinzufügen</Button>
          </Box>
          <Spacer size={5} />
        </Box>
      ) : (
        <Box
          width="auto"
          extend={{ position: 'absolute', top: 0, left: 0, zIndex: 10000 }}>
          <Button onClick={() => setIsVisible(true)}> Open </Button>
        </Box>
      )}
    </>
  )
}

export default Menu
