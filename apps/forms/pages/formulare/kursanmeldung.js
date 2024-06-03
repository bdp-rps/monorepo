import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  TextInput,
  Modal,
  Text,
  useField as useBaseField,
  useForm,
  TextArea,
  SelectInput,
  useScrollBlockingOverlay,
} from '@bdp-rps/ui'
import { PDFDownloadLink, Document } from '@lorren-js/core'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import { toEuro } from '../../utils/currency'
import rates from '../../utils/rates'

import Wrapper from '../../templates/Wrapper'
import Kursanmeldung from '../../templates/Kursanmeldung.js'
import landesverbaende from '../../../../packages/shared/src/data/landesverbaende.json'
import staemme from '../../../../packages/shared/src/data/staemme.json'
import calculateAge from '../../utils/calculateAge.js'

function CarForm({ onSubmit }) {
  const kilometer = useBaseField({
    name: 'kilometer',
    required: true,
    validation: {
      'Bitte nur Zahlen eingeben': (value) => value.match(/^\d+$/) !== null,
    },
  })
  const count = useBaseField({
    name: 'personen',
    required: true,
    value: '1',
  })

  const { submit, reset } = useForm(kilometer, count)

  return (
    <Box space={3}>
      <Box>
        <Button
          onClick={(e) => {
            e.preventDefault()

            submit((isValid, data) => {
              if (isValid) {
                onSubmit({
                  ...data,
                  rate: rates[data.personen],
                })
                reset()
              }
            })
          }}>
          Hinzufügen
        </Button>
      </Box>
    </Box>
  )
}

