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

  const mail = {
    from: '"Watoto Mitglieds-Formular" <vorstand@watoto-kabisa.de>',
    to: 'robin@watoto-kabisa.de',
    subject: 'Mitgliedsantrag - ' + body.name,
    text: JSON.stringify(body, null, 2),
  }

  // send mail with defined transport object
  const result = await transporter.sendMail(mail)

  if (result?.accepted?.length > 0) {
    res.status(200).json({ status: 'done' })
  } else {
    res.status(400).json({ status: 'error' })
  }
}
