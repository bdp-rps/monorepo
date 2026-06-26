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
import Sonderurlaub from '../../templates/Sonderurlaub'

import staemme from '../../../../packages/shared/src/data/staemme.json'

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
  const gender = useField({
    name: 'gender',
    required: true,
  })
  const group = useField({
    name: 'group',
    required: true,
  })
  const event = useField({
    name: 'event',
    required: true,
  })
  const boss = useField({
    name: 'boss',
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
    group,
    gender,
    startDate,
    endDate,
    birthday,
    address,
    boss
  )

  const fileName = 'Sonderurlaub__' + event.value + '_' + name.value

  useEffect(() => {
    const query = {
      name: name.value,
      event: event.value,
      gender: gender.value,
      boss: boss.value,
      group: group.value,
      startDate: startDate.value,
      endDate: endDate.value,
      birthday: birthday.value,
      address: address.value,
    }

    router.replace(
      {
        pathname: '/formulare/sonderurlaub',
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
    group.value,
    gender.value,
    boss.value,
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
      ['Stamm', group.value],
      ['Veranstaltung', event.value],
      ['Start', startDate.value],
      ['End', endDate.value],
    ]

    const body = [
      'Hey Philipp,',
      '',
      'Ich brauche einen Antrag für Sonderurlaub mit folgenden Daten:',
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
      gender: gender.value,
      boss: boss.value,
      group: group.value,
      startDate: startDate.value,
      endDate: endDate.value,
      birthday: birthday.value,
      address: address.value,
    }

    return (
      <Template>
        <Layout paddingTop={10} paddingBottom={20} space={8} grow={1}>
          <Text variant="title">Antrag auf Sonderurlaub</Text>
          <Box space={4} alignItems="flex-start">
            <Box>
              <Button
                href={`mailto:philipp@bdp-rps.de?subject=Sonderurlaub ${
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
                      <Sonderurlaub {...d} />
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
          <Text variant="title">Antrag auf Sonderurlaub</Text>
          <Box
            as="form"
            noValidate
            space={4}
            onReset={(e) => {
              e.preventDefault()

              router.push('/formulare/sonderurlaub')
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
            />{' '}
            <TextInput
              label="Anschrift"
              placeholder="Straße, PLZ und Wohnort"
              {...address.props}
            />
            <TextInput label="Geburtsdatum" type="date" {...birthday.props} />
            <SelectInput label="Geschlecht" {...gender.props}>
              <option value=""></option>
              <option value="female">Weiblich</option>
              <option value="male">Männlich</option>
              <option value="divers">Divers</option>
            </SelectInput>
            <SelectInput label="Stamm" {...group.props}>
              <option value="" />
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
              label="Veranstaltung"
              placeholder="z.B. Fahrtenkurs"
              {...event.props}
              description="Bitte ohne Jahreszahl"
            />
            <TextInput label="Startdatum" type="date" {...startDate.props} />
            <TextInput label="Enddatum" type="date" {...endDate.props} />
            <TextArea
              label="Anschrift des Arbeitgebenden/Universität"
              placeholder={`z. Hd. Max Mustermann
Muster GmbH
Musterstraße 1
12345 Musterstadt`}
              description="Für den Briefkopf – Die Anschrift der Person, die letztendlich diesen Antrag bekommt"
              type="date"
              {...boss.props}
              extend={{
                '> textarea': { resize: 'none', minHeight: '100px !important' },
              }}
            />
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
