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

  console.log(body)

  const mail = {
    from: `"Mitglieder-Service" <mitglieder@watoto-kabisa.de>`,
    to: 'robin@watoto-kabisa.de',
    subject: 'Mitgliedsantrag - ' + body.name,
    text: JSON.stringify(body, null, 2),
  }

  console.log(mail)

  // send mail with defined transport object
  try {
    const result = await transporter.sendMail(mail)

    if (result?.accepted?.length > 0) {
      res.status(200).json({ status: 'done' })
    } else {
      res.status(400).json({ status: 'error' })
    }
  } catch (e) {
    console.log(e)

    res.status(400).json({ status: 'error' })
  }
}
