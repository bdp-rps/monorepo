import React, { useState } from 'react'
import {
  Box,
  NavBar,
  NavBarItem,
  Text,
  useTheme,
  Grid,
  TextInput,
  Button,
  Checkbox,
  useForm,
  useField,
  useBoolField,
} from '@bdp-rps/ui'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../components/Layout'
import Template from '../components/Template'
import ImageCard from '../components/ImageCard'
import TextCard from '../components/TextCard'
import Link from '../components/Link'
import Confetti from '../components/Confetti'

import image from '../public/images/geschenkkartenBg.jpg'
import schulspeisung from '../public/images/schulspeisung.jpg'
import ziege from '../public/images/ziege.jpg'
import garten from '../public/images/gemuesegarten.jpg'

function OrderForm() {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const [confettiVisible, setConfettiVisible] = useState(false)

  const name = useField({
    name: 'name',
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
  const email = useField({
    name: 'email',
    required: true,
  })
  const amountMeal = useField({
    name: 'meal',
  })
  const amountGarden = useField({
    name: 'garden',
  })
  const amountGoat = useField({
    name: 'goat',
  })
  const withdrawMoney = useBoolField({
    name: 'withdrawMoney',
  })
  const porto = useBoolField({
    name: 'porto',
  })
  const owner = useField({
    name: 'owner',
  })
  const iban = useField({
    name: 'iban',
    required: true,
  })
  const acceptTerms = useBoolField({
    name: 'acceptTerms',
    required: true,
  })

  const fields = [
    name,
    street,
    postcode,
    city,
    email,
    amountMeal,
    amountGoat,
    amountGarden,
    withdrawMoney,
    porto,
    withdrawMoney.value === true ? acceptTerms : false,
    withdrawMoney.value === true ? owner : false,
    withdrawMoney.value === true ? iban : false,
  ].filter(Boolean)

  const { submit, reset } = useForm(...fields)

  const totalAmount =
    (parseInt(amountMeal.value) || 0) * 10 +
    (parseInt(amountGarden.value) || 0) * 20 +
    (parseInt(amountGoat.value) || 0) * 30 +
    (porto.value === true ? 1.6 : 0)

  return (
    <>
      {confettiVisible && <Confetti />}
      <Box space={8} width="100%" maxWidth={['100%', , , 600]}>
        <Text variant="subtitle">Bestellformular</Text>
        <Box
          as="form"
          noValidate
          space={4}
          onSubmit={(e) => {
            e.preventDefault()

            submit(async (isValid, data) => {
              if (isValid) {
                if (totalAmount <= 0) {
                  alert('Es muss mindestens eine Karte bestellt werden.')
                  return
                }

                setLoading(true)

                const res = await fetch('/api/cardMail', {
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
            label="E-Mail"
            inputMode="email"
            placeholder="max@mustermann.de"
            description="Für Rückfragen und Zusendung der Spendenquittung"
            {...email.props}
          />
          <TextInput
            label="Anzahl Schulspeisung (10€)"
            type="number"
            {...amountMeal.props}
          />
          <TextInput
            label="Anzahl Gemüsegarten (20€)"
            type="number"
            {...amountGarden.props}
          />
          <TextInput
            label="Anzahl Ziege (30€)"
            type="number"
            {...amountGoat.props}
          />
          <Checkbox
            label="Ich möchte zusätzlich das Porto von 1,60 € bezahlen"
            {...porto.props}
          />
          {totalAmount > 0 && (
            <Box bg="background.info" padding={4}>
              <Text>
                Die ausgewählten Karten kosten in Summe{' '}
                <Text subStyle="emphasis">{totalAmount}</Text> €.
              </Text>
            </Box>
          )}
          <div />
          <Checkbox
            label="Ich möchte den Betrag abgebucht bekommen"
            {...withdrawMoney.props}
          />
          {withdrawMoney.value && (
            <TextInput
              label="Kontoinhaber (falls abweichend)"
              {...owner.props}
            />
          )}
          {withdrawMoney.value && (
            <TextInput
              label="IBAN"
              placeholder="DE12 3456 7890 1234 5678 90"
              {...iban.props}
            />
          )}
          {withdrawMoney.value && (
            <Checkbox
              label="Ich ermächtige den Förderverein Watoto Kabisa e.V., den Betrag per SEPA-Lastschrift abzubuchen"
              {...acceptTerms.props}
            />
          )}
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
    <Template image={image} title="Geschenkkarten!">
      <Head>
        <title>Geschenkkarten - Watoto Kabisa</title>
        <Head>
          <meta
            type="description"
            content="Hier findet ihr Infos zu unserer Geschenkkarten Aktion."
          />
        </Head>
      </Head>
      <Box bg="background.primary">
        <Layout space={15} paddingTop={15} paddingBottom={25}>
          <Box space={4}>
            <Text variant="subtitle">Einmalig spenden, bewusst schenken!</Text>
            <Box maxWidth={theme.maxReadWidth}>
              <Text>
                Du möchtest genau bestimmen, was mit deiner Spende passiert?
                Dann bestell doch unsere Geschenkkarten!
                <br />
                Du suchst dir aus verschiedenen Möglichkeiten unterschiedlicher
                Preisklassen genau das aus, was du in Kenia verschenken willst.
                Als Dankeschön, und natürlich auch zum Weiterschenken geeignet,
                bekommst du eine hübsche Klapp-Postkarte, auf der erläutert
                wird, wozu deine Spende in Kenia gut ist.
                <br />
                Diese Karten eignen sich übrigens auch super als
                Weihnachtsgeschenke, die lange Freude machen und wirklich
                sinnvoll sind.
                <br />
                <br />
                Bestelle ganz einfach unten mit dem Formular oder{' '}
                <Link href="mailto:karten@watoto-kabisa.de">
                  schick uns eine E-Mail
                </Link>{' '}
                mit deinem Bestellwunsch.
              </Text>
            </Box>
          </Box>

          <Box space={4}>
            <Text variant="subtitle">Was bieten wir an?</Text>
            <Grid gap={8} columns={['1fr', , '1fr 1fr']}>
              <ImageCard minHeight={400} image={schulspeisung} />
              <TextCard>
                <Text color="white" variant="subtitle">
                  Schulspeisung - 10€
                </Text>
                <Text color="white">
                  Die Schulspeisungen sorgen täglich für insgesamt fast 4000
                  satte Schülerinnen und Schüler. So lernt es sich besser und
                  die Hoffnung auf eine erfolgreiche Zukunft steigt auch. Schon
                  mit 10 Euro kann eine ganze Grundschule ein paar Tage lang
                  versorgt werden.
                </Text>
              </TextCard>

              <TextCard>
                <Text color="white" variant="subtitle">
                  Gemüsegarten - 20€
                </Text>
                <Text color="white">
                  Ein Selbstversorgergarten bringt Unabhängigkeit und
                  Gesundheit. Viele der Projektbauern und -bäuerinnen sorgen mit
                  dem Anbau von verschiedenen Ost- und Gemüsesorten für eine
                  ausgewogene Ernährung ihrer Familien und schaffen sich durch
                  den Verkauf ihrer Erträge gleichzeitig eine stabile
                  Einnahmequelle.
                </Text>
              </TextCard>
              <ImageCard minHeight={400} image={garten} />
              <ImageCard minHeight={400} image={ziege} />
              <TextCard>
                <Text color="white" variant="subtitle">
                  Ziege - 30€
                </Text>
                <Text color="white">
                  Ziegen sind praktisch und nachhaltig: Sie sind sehr robust und
                  liefern nahrhafte Milch, Dünger für die Felder, Fleisch und
                  können bei akutem Geldbedarf verkauft werden.
                </Text>
              </TextCard>
            </Grid>
          </Box>
          <OrderForm />
        </Layout>
      </Box>
    </Template>
  )
}
