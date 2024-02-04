import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Grid,
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
import { PDFDownloadLink, PDFViewer, Document } from '@lorren-js/core'

import Layout from '../../components/Layout'
import Template from '../../components/Template'

import { toEuro } from '../../utils/currency'
import rates from '../../utils/rates'

import Wrapper from '../../templates/Wrapper'
import Reisekosten from '../../templates/Reisekosten'

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
      <TextInput label="Kilometer" {...kilometer.props} />
      <SelectInput label="Personen" {...count.props}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6+">6+</option>
      </SelectInput>
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
  const event = useField({
    name: 'event',
    required: true,
  })
  const location = useField({
    name: 'location',
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

  const { submit, reset } = useForm(
    name,
    event,
    location,
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
      event: event.value,
      location: location.value,
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
        pathname: '/formulare/reisekosten',
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
    event.value,
    location.value,
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
      ['Veranstaltung', event.value],
      ['Ort', location.value],
      ['Reiseweg', destination.value],
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
          <Text variant="title">Reisekostenabrechung - Auto</Text>
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
                    <Reisekosten
                      name={name.value}
                      event={event.value}
                      location={location.value}
                      startDate={startDate.value}
                      endDate={endDate.value}
                      destination={destination.value}
                      iban={iban.value}
                      place={place.value}
                      date={date.value}
                      note={note.value}
                      routes={routes}
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
          <Text variant="title">Fahrtkosten - Auto</Text>
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
            <TextInput
              label="Name"
              placeholder="Vor- und Nachname"
              {...name.props}
            />
            <TextInput
              label="Veranstaltung"
              placeholder="z.B. Herbst-SST 2023"
              {...event.props}
            />
            <TextInput label="Veranstaltungsort" {...location.props} />
            <TextInput label="Start-Datum" type="date" {...startDate.props} />
            <TextInput label="End-Datum" type="date" {...endDate.props} />
            <TextInput label="Reiseweg" {...destination.props} />
            <TextArea
              label="Kommentar"
              placeholder="z.B. inkl. Materialtransport, daher so viel"
              {...note.props}
            />
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

            <TextInput
              label="IBAN"
              description="Falls bereits bekannt, einfach leer lassen!"
              {...iban.props}
            />

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