export default function Page({ defaultData, defaultGenerated }) {
  const router = useRouter()
  const [routes, setRoutes] = useState(defaultData.routes || [])
  const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)
  const [error, setError] = useState(false)
  const [generated, setGenerated] = useState(defaultGenerated)

  const isMounted = process.browser

  function useField({ name, ...props }) {
    return useBaseField({ ...props, value: defaultData[name] })
  }

  const name = useField({
    name: 'name',
    required: true,
  })
  const pfadiname = useField({
    name: 'pfadiname',
  })
  const landesverband = useField({
    name: 'landesverband',
    required: true,
  })
  const stamm = useField({
    name: 'stamm',
  })
  const mail = useField({
    name: 'mail',
  })
  const phone = useField({
    name: 'phone',
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
  const birthday = useField({
    name: 'birthday',
    required: true,
  })
  const event = useField({
    name: 'event',
    required: true,
  })

  const startDate = useField({
    name: 'startDate',
    required: true,
  })
  const endDate = useField({
    name: 'endDate',
    required: true,
  })
  const destination = useField({
    name: 'destination',
    required: true,
  })
  const note = useField({
    name: 'note',
  })
  const iban = useField({
    name: 'iban',
  })
  const place = useField({ name: 'place', required: true })
  const date = useField({ name: 'date', required: true })

  console.log(birthday?.value, 'BD')
  const lowerEighteen = calculateAge(new Date(1995, 5, 23))

  const { submit, reset } = useForm(
    name,
    pfadiname,
    landesverband,
    mail,
    phone,
    event,
    location,
    birthday,
    startDate,
    endDate,
    destination,
    note,
    iban,
    place,
    date
  )

  const year = new Date(startDate.value).getFullYear()

  const totalPrice = routes.reduce(
    (total, { kilometer, personen }) => total + kilometer * rates[personen],
    0
  )

  const totalValue = Math.floor(totalPrice * 100) / 100

  const fileName =
    year + '__' + name.value + '_' + event.value + '_' + totalValue

  useEffect(() => {
    const query = {
      name: name.value,
      pfadiname: pfadiname.value,
      landesverband: landesverband.value,
      mail: mail.value,
      phone: phone.value,
      street: street.value,
      housenumber: housenumber.value,
      zipcode: zipcode.value,
      location: location.value,
      birthday: birthday.value,
      event: event.value,
      startDate: startDate.value,
      endDate: endDate.value,
      destination: destination.value,
      iban: iban.value,
      place: place.value,
      note: note.value,
      date: date.value,
      routes,
    }

    router.replace(
      {
        pathname: '/formulare/kursanmeldung',
        query: {
          data: btoa(JSON.stringify(query)),
        },
      },
      undefined,
      {
        shallow: true,
      }
    )
  }, [
    name.value,
    pfadiname.value,
    landesverband.value,
    mail.value,
    phone.value,
    street.value,
    housenumber.value,
    zipcode.value,
    location.value,
    birthday.value,
    event.value,
    startDate.value,
    endDate.value,
    destination.value,
    note.value,
    iban.value,
    place.value,
    date.value,
    routes,
  ])

  if (!isMounted) {
    return null
  }

  if (generated) {
    const data = [
      ['Name', name.value],
      ['Pfadiname', pfadiname.value],
      ['Landesverband', landesverband.value],
      ['Email', mail.value],
      ['Telefon-/Mobilnummer', phone.value],
      ['Straße', street.value],
      ['Haus Nr.', housenumber.value],
      ['PLZ', zipcode.value],
      ['Ort', location.value],
      ['Geburtsdatum', birthday.value],
    ]

    const body = [
      'Hey Cätch,',
      '',
      'Anbei meine Reisekostenabrechnung mit folgenden Daten:',
      '',
      ...data.map((pair) => pair.join(': ')),
      '',
      encodeURIComponent(
        'https://forms.bdp-rps.app' + router.asPath + '&download=true'
      ),
      '',
      'Gut Pfad,',
      name.value,
    ]

    return (
      <Template>
        <Layout paddingTop={10} paddingBottom={20} space={8} grow={1}>
          <Text variant="title">Kursanmeldung</Text>
          <Box space={4} alignItems="flex-start">
            <Box>
              <Button
                href={`mailto:kasse@bdp-rps.de?subject=Fahrtkosten ${
                  event.value
                } ${year} - ${name.value}&body=${body.join('%0D%0A')}`}>
                E-Mail erstellen
              </Button>
            </Box>
            <Box
              as={PDFDownloadLink}
              grow={1}
              extend={{ textDecoration: 'none' }}
              document={
                <Wrapper>
                  <Document>
                    <Kursanmeldung
                      name={name.value}
                      pfadiname={pfadiname.value}
                      //event={event.value}
                      date={date.value}
                      note={note.value}
                    />
                  </Document>
                </Wrapper>
              }
              fileName={fileName + '.pdf'}>
              {({ blob, url, loading, error }) => (
                <Button loading={loading}>Als PDF herunterladen</Button>
              )}
            </Box>
            <Box>
              <Button onClick={() => setGenerated(false)}>Bearbeiten</Button>
            </Box>
          </Box>
        </Layout>
      </Template>
    )
  }

  return (
    <>
      <Modal
        title="Strecke hinzufügen"
        visible={modalVisible}
        zIndex={10}
        onClose={() => setModalVisible(false)}>
        <CarForm
          onSubmit={(data) => {
            setError(false)
            setRoutes([...routes, data])
            setModalVisible(false)
          }}
        />
      </Modal>
      <Template>
        <Layout paddingTop={10} paddingBottom={20} space={8}>
          <Text variant="title">
            Anmeldung für den Kurs für Ranger*Rover (KfR*R) 2024
          </Text>
          <Box
            as="form"
            noValidate
            space={4}
            onReset={(e) => {
              e.preventDefault()

              router.push('/formulare/reisekosten')
            }}
            onSubmit={(e) => {
              e.preventDefault()

              submit((isValid, data) => {
                if (routes.length === 0) {
                  setError(true)
                  return
                }

                if (isValid) {
                  setGenerated(true)
                }
              })
            }}>
            <Text variant="category">Teilnehmer*in</Text>
            <TextInput
              label="Name"
              placeholder="Vor- und Nachname"
              {...name.props}
            />
            <TextInput
              label="Pfadiname"
              placeholder="Pfadiname"
              {...pfadiname.props}
            />
            <SelectInput label="Landesverband" {...landesverband.props}>
              <option value=""></option>
              {landesverbaende.map((landesverband, index) => (
                <option key={index} value={landesverband.name}>
                  {landesverband.name}
                </option>
              ))}
            </SelectInput>
            {landesverband.value === 'Landesverband Rheinland-Pfalz & Saar' && (
              <SelectInput label="Stamm" {...stamm.props}>
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
            )}
            <Box direction={['column', , , 'row']} space={4}>
              <TextInput
                label="Name"
                placeholder="Vor- und Nachname"
                {...name.props}
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
            <TextInput label="Geburtsdatum" type="date" {...birthday.props} />

            {lowerEighteen <= 18 && (
              <Box space={4}>
                <Text variant="category">Erziehungsberechtigte*r</Text>
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
              </Box>
            )}

            <span />
            <Box space={1}>
              <Box space={6}>
                <Box alignSelf={['stretch', , 'flex-start']}>
                  <Button onClick={() => setModalVisible(true)}>
                    Strecke hinzufügen
                  </Button>
                </Box>
                {routes.length > 0 && (
                  <Box space={2}>
                    {routes.map((route, index) => (
                      <Box
                        direction="row"
                        justifyContent="space-between"
                        space={4}
                        alignItems="center">
                        <Box>
                          <Text>
                            {route.kilometer}km ({route.personen}P) ={' '}
                            {toEuro(route.kilometer * rates[route.personen])}
                          </Text>
                        </Box>
                        <Box>
                          <Button
                            size="small"
                            variant="secondary"
                            intent="negative"
                            onClick={() =>
                              setRoutes(routes.filter((_, i) => i !== index))
                            }>
                            Löschen
                          </Button>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
              {error && (
                <Text variant="note" color="foreground.destructive">
                  Füge mindestens eine Strecke hinzu.
                </Text>
              )}
            </Box>
            <span />

            <Box direction={['column', , 'row']} space={4} alignItems="stretch">
              <TextInput label="Ort" {...place.props} />
              <TextInput label="Datum" type="date" {...date.props} />
            </Box>
            <span />

            <Box
              direction={['column', , 'row']}
              space={4}
              alignSelf={['stretch', , 'flex-start']}>
              <Button type="submit">Generieren</Button>
              <Button type="reset">Zurücksetzen</Button>
            </Box>
          </Box>
        </Layout>
      </Template>
    </>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      defaultData: query.data ? JSON.parse(atob(query.data)) : {},
      defaultGenerated: query.download || false,
    },
  }
}
