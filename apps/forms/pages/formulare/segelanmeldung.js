import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  TextInput,
  Text,
  useField,
  useForm,
  useBoolField,
  SelectInput,
  Checkbox,
  Spacer,
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'
import { useRouter } from 'next/router'

import staemme from '../../../../packages/shared/src/data/staemme.json'
import sailingEnrollment from '../../api/sailingEnrollment.js'
export default function Page() {
  const router = useRouter()
  const [error, setError] = useState(false)

  const name = useField({
    name: 'name',
    required: true,
  })
  const lastname = useField({
    name: 'lastname',
    required: true,
  })
  const group = useField({
    name: 'group',
  })

  const secondGroup = useField({
    name: 'secondGroup',
  })

  const travelPartner = useField({
    name: 'travelPartner',
  })

  const mail = useField({
    name: 'mail',
    required: true,
    validation: {
      'Bitte füge eine valide Email Adresse ein': (val) =>
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
          val
        ),
    },
  })
  const phone = useField({
    name: 'phone',
    required: true,
  })
  const street = useField({
    name: 'street',
    required: true,
  })
  const housenumber = useField({
    name: 'housenumber',
    required: true,
  })
  const zipcode = useField({
    name: 'zipcode',
    required: true,
  })
  const location = useField({
    name: 'location',
    required: true,
  })

  const groupsize = useField({
    name: 'groupsize',
    required: true,
  })
  const sendFee = useBoolField({
    name: 'sendFee',
    value: false,
  })

  const place = useField({ name: 'place' })

  const date = useField({ name: 'date', required: true })

  const { submit, reset } = useForm(
    group,
    name,
    lastname,
    mail,
    phone,
    street,
    housenumber,
    zipcode,
    location,
    groupsize,
    secondGroup,
    travelPartner,
    sendFee,
    date,
    place
  )

  return (
    <>
      <Template>
        <Layout paddingTop={10} paddingBottom={20} space={8}>
          <Text variant="title">Anmeldung Segeln 2025 - IJsselmeer</Text>
          <Text>
            Liebe Stammesführungen, <br />
            endlich ist es soweit und ihr könnt eure Stämme final zum Segeln
            2025 auf dem IJsselmeer anmelden. Da wir schon die erste Rate für
            die Schiffe zahlen mussten und unsere zweite Rate bereits im Januar
            ansteht, haben wir den Anmeldeschluss auf den 31.01.2025 gelegt (und
            würden euch bitten, diesen auch einzuhalten, da der LV sonst ganz
            schön lange vorstrecken muss). Angemeldet seid ihr, wenn sowohl das
            erste Geld (100€ pro Person) auf den LV Konto liegt, als auch euer
            Stamm digital über diesen Anmeldelink angemeldet ist.
          </Text>
          <Box
            as="form"
            noValidate
            space={4}
            onSubmit={(e) => {
              e.preventDefault()
              submit(async (isValid, data) => {
                if (isValid) {
                  const response = await sailingEnrollment({
                    ...data,
                  })
                  if (response?.status === 200) {
                    reset()
                    alert('Anmeldung erfolgreich abgeschlossen!')
                  }
                }
              })
            }}>
            <Text variant="category">Stammesanmeldung</Text>
            <SelectInput label="Stamm" {...group.props}>
              <option value=""></option>
              {staemme
                .sort((a, b) =>
                  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                )
                .map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
            </SelectInput>
            <Box direction={['column', , , 'row']} space={4}>
              <TextInput label="Vorname (Stammesführung)" {...name.props} />
              <TextInput
                label="Nachname (Stammesführung)"
                {...lastname.props}
              />
            </Box>
            <Box direction={['column', , , 'row']} space={4}>
              <TextInput label="Telefon-/Mobilnummer" {...phone.props} />
              <TextInput label="Mailadresse" {...mail.props} />
            </Box>
            <Box direction={['column', , , 'row']} space={4}>
              <TextInput label="Straße" {...street.props} />
              <TextInput label="Hausnummer" {...housenumber.props} />
            </Box>
            <Box direction={['column', , , 'row']} space={4}>
              <TextInput label="PLZ" {...zipcode.props} />
              <TextInput label="Ort" {...location.props} />
            </Box>
            <Text variant="category">Teilnehmende</Text>
            <TextInput label="Anzahl der Personen" {...groupsize.props} />
            <Text variant="category">Sonstige Angaben</Text>
            <SelectInput label="Wunsch-Stamm" {...secondGroup.props}>
              <option value=""></option>
              {staemme
                .sort((a, b) =>
                  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                )
                .map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
            </SelectInput>
            <TextInput
              label="Anreise geplant mit (falls bereits bekannt)"
              placeholder="Name des Stammes/der Stämme"
              {...travelPartner.props}
            />
            <Spacer />
            <Text variant="category">
              Bestätigung zur Überweisung der 1. Rate
            </Text>
            <Box>
              <Box direction="row" space={2}>
                <Checkbox {...sendFee.props} />
                <Text>
                  Überweisung der ersten Rate bis zum 31.01.2025 (100€ p.P.)
                  (Verwendungszweck: Segeln 2025, Stamm, Personenanzahl)
                </Text>
              </Box>
              <Box paddingLeft={[2, 0, 0, 0]} alignSelf="center" paddingTop={2}>
                <Text>
                  <Text variant="category">Konto:</Text> BdP LV RPS <br />
                  <Text variant="category">IBAN:</Text> DE18 5405 0220 0108 8104
                  25
                  <br /> <Text variant="category">BIC:</Text> MALADE51KLK
                </Text>
              </Box>
            </Box>

            <Box direction={['column', , 'row']} space={4} alignItems="stretch">
              <TextInput placeholder="PLZ, Ort" label="Ort" {...place.props} />
              <TextInput label="Datum" type="date" {...date.props} />
            </Box>
            <span />
            <Box
              direction={['column', , 'row']}
              space={4}
              alignSelf={['stretch', , 'flex-start']}>
              <Button type="submit">Absenden</Button>
            </Box>
          </Box>
        </Layout>
      </Template>
    </>
  )
}
