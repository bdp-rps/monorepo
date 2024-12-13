require('dotenv').config()
import nodemailer from 'nodemailer'

// Create a Nodemailer transporter outside the handler
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  pool: true,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { entry, model } = req.body
    const { name, mail, courseIdentifier, courseFee = '100 Euro' } = entry || {}

    if (model === 'kursanmeldung') {
      const info = await transporter.sendMail({
        from: 'no-reply@bdp-rps.de',
        to: mail,
        subject: 'Bestätigung deiner Kursanmeldung',
        html: `
          <p>Hallo ${name},</p>
          <p>Hier kommt deine Anmeldebestätigung für den <strong>${courseIdentifier.toUpperCase()}</strong>.</p>
          <p>Bitte überweise den Kursbeitrag von ${courseFee} bis zum <strong>26.02.2025</strong> auf das LV Konto:</p>
          <p>
              <strong>BdP LV RPS</strong> <br>
              IBAN: DE18 5405 0220 0108 8104 25 <br>
              BIC: MALADE51KLK
          </p>
          <p>...</p>
        `,
      })

      console.log('Email sent:', info.messageId)
      return res.status(200).json({ success: `Email sent: ${info.messageId}` })
    } else {
      return res.status(400).json({ error: 'Invalid model, email not sent' })
    }
  } catch (error) {
    console.error('Error sending email:', error.message)
    return res
      .status(500)
      .json({ error: `Failed to send email: ${error.message}` })
  }
}
