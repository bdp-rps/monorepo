import React, { useState } from 'react';
import { Box, TextInput, SelectInput, TextArea, Text, Button, Modal } from '@bdp-rps/ui';


const defaultPlace = {
    lat: '',
    long: '',
    name: '',
    price: '',
    size: '',
    email: '',
    telephone: '',
    description: '',
    type: '',
    street: '',
    number: '',
    postalcode: '',
    city: '',
}


const defaultSubmitter = {
    name: '',
    mail: '',
    content: '',
}

const Add = ({ onSubmit, addingLocation, initialPlace = defaultPlace, types, setAddingLocation, locationToAdd }) => {
    const [place, setPlace] = useState(initialPlace)
    const [isLoading, setLoading] = useState(false)
    const [submitterVisible, setAuthorVisible] = useState(false)
    const [submitter, setSubmitter] = useState(defaultSubmitter)
    return (
        <Box>

            <Box space={4} padding={2} minWidth={350}>
                <Text intent="category">Platz hinzufügen</Text>
                <Text intent="note" >location to add:{locationToAdd.lat} {locationToAdd.lat}</Text>
                <Button onClick={() => { setAddingLocation(!addingLocation) }}>Standort hinzufügen</Button>
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
                    label={"Titel"}
                    name="title"
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
                    required
                    value={place.type}
                    onChange={type => setPlace({ ...place, type })}
                >
                    {Object.keys(types).map((type, key) => {
                        return <option value={type} key={key}>{types[type].name}</option>
                    })}
                </SelectInput>
            </Box>
            <Box space={4} padding={2} minWidth={350}>
                <Text intent="category">Adresse hinzufügen</Text>
                <TextInput
                    label="Straße"
                    name="street"
                    value={place.street}
                    onChange={street => setPlace({ ...place, street })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    label="Hausnummer"
                    name="number"
                    value={place.number}
                    onChange={number => setPlace({ ...place, number })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
                <TextInput
                    label="Stadt"
                    name="city"
                    value={place.city}
                    onChange={city => setPlace({ ...place, city })}
                    onBlur={() => { }}
                    onFocus={() => { }}
                />
            </Box>
            <Modal
                visible={submitterVisible}
                onClose={() => {
                    setAuthorVisible(false)
                }}
            >
                <Box space={4} padding={2} minWidth={350}>
                    <Text intent="category">Deine Daten</Text>
                    <TextInput
                        value={submitter.name}
                        onChange={name => setSubmitter({ ...submitter, name })}
                        label="Dein Name"
                        name="name"
                        onBlur={()=>{}}
                        onFocus={()=>{}}
                    />
                    <TextInput
                        value={submitter.mail}
                        onChange={mail => setSubmitter({ ...submitter, mail })}
                        label="Deine E-Mail"
                        name="mail"
                        onBlur={()=>{}}
                        onFocus={()=>{}}
                    />
                    <TextArea
                        onFocus={() => { }}
                        onBlur={()=>{}}
                        name="content"
                        value={submitter.content}
                        onChange={content => setSubmitter({ ...submitter, content })}
                        label="Beschreibung (bei Änderung)"
                    />
                    <Box />
                    <Box paddingTop={2} space={2}>

                        <Button
                            disabled={isLoading}
                            onClick={async () => {
                                setLoading(true)
                                const res = await onSubmit(place, {
                                    submitter: submitter.name,
                                    submitterMail: submitter.mail,
                                    submitterContent: submitter.content
                                })
                                if (res.sucess) {
                                    setAuthorVisible(false)
                                    alert('Erfolgreich! Vielen Dank für deine Einsendung!')
                                } else {
                                    alert(res.error)
                                }
                                setLoading(false)
                            }}>{isLoading ? 'Daten werden eingereicht' : 'Einreichen'}</Button>
                        <Button
                            variant="secondary"

                            onClick={() => {
                                setAuthorVisible(false)
                            }}>
                            Abbrechen
            </Button>
                    </Box>
                </Box>
            </Modal>
            <Box space={4} padding={2} minWidth={350}>
                <Button onClick={() => setAuthorVisible(true)}>Platz hinzufügen</Button>
            </Box>

        </Box>
    )
}
export default Add;

