import React, { useState } from 'react'
import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Spacer,
  Button,
  TextInput,
  SelectInput,
  Checkbox,
  useField,
  useBoolField,
  useForm,
} from '@bdp-rps/ui'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import Link from '../components/Link'
import Confetti from '../components/Confetti'

import image from '../public/images/mitgliedBg.jpg'

const intervals = {
  year: 'jährlich',
  quarter: 'quar­tals­wei­se',
}

const multiplier = {
  year: 1,
  quarter: 4,
}

function RegisterForm() {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const [confettiVisible, setConfettiVisible] = useState(false)

  const name = useField({
    name: 'name',
    required: true,
  })
  const birthday = useField({
    name: 'birthday',
    required: true,
  })
  const street = useField({
    name: 'street',
    required: true,
  })
  const postcode = useField({
    name: 'postcode',
    required: true,
  })
  const city = useField({
    name: 'city',
    required: true,
  })
  const phone = useField({
    name: 'phone',
  })
  const email = useField({
    name: 'email',
    required: true,
  })
  const owner = useField({
    name: 'owner',
  })
  const iban = useField({
    name: 'iban',
    required: true,
  })
  const interval = useField({
    name: 'interval',
    required: true,
    value: 'year',
  })
  const amount = useField({
    name: 'amount',
    required: true,
    validation: {
      'Der Mindestbetrag beträgt 12€.': (value) => parseInt(value) >= 12,
    },
  })

  const payCurrentYear = useBoolField({
    name: 'payCurrentYear',
  })
  const acceptTerms = useBoolField({
    name: 'acceptTerms',
    required: true,
  })

  const { submit, reset } = useForm(
    name,
    birthday,
    street,
    postcode,
    city,
    phone,
    email,
    owner,
    iban,
    amount,
    interval,
    payCurrentYear,
    acceptTerms
  )

  const amountPerInterval = amount.isValid
    ? parseInt(amount.value) / multiplier[interval.value]
    : undefined

  return (
    <>
      {/* {confettiVisible && <Confetti />} */}
      <Box space={8} width="100%" maxWidth={['100%', , , 600]}>
        <Text variant="subtitle">Beitrittsformular</Text>
        <Box
          as="form"
          noValidate
          space={4}
          onSubmit={(e) => {
            e.preventDefault()

            submit(async (isValid, data) => {
              if (isValid) {
                setLoading(true)

                const res = await fetch('/api/memberMail', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify(data),
                })

                const json = await res.json()
                setLoading(false)

                if (json.status === 'done') {
                  setConfettiVisible(true)
                  reset()
                } else {
                  alert(
                    'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.'
                  )
                }
              }
            })
          }}>
          <TextInput label="Vor- und Nachname" {...name.props} />
          <TextInput
            label="Geburtsdatum"
            placeholder="01.01.1990"
            {...birthday.props}
          />
          <TextInput
            label="Straße"
            placeholder="Musterstraße 13"
            {...street.props}
          />
          <Box direction={['column', , 'row']} space={4}>
            <TextInput label="PLZ" placeholder="76131" {...postcode.props} />
            <Box grow={1}>
              <TextInput
                label="Ort"
                placeholder="Musterstadt"
                {...city.props}
              />
            </Box>
          </Box>
          <TextInput
            label="Telefon"
            inputMode="tel"
            placeholder="0151 123456789"
            {...phone.props}
          />
          <TextInput
            label="E-Mail"
            inputMode="email"
            placeholder="max@mustermann.de"
            {...email.props}
          />
          <TextInput label="Kontoinhaber (falls abweichend)" {...owner.props} />
          <TextInput
            label="IBAN"
            placeholder="DE12 3456 7890 1234 5678 90"
            {...iban.props}
          />
          <SelectInput
            label="Abbuchungsinteral"
            description="Jährliche Buchungen erleichtern werden immer zum 1. April eingezogen."
            {...interval.props}>
            <option value="year">Jährlich</option>
            <option value="quarter">Quar­tals­wei­se</option>
          </SelectInput>
          <TextInput
            label="Betrag pro Jahr (in Euro)"
            type="number"
            min={12}
            placeholder="12"
            {...amount.props}
          />
          {amountPerInterval && (
            <Box bg="background.info" padding={4}>
              <Text>
                Wir buchen dir{' '}
                <Text subStyle="emphasis">{intervals[interval.value]}</Text>{' '}
                einen Betrag in Höhe von{' '}
                <Text subStyle="emphasis">{amountPerInterval}€</Text> ab.
              </Text>
            </Box>
          )}
          <div />
          <Checkbox
            label="Ich möchte rückwirkend für das laufende Jahr bezahlen"
            {...payCurrentYear.props}
          />
          <Checkbox
            label="Ich ermächtige den Förderverein Watoto Kabisa e.V., meinen Mitgliedsbeitrag per SEPA-Lastschrift abzubuchen"
            {...acceptTerms.props}
          />
          <div />
          <Box
            alignSelf="flex-start"
            extend={{
              border: '2px solid black',
              borderRadius: theme.tokens.borderRadius,
            }}>
            <Button type="submit" loading={loading}>
              Abschicken
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default function Page() {
  const theme = useTheme()

  return (
    <>
      <Head>
        <title>Watoto Kabisa - Mitglied werden</title>
        <meta name="title" content="Watoto Kabisa - Mitglied werden" />
        <meta
          name="description"
          content="Werde Mitglied und unterstützte unsere Arbeit vor Ort."
        />
      </Head>
      <Template image={image} title="Mitglied werden!">
        <Box bg="background.primary">
          <Layout space={15} paddingTop={15} paddingBottom={25}>
            <Box space={4}>
              <Text variant="subtitle">Wie du uns unterstützen kannst!</Text>
              <Box maxWidth={theme.maxReadWidth}>
                <Text>
                  Ein Förderverein lebt von seinen Mitgliedern. Wir freuen uns
                  über jeden, der sich in irgend einer Art aktiv ins Projekt
                  einbringen möchte – genauso aber auch über jeden, der uns
                  einfach nur finanziell unterstützt. Dabei kannst du selbst
                  entscheiden, wie hoch dein Mitgliedsbeitrag sein soll,
                  schließlich sollen auch Schüler und Studenten mitmachen
                  können. Einen Euro im Monat kann jeder entbehren, in Kenia
                  kann er jedoch schon viel bewirken.
                  <br />
                  <br />
                  Fülle einfach unten das Formular aus und wir melden uns bei
                  dir!
                  <br />
                  Alternativ kannst du das{' '}
                  <Link href="/files/beitrittsformular.pdf" download>
                    Beitrittsformular
                  </Link>{' '}
                  herunterladen, ausfüllen und uns per{' '}
                  <Link href="mailto:info@watoto-kabisa.de">E-Mail</Link> oder
                  Post zukommen lassen. Wenn dein Briefumschlag ein Fenster hat,
                  brauchst du ihn noch nicht einmal zu beschriften.
                  <br />
                  <br />
                  Solltest du noch Fragen haben,{' '}
                  <Link href="mailto:info@watoto-kabisa.de">
                    helfen wir dir per Mail
                  </Link>{' '}
                  auch gerne weiter.
                  <br />
                  <br />
                  Vielen Dank für deine Unterstützung!
                </Text>
              </Box>
            </Box>
            <Box maxWidth={theme.maxReadWidth}>
              <RegisterForm />
            </Box>
          </Layout>
        </Box>
      </Template>
    </>
  )
}
