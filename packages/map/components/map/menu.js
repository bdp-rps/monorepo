import React, { useState } from 'react'
import {
  Box,
  Text,
  Button,
  TextInput,
  TextArea,
  SelectInput,
  Spacer,
} from '@bdp-rps/ui'

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
          <Box as="form" space={2}>
            <TextInput
              label="Name"
              value={place.name}
              onChange={(e) => setPlace({ ...place, name: e.target.value })}
            />
            <SelectInput
              label="Größe"
              value={place.size}
              onChange={(e) => setPlace({ ...place, size: e.target.value })}>
              <option value="klein">Klein</option>
              <option value="mittel">Mittel</option>
              <option value="groß">Groß</option>
            </SelectInput>
            <SelectInput
              label="Platztyp"
              value={place.type}
              onChange={(e) => setPlace({ ...place, type: e.target.value })}>
              <option value="heim">Heim</option>
              <option value="Lagerplatz">Mittel</option>
              <option value="Stammesheim">Stammesheim</option>
              <option value="Stammeslagerplatz">Stammeslagerplatz</option>
            </SelectInput>
            <TextInput
              label="Ort"
              value={place.place}
              onChange={(e) => setPlace({ ...place, place: e.target.value })}
            />
            <TextInput
              label="Straße"
              value={place.street}
              onChange={(e) => setPlace({ ...place, street: e.target.value })}
            />
            <TextInput
              label="Postleitzahl"
              value={place.postcode}
              onChange={(e) => setPlace({ ...place, postcode: e.target.value })}
            />
            <TextInput
              label="Email"
              value={place.mail}
              onChange={(e) => setPlace({ ...place, mail: e.target.value })}
            />
            <TextInput
              label="Telefonnummer"
              value={place.phone}
              onChange={(e) => setPlace({ ...place, phone: e.target.value })}
            />
            <TextArea
              value={place.description}
              onChange={(e) =>
                setPlace({ ...place, description: e.target.value })
              }
              label="Beschreibung"
            />
            <Text>Latitude: {position.lat}</Text>
            <Text>Longitude: {position.lng}</Text>
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
