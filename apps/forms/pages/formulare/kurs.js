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
} from '@bdp-rps/ui'

import Layout from '../../components/Layout'
import Template from '../../components/Template'
import { useRouter } from 'next/router'

import landesverbaende from '../../../../packages/shared/src/data/landesverbaende.json'
import staemme from '../../../../packages/shared/src/data/staemme.json'
import calculateAge from '../../utils/calculateAge.js'
import enrollment from '../../api/enrollment.js'
export default function Page() {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [isAdult, setIsAdult] = useState(false)

  const name = useField({
    name: 'name',
    required: true,
  })
  const lastname = useField({
    name: 'lastname',
    required: true,
  })
  const scoutname = useField({
    name: 'scoutname',
  })
  const nationalAssociation = useField({
    name: 'landesverband',
    required: true,
  })
  const group = useField({
    name: 'group',
  })
  const mail = useField({
    name: 'mail',
    required: true,
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
  const birthday = useField({
    name: 'birthday',
    required: true,
  })
  const ezbName = useField({
    name: 'ezbName',
    required: isAdult ? false : true,
  })
  const ezbLastname = useField({
    name: 'ezbLastname',
    required: isAdult ? false : true,
  })
  const ezbMail = useField({
    name: 'ezbMail',
    required: isAdult ? false : true,
  })
  const ezbPhone = useField({
    name: 'ezbPhone',
    required: isAdult ? false : true,
  })
  const ezbStreet = useField({
    name: 'ezbStreet',
    required: isAdult ? false : true,
  })
  const ezbHousenumber = useField({
    name: 'ezbHousenumber',
    required: isAdult ? false : true,
  })
  const ezbZipcode = useField({
    name: 'ezbZipcode',
    required: isAdult ? false : true,
  })
  const ezbLocation = useField({
    name: 'ezbLocation',
    required: isAdult ? false : true,
  })
  const foodPreferences = useField({
    name: 'foodPreferences',
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
    required: true,
  })
  const healthInsurance = useField({
    name: 'healthInsurance',
    required: true,
  })
  const insurancePolicyNumber = useField({
    name: 'insurancePolicyNumber',
    required: isAdult ? true : false,
  })
  const coInsuredWith = useField({
    name: 'coInsuredWith',
  })

  const isBringingInstrument = useField({
    name: 'isBringingInstrument',
  })
  const grantPermission = useBoolField({
    name: 'grantPermission',
    value: false,
  })

  const correctness = useBoolField({
    name: 'correctness',
    value: false,
  })

  const photoConsent = useBoolField({
    name: 'photoConsent',
    value: false,
  })

  const medicalConsent = useBoolField({
    name: 'medicalConsent',
    value: false,
  })

  const medicalTreatmentConsent = useBoolField({
    name: 'medicalTreatmentConsent',
    value: false,
  })

  const privateCarConsent = useBoolField({
    name: 'privateCarConsent',
    value: false,
  })

  const sendFee = useBoolField({
    name: 'sendFee',
    value: false,
  })

  const refundConsent = useBoolField({
    name: 'refundConsent',
    value: false,
  })

  const place = useField({ name: 'place' })

  const date = useField({ name: 'date', required: true })

  const { submit, reset } = useForm(
    name,
    lastname,
    scoutname,
    nationalAssociation,
    mail,
    phone,
    location,
    birthday,
    date,
    place,
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
    isBringingInstrument,
    grantPermission,
    correctness,
    photoConsent,
    medicalConsent,
    medicalTreatmentConsent,
    privateCarConsent,
    refundConsent,
    sendFee
  )

  useEffect(() => {
    if (birthday.value) {
      const age = calculateAge(birthday.value)
      setIsAdult(age >= 18)
    } else {
      setIsAdult(false)
    }
  }, [birthday.value])
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
            onSubmit={(e) => {
              e.preventDefault()
              submit(async (isValid, data) => {
                if (isValid) {
                  const response = await enrollment({
                    ...data,
                  })
                  if (response?.status === 200) {
                    reset()
                    alert('Anmeldung erfolgreich abgeschlossen!')
                  }
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
              {...scoutname.props}
            />
            <SelectInput label="Landesverband" {...nationalAssociation.props}>
              <option value=""></option>
              {landesverbaende.map((landesverband, index) => (
                <option key={index} value={landesverband.name}>
                  {landesverband.name}
                </option>
              ))}
            </SelectInput>
            {nationalAssociation.value ===
              'Landesverband Rheinland-Pfalz & Saar' && (
              <SelectInput label="Stamm" {...group.props}>
                <option value="Landesverband Rheinland-Pfalz & Saar"></option>
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
                    {...ezbName.props}
                  />
                </Box>
                <Box direction={['column', , , 'row']} space={4}>
                  <TextInput
                    label="Nachname"
                    placeholder="Nachname"
                    {...ezbLastname.props}
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
                {insurancePolicyNumber && (
                  <TextInput
                    label="Mitversichert über"
                    {...coInsuredWith.props}
                  />
                )}
                <TextInput
                  label="Ich bringe ein Instrument mit"
                  {...isBringingInstrument.props}
                />
              </Box>
              <Box space={6} paddingTop={8}>
                <Box direction="row" space={2}>
                  <Checkbox {...grantPermission.props} />
                  <Text>
                    <Text variant="category">Einverständniserklärung:</Text>{' '}
                    Voraussetzung für die Teilnahme ist die Anwesenheit während
                    der gesamten Maßnahme. Die Kursleitung ist weisungsbefugt;
                    sie ist für den Kurszeitraum stellvertretend mit der Aufgabe
                    der Personensorgeberechtigten beauftragt. Zuwiderhandelnde
                    Teilnehmende können auf eigene Kosten von der Maßnahme
                    ausgeschlossen werden. Für selbstverschuldete bzw. durch
                    grob eigenmächtiges Handeln entstandene Schäden sowie in
                    Fällen höherer Gewalt ebenso wie für verlorene Gegenstände
                    haftet die Kursleitung nicht. Bei Abmeldung nach dem
                    Anmeldeschluss kann eine Ausfallentschädigung eingefordert
                    werden. Im Krankheitsfall wird der/die Teilnehmende in
                    ärztliche Behandlung gegeben. Die Teilnehmenden werden
                    üblicherweise in „gemischten“ Zelten bzw. Unterkünften
                    untergebracht. Während der Maßnahme unternehmen die
                    Teilnehmenden in Gruppen Wanderungen und Übernachtung ohne
                    Beaufsichtigung durch die Kursleitung.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...correctness.props} />
                  <Text>
                    Die Angaben von mir/meines Kindes sind korrekt; die
                    Regularien wurden von mir zur Kenntnis genommen und ich
                    stimme ihnen hiermit zu. Ich erteile der o.g. Person die
                    Teilnahmeerlaubnis zu der angegebenen Maßnahme. Die
                    Teilnahmebestätigung erfolgt durch die Kursleitung.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...photoConsent.props} />
                  <Text>
                    <Text variant="category">Fotoerlaubnis:</Text> Während des
                    KfR*R möchten wir gern Foto-/Videoaufnahmen machen und diese
                    auf unserer Website und Social Meida veröffentlichen. Es
                    wäre schön, wenn Sie als Erziehungsberechtigte*r diesen
                    Aufnahmen und der Verbreitung zustimmen würden.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...medicalConsent.props} />
                  <Text>
                    <Text variant="category">Medikamentenvollmacht:</Text> Die
                    Verantwortlichen des KfR*R dürfen bei Notwendigkeit die
                    mitgebrachten Medikamente bzw. die im Notfall von einem Arzt
                    verschriebene Medizin verabreichen.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...medicalTreatmentConsent.props} />
                  <Text>
                    <Text variant="category">Ärztliche Behandlungen:</Text> Mit
                    der Durchführung, ggf. erforderlicher ärztlicher
                    Akutbehandlung des*r Teilnehmers*in während der Tage bin ich
                    einverstanden, auch wenn eine vorherige Information an mich
                    nicht, nur mit unvertretbaren Aufwand oder nur mit
                    eventuellen zusätzlichen Risiken für Teilnehmer*in, z.B.
                    durch Zeitverlust, möglich ist.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...privateCarConsent.props} />
                  <Text>
                    Teilnehmer*in darf in erforderlichen Situationen im Kleinbus
                    bzw. privat im Auto mitfahren.
                  </Text>
                </Box>
                <Box>
                  <Box direction="row" space={2}>
                    <Checkbox {...sendFee.props} />
                    <Text>
                      Den Kursbeitrag von 100€ überweise ich bis zum 31.08.24
                      auf das Konto des Landesverbands Rheinland-Pfalz/Saar.
                      (Verwendungszweck: KfR*R + Name Teilnehmer*in)
                    </Text>
                  </Box>
                  <Box
                    paddingLeft={[2, 0, 0, 0]}
                    alignSelf="center"
                    paddingTop={2}>
                    <Text>
                      <Text variant="category">Konto:</Text> BdP LV RPS <br />
                      <Text variant="category">IBAN:</Text> DE18 5405 0220 0108
                      8104 25
                      <br /> <Text variant="category">BIC:</Text> MALADE51KLK
                    </Text>
                  </Box>
                  <Box direction="row" space={2} paddingTop={4}>
                    <Checkbox {...refundConsent.props} />
                    <Text>
                      Ich nehme zur Kenntnis, dass die Rückerstattung des halben
                      Teilnahmebeitrages nur bei einer Abmeldung bis 24 Stunden
                      vor Beginn des Kurses eingefordert werden. Überweisungen
                      und Zuschussregelungen seitens der Stämme können von den
                      Kursteams aus nicht berücksichtigt werden!
                    </Text>
                  </Box>
                </Box>
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
