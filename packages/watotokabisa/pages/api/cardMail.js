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
    amountMeal,
    amountGarden,
    amountZiege,
    porto,
    name,
    street,
    postcode,
    city,
    email,
  } = body

  const moneyRequired = `
Bitte überweise den offenen Betrag zeitnah auf unser Konto:
Förderverein Watoto Kabisa e.V.
DE12 5405 0220 0034 5389 91
BIC: MALADE51KLS
Stadtsparkasse Kaiserslautern

Wir versenden die Karten, sobald wir das Geld erhalten haben!
`

  const text = `
  Hallo ${name},
  
Vielen Dank für deine Kartenbestellung!

Bevor wir die Karten verschicken können, brauchen wir eine kurze Bestätigung über die Richtigkeit der Bestellung.
Antworte uns dazu einfach kurz auf diese E-Mail.

${amountMeal ? `${amountMeal}x Schulspeisung: ${amountMeal * 10}€` : ''}
${amountGarden ? `${amountGarden}x Schulspeisung: ${amountGarden * 20}€` : ''}
${amountZiege ? `${amountZiege}x Schulspeisung: ${amountZiege * 30}€` : ''}
inkl. Porto: ${porto ? 'Ja' : 'Nein'}
--------------
Gesamt: <b>${
    amountMeal * 10 + amountGarden * 20 + amountZiege * 30 + porto ? 1.55 : 0
  }€</b>


${
  withdrawMoney
    ? 'Wir buchen den Betrag in den nächsten Tagen von deinem Konto ab.'
    : moneyRequired
}

Lieferadresse:
${body}
${street}
${postcode} ${city}

Liebe Grüße,
Der Vorstand
Watoto Kabisa e.V.`

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
