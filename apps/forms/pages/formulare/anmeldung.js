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

import Wrapper from '../../templates/Wrapper'
import Anmeldung from '../../templates/Anmeldung'

export default function Page({ defaultData, defaultGenerated }) {
  const router = useRouter()
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
  const role = useField({
    name: 'role',
    required: true,
  })
  const address = useField({
    name: 'address',
    required: true,
  })
  const birthday = useField({
    name: 'birthday',
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

  const { submit, reset } = useForm(
    name,
    event,
    role,
    startDate,
    endDate,
    birthday,
    address
  )

  const fileName = 'Anmeldungbestätigung_' + event.value + '_' + name.value

  useEffect(() => {
    const query = {
      name: name.value,
      event: event.value,
      role: role.value,
      startDate: startDate.value,
      endDate: endDate.value,
      birthday: birthday.value,
      address: address.value,
    }

    router.replace(
      {
        pathname: '/formulare/anmeldung',
        query: {
          ...router.query,
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
    role.value,
    startDate.value,
    endDate.value,
    birthday.value,
    address.value,
  ])

  if (!isMounted) {
    return null
  }

  if (generated) {
    const data = [
      ['Name', name.value],
      ['Veranstaltung', event.value],
      ['Start', startDate.value],
      ['End', endDate.value],
    ]

    const body = [
      'Hey Philipp,',
      '',
      'Ich brauche eine Anmeldungbestätigung mit folgenden Daten:',
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

    const d = {
      name: name.value,
      event: event.value,
      role: role.value,
      startDate: startDate.value,
      endDate: endDate.value,
      birthday: birthday.value,
      address: address.value,
    }

    return (
      <Template>
        <Layout paddingTop={10} paddingBottom={20} space={8} grow={1}>
          <Text variant="title">Antrag auf Anmeldungbestätigung</Text>
          <Box space={4} alignItems="flex-start">
            <Box>
              <Button
                href={`mailto:philipp@bdp-rps.de?subject=Anmeldungbestätigung ${
                  event.value
                } – ${name.value}&body=${body.join('%0D%0A')}`}>
                Beantragen
              </Button>
            </Box>

            {localStorage.getItem('show') && (
              <Box
                as={PDFDownloadLink}
                grow={1}
                extend={{ textDecoration: 'none' }}
                document={
                  <Wrapper>
                    <Document>
                      <Anmeldung {...d} />
                    </Document>
                  </Wrapper>
                }
                fileName={fileName + '.pdf'}>
                {({ blob, url, loading, error }) => (
                  <Button loading={loading}>Als PDF herunterladen</Button>
                )}
              </Box>
            )}
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
      <Template>
        <Layout paddingTop={10} paddingBottom={20} space={8}>
          <Text variant="title">Antrag auf Anmeldungbestätigung</Text>
          <Box
            as="form"
            noValidate
            space={4}
            onReset={(e) => {
              e.preventDefault()

              router.push('/formulare/anmeldung')
            }}
            onSubmit={(e) => {
              e.preventDefault()

              submit((isValid, data) => {
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
              label="Anschrift"
              placeholder="Straße, PLZ und Wohnort"
              {...address.props}
            />
            <TextInput label="Geburtsdatum" type="date" {...birthday.props} />
            <SelectInput label="Rolle" {...role.props}>
              <option value="" />
              <option value="leader">Veranstaltungsleitung</option>
              <option value="guest">Teilnehmer*in</option>
            </SelectInput>
            <TextInput
              label="Veranstaltung"
              placeholder="z.B. Fahrtenkurs"
              {...event.props}
              description="Bitte ohne Jahreszahl"
            />
            <TextInput label="Startdatum" type="date" {...startDate.props} />
            <TextInput label="Enddatum" type="date" {...endDate.props} />
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
