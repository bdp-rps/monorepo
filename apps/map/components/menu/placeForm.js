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
  useBoolField,
  Accordion,
  Checkbox,
} from '@bdp-rps/ui'

import { useRouter } from 'next/router'

import postPlaces from '../../api/postPlaces'

const PlaceForm = ({ setPlaceMarkerVisible, placeMarkerVisible, position }) => {
  const router = useRouter()

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
  const urlField = useField({
    name: 'url',
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
    validation: {
      'Bitte füge eine valide Email Adresse ein': (val) =>
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
          val
        ),
    },
  })
  const phoneField = useField({
    name: 'phone',
    required: true,
  })

  const descriptionField = useField({
    name: 'firewood',
  })

  const logsField = useBoolField({
    name: 'logs',
  })
  const showersField = useBoolField({
    name: 'showers',
  })
  const toiletsField = useBoolField({
    name: 'toilets',
  })
  const kitchenField = useBoolField({
    name: 'kitchen',
  })
  const drinkingWaterField = useBoolField({
    name: 'drinkingWater',
  })
  const firewoodField = useBoolField({
    name: 'firewood',
  })
  const meetingRoomField = useBoolField({
    name: 'meetingRoom',
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
    typeField,
    logsField,
    showersField,
    toiletsField,
    kitchenField,
    drinkingWaterField,
    firewoodField,
    meetingRoomField,
    urlField
  )

  return (
    <Box
      as="form"
      space={2}
      onSubmit={(e) => {
        e.preventDefault()
        submit(async (isValid, data) => {
          if (isValid) {
            const {
              logs,
              showers,
              toilets,
              kitchen,
              drinkingWater,
              firewood,
              meetingRoom,
            } = data
            const response = await postPlaces({
              ...data,
              features: [
                {
                  name: logsField.name,
                  val: logsField.value,
                  label: 'Stangenholz',
                },
                {
                  name: showersField.name,
                  val: showersField.value,
                  label: 'Duschen',
                },
                {
                  name: toiletsField.name,
                  val: toiletsField.value,
                  label: 'Toiletten',
                },
                {
                  name: kitchenField.name,
                  val: kitchenField.value,
                  label: 'Küche',
                },
                {
                  name: drinkingWaterField.name,
                  val: drinkingWaterField.value,
                  label: 'Trinkwasser',
                },
                {
                  name: firewoodField.name,
                  val: firewoodField.value,
                  label: 'Feuerholz',
                },
                {
                  name: meetingRoomField.name,
                  val: meetingRoomField.value,
                  label: 'Tagungsraum',
                },
              ],
            })
            if (response?.status === 200) {
              router.reload()
              reset()
            }
          }
        })
      }}>
      <TextInput label="Platzname" {...nameField.props} />
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
      <TextInput label="Webseite" {...urlField.props} />
      <TextArea {...descriptionField.props} label="Beschreibung" />
      <Accordion summary="Ausstattung">
        <Box space={2}>
          <Checkbox label="Stangenholz" {...logsField.props} />
          <Checkbox label="Feuerholz" {...firewoodField.props} />
          <Checkbox label="Duschen" {...showersField.props} />
          <Checkbox label="Toiletten" {...toiletsField.props} />
          <Checkbox label="Küche" {...kitchenField.props} />
          <Checkbox label="Trinkwasser" {...drinkingWaterField.props} />
          <Checkbox label="Tagungsraum" {...meetingRoomField.props} />
        </Box>
      </Accordion>
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
