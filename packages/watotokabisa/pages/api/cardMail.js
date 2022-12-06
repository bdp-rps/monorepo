const nodemailer = require('nodemailer')

export default async function handler({ body }, res) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const {
    meal,
    garden,
    goat,
    porto,
    name,
    street,
    postcode,
    city,
    email,
    withdrawMoney,
    owner,
    iban,
  } = body

  const amountMeal = parseInt(meal, 10) || 0
  const amountGarden = parseInt(garden, 10) || 0
  const amountGoat = parseInt(goat, 10) || 0

  const moneyRequired = `Bitte überweise den offenen Betrag zeitnah auf unser Konto:
Förderverein Watoto Kabisa e.V.
DE12 5405 0220 0034 5389 91
BIC: MALADE51KLS
Stadtsparkasse Kaiserslautern
Verwendungszweck: Geschenkkarten Kenia

Wir versenden die Karten, sobald wir das Geld erhalten haben.`

  const text = `
  Hallo ${name},
  
Vielen Dank für deine Kartenbestellung!

Bevor wir die Karten verschicken können, brauchen wir eine kurze Bestätigung über die Richtigkeit der Bestellung. Antworte uns dazu einfach kurz auf diese E-Mail.

${amountMeal > 0 ? `${amountMeal}x Schulspeisung: ${amountMeal * 10}€\n` : ''}${
    amountGarden > 0
      ? `${amountGarden}x Gemüsegarten: ${amountGarden * 20}€\n`
      : ''
  }${amountGoat > 0 ? `${amountGoat}x Ziege: ${amountGoat * 30}€\n` : ''}${
    porto ? 'inkl. Porto: 1.55€\n' : ''
  }--------------
Gesamt: ${
    amountMeal * 10 + amountGarden * 20 + amountGoat * 30 + (porto ? 1.55 : 0)
  }€

Lieferadresse:
${name}
${street}
${postcode} ${city}

${
  withdrawMoney
    ? `Wir buchen den Betrag in den nächsten Tagen von deinem Konto ab:
${owner || name}
${iban}
`
    : moneyRequired
}Die Spendenquittung schicken wir dir automatisch nach Eingang des Geldes an die hier verwendete E-Mail Adresse.

Asante sana,
Der Vorstand
Watoto Kabisa e.V.`

  console.log(text, body)

  const mail = {
    from: '"Karten Service" <karten@watoto-kabisa.de>',
    to: `karten@watoto-kabisa.de, ${email}`,
    subject: 'Bestellung Karten - ' + name,
    text,
  }

  // send mail with defined transport object
  const result = await transporter.sendMail(mail)

  if (result?.accepted?.length > 0) {
    res.status(200).json({ status: 'done' })
  } else {
    res.status(400).json({ status: 'error' })
  }
}
