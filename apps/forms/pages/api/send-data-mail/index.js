require('dotenv').config()
import sgMail from '@sendgrid/mail'

// Set the SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { entry, course } = req.body
    const courseName = req.body.entry?.courseIdentifier || ''

    const msg = {
      to: 'robin@bdp-rps.de',
      from: 'no-reply@bdp-rps.de',
      subject: `Kursanmeldung (${courseName}) - ${entry.name}`,
      html: `<pre>${JSON.stringify(entry, null, 2)}</pre>`,
    }

    const response = await sgMail.send(msg)

    console.log('Email sent:', response)
    return res.status(200).json({ success: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error.message)
    return res
      .status(500)
      .json({ error: `Failed to send email: ${error.message}` })
  }
}
