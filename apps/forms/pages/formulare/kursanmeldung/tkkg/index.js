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
  Link,
} from '@bdp-rps/ui'

import Layout from '../../../../components/Layout'
import Template from '../../../../components/Template'

import landesverbaende from '../../../../../../packages/shared/src/data/landesverbaende.json'
import staemme from '../../../../../../packages/shared/src/data/staemme.json'
import calculateAge from '../../../../utils/calculateAge.js'
import enrollment from '../../../../api/enrollment.js'
import getCourseAnnouncement from '../../../../api/getCourseAnnouncement.js'
import getCourseAnnouncements from '../../../../api/getCourseAnnouncements.js'

const course = {
  data: {
    attributes: {
      courseTitle: 'TKKG 2025',
      descriptionText: `Große Konstruktionen faszinieren dich schon immer? Du wolltest schon immer mehr über Schwarzzelte erfahren? Dann haben wir genau das Richtige für DICH!

Kurz vor dem Pfingstlager zeigen wir euch noch mal, wie man coole Zeltkonstruktionen aufbaut!

Bei uns lernst du das Wichtigste rund um Schwarzzelte und wie du deine neuen Fähigkeiten anwenden kannst. Dabei ist es egal, welche Kenntnisse du mit auf den Kurs bringst. Du solltest nur den Unterschied zwischen Zimmermannsschlag und Mastwurf kennen. Natürlich werden wir dafür sorgen, dass der Spaß für euch nicht unter den ganzen Planen verschwindet!

Solltest du jetzt richtig Bock auf den Kurs bekommen haben, dann melde dich bis zum 04. Mai 2025 an!

Wir freuen uns auf deine Anmeldung!`,
      audience:
        'Du bist aktiv in Stamm oder LV, Du bist zwischen 16 und 23 Jahren alt (Schreibt uns, falls ihr älter seid)',
      courseFee: 80,
      startDate: '2025-05-29',
      endDate: '2025-06-01',
      slug: 'tkkg',
      applicationDeadline: '2025-05-04',
      location: 'Waldmohr',
    },
  },
}
export default function Page() {
  const [isAdult, setIsAdult] = useState(false)

  const {
    courseTitle,
    descriptionText,
    audience,
    courseFee,
    startDate,
    endDate,
    slug,
    applicationDeadline,
  } = course?.data?.attributes || {}

  const courseLocation = course?.data?.attributes.location || ''

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
    name: 'nationalAssociation',
    required: true,
  })
  const additionalGroup = useField({
    name: 'additionalGroup',
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

  const isBringingInstrument = useBoolField({
    name: 'isBringingInstrument',
    value: false,
  })
  const grantPermission = useBoolField({
    name: 'grantPermission',
    value: false,
  })

  const correctness = useBoolField({
    name: 'correctness',
    value: false,
  })

  const consentForUnsupervisedExcursion = useBoolField({
    name: 'consentForUnsupervisedExcursion',
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

  const pronouns = useField({ name: 'pronouns' })

  const finishedCourses = useField({ name: 'finishedCourses' })

  const bdpMemberSince = useField({ name: 'bdpMemberSince' })

  const hasMobilityTicket = useField({ name: 'hasMobilityTicket' })

  const acceptDSGVO = useBoolField({ name: 'acceptDSGVO', value: false })
  const courseIdentifier = useField({ name: 'courseIdentifier', value: slug })

  const { submit, reset } = useForm(
    name,
    lastname,
    scoutname,
    pronouns,
    nationalAssociation,
    group,
    additionalGroup,
    phone,
    mail,
    street,
    housenumber,
    zipcode,
    location,
    place,
    birthday,
    finishedCourses,
    bdpMemberSince,
    ezbName,
    ezbLastname,
    ezbPhone,
    ezbMail,
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
    hasMobilityTicket,
    grantPermission,
    consentForUnsupervisedExcursion,
    correctness,
    photoConsent,
    medicalConsent,
    medicalTreatmentConsent,
    privateCarConsent,
    sendFee,
    refundConsent,
    acceptDSGVO,
    date,
    courseIdentifier
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
          <Text variant="title">Anmeldung für den {courseTitle}</Text>
          <Text>
            <span dangerouslySetInnerHTML={{ __html: descriptionText }} />
          </Text>
          <Box space={2}>
            <Text variant="category">Infos</Text>
            {courseLocation && <Text>Ort: {courseLocation}</Text>}
            {courseFee && <Text>Kosten: {courseFee}</Text>}
            <Text>Zielgruppe: {audience}</Text>
            <Text>
              Datum: 
              {new Date(startDate).toLocaleString('de', {
                dateStyle: 'short',
              })}{' '}
              -{' '}
              {new Date(endDate).toLocaleString('de', {
                dateStyle: 'short',
              })}
            </Text>
            <Text>
              Anmeldeschluss: 
              {new Date(applicationDeadline).toLocaleString('de', {
                dateStyle: 'short',
              })}
            </Text>
            <br />
            <Text>
              Wenn du Fragen zur Anmeldung oder dem Kurs hast, melde dich gerne
              bei uns unter{' '}
              <Link href="mailto:ausbildung@bdp-rps.de">
                ausbildung@bdp-rps.de.
              </Link>
            </Text>
          </Box>
          <Box
            as="form"
            noValidate
            space={4}
            onSubmit={(e) => {
              e.preventDefault()

              submit(async (isValid, data) => {
                if (isValid) {
                  const response = await fetch('/api/send-notification-mail', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      course,
                      entry: data,
                    }),
                  })

                  debugger

                  if (response?.status === 200) {
                    const response2 = await fetch('/api/send-data-mail', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        course,
                        entry: data,
                      }),
                    })

                    if (response2.status === 200) {
                      reset()
                      alert('Anmeldung erfolgreich abgeschlossen!')
                    } else {
                      alert(
                        'Leider ging etwas schief. Bitte versuch es erneut.'
                      )
                    }
                  } else {
                    alert('Leider ging etwas schief. Bitte versuch es erneut.')
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
            <TextInput
              label="Pronomen"
              placeholder="Pronomen"
              {...pronouns.props}
            />
            <SelectInput
              label="Landesverband"
              {...nationalAssociation.props}
              /*onChange={(e) =>
                setNationalAssociation(nationalAssociation.value)
              }
              */
            >
              <option value="" />
              {landesverbaende.map((landesverband, index) => (
                <option key={index} value={landesverband.name}>
                  {landesverband.name}
                </option>
              ))}
            </SelectInput>
            {nationalAssociation.value ===
            'Landesverband Rheinland-Pfalz & Saar' ? (
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
            ) : (
              <TextInput label="Externer Stamm" {...additionalGroup.props} />
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
            <TextInput
              label="Ich habe bereits folgende Kurse besucht"
              {...finishedCourses.props}></TextInput>
            <TextInput
              label="Ich bin im BdP seit"
              type="date"
              {...bdpMemberSince.props}
            />
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
                  <TextInput label="Telefon-/Mobilnummer" {...ezbPhone.props} />
                  <TextInput label="Mailadresse" {...ezbMail.props} />
                </Box>
                <Box direction={['column', , , 'row']} space={4}>
                  <TextInput label="Straße" {...ezbStreet.props} />
                  <TextInput label="Hausnummer" {...ezbHousenumber.props} />
                </Box>
                <Box direction={['column', , , 'row']} space={4}>
                  <TextInput label="PLZ" {...ezbZipcode.props} />
                  <TextInput label="Ort" {...ezbLocation.props} />
                </Box>
              </Box>
            )}
            <span />
            <Box space={4}>
              <Text variant="category">Weitere Angaben</Text>
              <Box direction={['column', , , 'row']} space={4}>
                <TextInput
                  label="Essgewohnheiten (z.B. vegan)"
                  {...foodPreferences.props}
                />
                <TextInput
                  label="Allergien/Unverträglichkeiten"
                  {...allergies.props}
                />
              </Box>
              <Box direction={['column', , , 'row']} space={4}>
                <TextInput
                  label="Medikamentenunverträglichkeiten"
                  {...drugIncompatibility.props}
                />
                <TextInput
                  label="Folgende Medikamente müssen eingenommen werden"
                  {...neededMedicals.props}
                />
              </Box>
              <Box direction={['column', , , 'row']} space={4}>
                <TextInput
                  label="Letzte Tetanusimpfung"
                  type="date"
                  {...lastTetanusVaccination.props}
                />
                <TextInput
                  label="Name der Krankenkasse"
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
              </Box>
              <Checkbox
                label="Ich bringe ein Instrument mit"
                {...isBringingInstrument.props}
              />
              <TextInput
                label="Ich habe ein Deutschlandticket: ja/nein/anderes Ticket oder Ermäßigungsticket"
                {...hasMobilityTicket.props}
              />

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
                    haftet die Kursleitung nicht. Im Krankheitsfall wird der/die
                    Teilnehmende in ärztliche Behandlung gegeben. Die
                    Teilnehmenden werden üblicherweise in „gemischten“ Zelten
                    bzw. Unterkünften untergebracht. Die Anreise wird von der
                    Kursleitung zentral geplant und findet ohne Aufsichtsperson
                    statt.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...consentForUnsupervisedExcursion.props} />
                  <Text>
                    Ich bin damit einverstanden, dass die Teilnehmenden während
                    der Maßnahme in Gruppen einen Ausflug mit Übernachtung ohne
                    die Beaufsichtigung durch das Kursteam unternehmen. Die
                    Rahmenbedingungen für diesen Ausflug (Übernachtungsort,
                    Verpflegung, Programm etc.) werden durch das Kursteam im
                    Vorhinein organisiert. Während des Ausflugs und der
                    Übernachtung ist das Team für Notfälle selbstverständlich
                    erreichbar.
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
                    Kurses möchten wir gern Foto/-Videoaufnahmen machen und
                    diese auf unserer Website und Social-Media veröffentlichen.
                    Es wäre schön, wenn Sie als Erziehungsberechtigte*r diesen
                    Aufnahmen und der Verbreitung zustimmen würden.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...medicalConsent.props} />
                  <Text>
                    <Text variant="category">Medikamentenvollmacht:</Text> Die
                    Die Verantwortlichen des Kurses dürfen bei Notwendigkeit die
                    mitgebrachten Medikamente bzw. die im Notfall von einem Arzt
                    verschriebene Medizin verabreichen.
                  </Text>
                </Box>
                <Box direction="row" space={2}>
                  <Checkbox {...medicalTreatmentConsent.props} />
                  <Text>
                    <Text variant="category">Ärztliche Behandlungen: </Text>Mit
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
                      Den Kursbeitrag von 80€ überweise ich bis zum 04.05.2025
                      auf das Konto des Landesverbands Rheinland-Pfalz/Saar.
                      (Verwendungszweck: Kurstitel + Name Teilnehmer\*in) <br />
                      Für Teilnehmende aus Einkommensschwachen Familien 57,50€.
                      Anmeldeschluss ist der 04.05.2025. Eine spätere Anmeldung
                      ist nur nach Absprache möglich. Die Rückerstattung des
                      halben Teilnahmebeitrages kann nur bei einer Abmeldung bis
                      24 Stunden vor Beginn des Kurses eingefordert werden.
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
                      vor Beginn des Kurses eingefordert werden kann.
                      Überweisungen und Zuschussregelungen seitens der Stämme
                      können von den Kursteams aus nicht berücksichtigt werden!
                    </Text>
                  </Box>
                  <Box direction="row" space={2} paddingTop={4}>
                    <Checkbox {...acceptDSGVO.props} />
                    <Text>
                      Ich stimme der Verarbeitung meiner persönlichen Daten
                      gemäß der Datenschutzrichtlinie (DSGVO) zu.
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
