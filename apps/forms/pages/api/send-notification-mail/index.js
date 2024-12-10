require('dotenv').config()

import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, //true for 465 else set to false
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    const userName = req.body.entry?.name ? req.body.entry.name : ''
    const userMail = req.body.entry?.mail || ''

    // Send the email
    if (req.body.model === 'kursanmeldung') {
      const info = await transporter.sendMail({
        from: 'no-reply@bdp-rps.de',
        to: userMail,
        subject: 'Bestätigung deiner Kursanmeldung',
        text: `Hallo ${userName}, hier kommt deine Anmeldebestätigung für den \[Kurstitel\]! Bitte überweise den Kursbeitrag von 100€ bis zum 26.02.2025 auf das LV Konto. <br>BdP LV RPS <br>IBAN: DE18 5405 0220 0108 8104 25 <br>BIC: MALADE51KLK
        <br>Gib dabei bitte als Verwendungszweck den Kurstitel und deinen Namen an, dann können wir das Geld leichter zuordenen. Bald wird sich die jeweilige Kursleitung bei dir melden. Falls du vorher noch Fragen hast, kannst du uns gerne eine Mail an ausbildung@bdp-rps.de schicken. <br>Wir freuen uns, dass du bei der nächsten Kurssaison dabei bist! <br>Liebe Grüße und gut Pfad <br>Deine Landesbeauftragten für Ausbildung, Anna und Lilli`,
      })
      console.log('Email sent:', info.messageId)
      return res.status(200).json({ success: `Email sent: ${info.messageId}` })
    } else {
      // If the model is not 'kursanmeldung', return a message
      return res.status(400).json({ error: 'Invalid model, email not sent' })
    }
  } catch (error) {
    console.error('Error sending email:', error.message)
    return res
      .status(500)
      .json({ error: `Failed to send email: ${error.message}` })
  }
}
