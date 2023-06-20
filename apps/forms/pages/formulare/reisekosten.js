import React, { useState } from 'react'
import {
  Box,
  Grid,
  Button,
  TextInput,
  Text,
  useField,
  useForm,
} from '@bdp-rps/ui'
import {
  PDFDownloadLink,
  PDFViewer,
  ThemeProvider,
  ConfigProvider,
  Document,
} from '@lorren-js/core'

import Reisekosten from '../../templates/Reisekosten'

const theme = {
  typography: {
    defaultVariant: 'body',
    body: {
      fontSize: 12,
      lineHeight: 1.2,
      variants: {
        emphasis: {
          fontWeight: 700,
        },
      },
    },
  },
}

const rates = {
  1: 0.15,
  2: 0.15,
  3: 0.17,
  4: 0.17,
  5: 0.19,
  6: 0.19,
  7: 0.19,
  8: 0.19,
  9: 0.19,
}

function CarForm({ routes, onAdd, onDelete }) {
  const kilometer = useField({
    name: 'kilometer',
  })
  const count = useField({
    name: 'mitfahrer',
  })

  const { submit, reset } = useForm(kilometer, count)

  return (
    <Box space={6}>
      <Box
        as="form"
        direction="row"
        space={2}
        onSubmit={(e) => {
          e.preventDefault()

          submit((isValid, data) => {
            if (isValid) {
              console.log(data)

              onAdd(data)
              reset()
            }
          })
        }}>
        <TextInput label="Kilometer" {...kilometer.props} />
        <TextInput label="Mitfahrer" {...count.props} />

        <Button type="submit">Hinzufügen</Button>
      </Box>

      {routes.map((route) => (
        <Box
          direction="row"
          justifyContent="space-between"
          space={4}
          alignItems="center">
          <Box>
            <Text>
              {route.kilometer}km à {route.mitfahrer} Person - {route.kilometer}{' '}
              * {rates[route.mitfahrer]}€ ={' '}
              {route.kilometer * rates[route.mitfahrer]}€
            </Text>
          </Box>
          <Box>
            <Button variant="secondary" onClick={() => onDelete(index)}>
              Löschen
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default function Page({}) {
  const [routes, setRoutes] = useState([])

  const isMounted = process.browser

  const name = useField({
    name: 'name',
  })
  const event = useField({
    name: 'event',
  })
  const location = useField({
    name: 'location',
  })
  const startDate = useField({
    name: 'startDate',
  })
  const endDate = useField({
    name: 'endDate',
  })
  const destination = useField({
    name: 'destination',
  })

  const { submit, reset } = useForm(
    name,
    event,
    location,
    startDate,
    endDate,
    destination
  )

  const year = new Date(startDate.value).getFullYear()

  const totalValue = 10.5

  const fileName =
    year + '__' + name.value + '_' + event.value + '_' + totalValue

  if (!isMounted) {
    return null
  }

  return (
    <Grid columns={['1fr', , , '1fr 1fr']}>
      <Box padding={10} space={4} style={{ overflow: 'auto' }}>
        <TextInput label="Name" {...name.props} />
        <TextInput label="Veranstaltung" {...event.props} />
        <TextInput label="Veranstaltungsort" {...location.props} />
        <TextInput label="Start-Datum" type="date" {...startDate.props} />
        <TextInput label="End-Datum" type="date" {...endDate.props} />
        <TextInput label="Reiseweg" {...destination.props} />
        <Box
          paddingTop={5}
          marginTop={5}
          space={4}
          extend={{
            borderTopStyle: 'solid',
            borderTopColor: 'black',
            borderTopWidth: 1,
          }}>
          <Text variant="category">Auto</Text>
          <CarForm
            routes={routes}
            onAdd={(data) => setRoutes([...routes, data])}
            onDelete={(index) => console.log(index)}
          />
        </Box>
      </Box>
      <PDFViewer
        key={Date.now()}
        fileName="foo.pdf"
        title="Foo.pdf"
        style={{ height: '100vh', width: '50vw' }}>
        <ThemeProvider theme={theme}>
          <Document>
            <Reisekosten
              name={name.value}
              event={event.value}
              location={location.value}
              startDate={startDate.value}
              endDate={endDate.value}
              destination={destination.value}
            />
          </Document>
        </ThemeProvider>
      </PDFViewer>
    </Grid>
  )

  return (
    <Box
      as={PDFDownloadLink}
      grow={1}
      alignSelf="stretch"
      extend={{ textDecoration: 'none' }}
      document={
        <Document>
          <Fahrtkosten />
        </Document>
      }
      fileName={id + '.pdf'}>
      {({ blob, url, loading, error }) => (
        <Button loading={loading}>Als PDF herunterladen</Button>
      )}
    </Box>
  )
}
