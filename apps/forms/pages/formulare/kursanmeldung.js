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
  SelectInput,
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
  //const [modalVisible, setModalVisible] = useScrollBlockingOverlay(false)
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
  const lastname = useField({
    name: 'lastname',
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
  const ezbName = useField({
    name: 'ezbName',
  })
  const ezbLastname = useField({
    name: 'ezbLastname',
  })
  const ezbMail = useField({
    name: 'ezbMail',
  })
  const ezbPhone = useField({
    name: 'ezbPhone',
  })
  const ezbStreet = useField({
    name: 'ezbStreet',
  })
  const ezbHousenumber = useField({
    name: 'ezbHousenumber',
  })
  const ezbZipcode = useField({
    name: 'ezbZipcode',
  })
  const ezbLocation = useField({
    name: 'ezbLocation',
  })
  const foodPreferences = useField({
    name: 'foodPreferences',
    value: 'vegan' | 'vegetarisch' | 'pesketarisch' | 'fruktarisch',
  })
  const allergies = useField({
    name: 'allergies',
  })
  const drugIncompatibility = useField({
    name: 'drugIncompatibility',
  })
  const neededMedicals = useField({
    name: 'neededMedicals',
  })
  const lastTetanusVaccination = useField({
    name: 'lastTetanusVaccination',
  })
  const healthInsurance = useField({
    name: 'healthInsurance',
    required: true,
  })
  const insurancePolicyNumber = useField({
    name: 'insurancePolicyNumber',
    required: true,
  })
  const coInsuredWith = useField({
    name: 'coInsuredWith',
    required: insurancePolicyNumber ? false : true,
  })

  const isBringingInstrument = useField({
    name: 'isBringingInstrument',
    value: true | false,
  })

  const place = useField({ name: 'place', required: true })
  const date = useField({ name: 'date', required: true })

  const { submit, reset } = useForm(
    name,
    lastname,
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
    place,
    date,
    ezbName,
    ezbLastname,
    ezbMail,
    ezbPhone,
    ezbStreet,
    ezbHousenumber,
    ezbZipcode,
    ezbLocation,
    foodPreferences,
    allergies,
    drugIncompatibility,
    neededMedicals,
    lastTetanusVaccination,
    healthInsurance,
    insurancePolicyNumber,
    coInsuredWith,
    isBringingInstrument
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
      lastname: lastname.value,
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
      place: place.value,
      note: note.value,
      date: date.value,
      routes: routes.value,
      ezbName: ezbName.value,
      ezbLastname: ezbLastname.value,
      ezbMail: ezbMail.value,
      ezbPhone: ezbPhone.value,
      ezbStreet: ezbStreet.value,
      ezbHousenumber: ezbHousenumber.value,
      ezbZipcode: ezbZipcode.value,
      ezbLocation: ezbLocation.value,
      foodPreferences: foodPreferences.value,
      allergies: allergies.value,
      drugIncompatibility: drugIncompatibility.value,
      neededMedicals: neededMedicals.value,
      lastTetanusVaccination: lastTetanusVaccination.value,
      healthInsurance: healthInsurance.value,
      insurancePolicyNumber: insurancePolicyNumber.value,
      coInsuredWith: coInsuredWith.value,
      isBringingInstrument: isBringingInstrument.value,
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
    lastname.value,
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
    place.value,
    date.value,
    routes,
    ezbMail.value,
    ezbPhone.value,
    ezbStreet.value,
    ezbHousenumber.value,
    ezbZipcode.value,
    ezbLocation.value,
    foodPreferences.value,
    allergies.value,
    drugIncompatibility.value,
    neededMedicals.value,
    lastTetanusVaccination.value,
    healthInsurance.value,
    insurancePolicyNumber.value,
    coInsuredWith.value,
    isBringingInstrument.value,
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
      ['EzbName', ezbName.value],
      ['EzbLastname', ezbLastname.value],
      ['EzbMail', ezbMail.value],
      ['EzbPhone', ezbPhone.value],
      ['EzbStraße', ezbStreet.value],
      ['EzbPLZ', ezbZipcode.value],
      ['EzbOrt', ezbLocation.value],
      ['Ernährungsform', foodPreferences.value],
      ['Allergien', allergies.value],
      ['Medikamentenunverträglichkeit', drugIncompatibility],
      ['Benötigte-Medikamenete', neededMedicals],
      ['Letzte-Tetanus-Impfung', lastTetanusVaccination],
      ['Krankenversicherung', healthInsurance],
      ['Krankenversicherungsnummer', insurancePolicyNumber],
      ['Mitversichert-über', coInsuredWith],
      ['Instrumentenmitnahme', isBringingInstrument],
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

  //check age of person
  const age = birthday.value ? calculateAge(birthday.value) : null
  const isAdult = age !== null && age >= 18

  return (
    <>
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

            <TextInput label="Vorname" placeholder="Vorname" {...name.props} />
            <TextInput
              label="Nachname"
              placeholder="Nachname"
              {...lastname.props}
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
            <span />
            {!isAdult && (
              <Box space={4}>
                <Text variant="category">Erziehungsberechtigte*r</Text>
                <Box direction={['column', , , 'row']} space={4}>
                  <TextInput
                    label="Vorname"
                    placeholder="Vorname"
                    {...name.props}
                  />
                </Box>
                <Box direction={['column', , , 'row']} space={4}>
                  <TextInput
                    label="Nachname"
                    placeholder="Nachname"
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
              </Box>
            )}
            <span />
            <Box space={4}>
              <Text variant="category">Weitere Angaben</Text>
              <Box direction={['column', , , 'row']} space={4}>
                <TextInput label="Essgewohnheiten" {...foodPreferences.props} />
                <TextInput label="Allergien" {...allergies.props} />
              </Box>
              <Box direction={['column', , , 'row']} space={4}>
                <TextInput
                  label="Medikamentenunverträglichkeit"
                  {...drugIncompatibility.props}
                />
                <TextInput
                  label="Benötigte Medikamente"
                  {...neededMedicals.props}
                />
              </Box>

              <Box direction={['column', , , 'row']} space={4}>
                <TextInput
                  label="Letzte Tetanusimpfung"
                  {...lastTetanusVaccination.props}
                />
                <TextInput
                  label="Name der Krankenversicherung"
                  {...healthInsurance.props}
                />
              </Box>
              <Box direction={['column', , , 'row']} space={4}>
                <TextInput
                  label="Krankenversicherungsnummer"
                  {...insurancePolicyNumber.props}
                />
                <TextInput
                  label="Mitversichert über"
                  {...coInsuredWith.props}
                />
                <TextInput
                  label="Ich bringe ein Instrument mit"
                  {...isBringingInstrument.props}
                />
              </Box>
            </Box>
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
