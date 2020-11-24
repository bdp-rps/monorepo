import React, { useState } from 'react';
import { Box, TextInput, SelectInput, TextArea, Text, Button } from '@bdp-rps/ui';
 

const defaultPlace = {
    lat: '',
    long: '',
    name: '',
    price: '',
    size: '',
    email: '',
    telephone: '',
    description: '',
    type: null,
    address: ''
}

const defaultAddress = {
    street: '',
    number: '',
    postalcode: '',
    city: '',
}

const Add =({ onSubmit, initialAddress = defaultAddress, initialPlace = defaultPlace, types, setAddingLocation, locationToAdd }) => {
    const [place, setPlace] = useState(initialPlace)
    const [address, setAddress] = useState(initialAddress)
    let addLocation = true
    return (
        <Box>

            <Box space={4} padding={2} minWidth={350}>
                <Text intent="category">Platz hinzufügen</Text>
                <Text>location to add:{locationToAdd.lat}</Text>
                <Button onClick={() => { setAddingLocation(addLocation); addLocation = !addLocation }}>Standort hinzufügen</Button>
                <TextInput
                    label=""
                    name="lat"
                    value={place.lat}
                    onChange={lat => setPlace({ ...place, lat })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                    hidden
                />
                <Text intent="note" variant="info">
                </Text>
                <Box >
                </Box>
                <TextInput
                    label={"Name"}
                    name="name"
                    value={place.name}
                    onChange={name => setPlace({ ...place, name })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    type="number"
                    label="Preis"
                    name="price"
                    value={place.price}
                    onChange={price => setPlace({ ...place, price })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    type="number"
                    label="Größe"
                    name="size"
                    value={place.size}
                    onChange={size => setPlace({ ...place, size })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    label="E-Mail"
                    name="email"
                    value={place.email}
                    onChange={email => setPlace({ ...place, email })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    label="Telefon"
                    name="telephone"
                    value={place.telephone}
                    onChange={telephone => setPlace({ ...place, telephone })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextArea
                    label="Beschreibung"
                    name="description"
                    value={place.description}
                    onChange={description => setPlace({ ...place, description })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <SelectInput
                    label="Platzart"
                    value={place.type}
                    onChange={type => setPlace({ ...place, type })}>
                    {}
                </SelectInput>
            </Box>
            <Box space={4} padding={2} minWidth={350}>
                <Text intent="category">Adresse hinzufügen</Text>
                <TextInput
                    label="Straße"
                    name="street"
                    value={address.street}
                    onChange={street => setAddress({ ...place, street })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    label="Hausnummer"
                    name="number"
                    value={address.number}
                    onChange={number => setAddress({ ...place, number })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    label="Stadt"
                    name="city"
                    value={address.city}
                    onChange={city => setAddress({ ...place, city })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
            </Box>
            <Box space={4} padding={2} minWidth={350}>
                <Button onClick={() => { }}>Platz hinzufügen</Button>
            </Box>
        </Box>
    )
}
export default  Add;

//Object.keys(type).map((type,key )=> { return <option value={type} key={key}>{placetype.name}</option>})