const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'rambler',
    host: 'smtp.rambler.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'checkshopsendemail@rambler.ru',
      pass: 'checkForSend!1488',
    },
  })
);

sendEmail = async (text) => {
  const mailOptions = {
    from: 'checkshopsendemail@rambler.ru',
    to: 'checkshopsendemail@rambler.ru',
    subject: 'new Order',
    text: text,
  };
  console.log('send start')
  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
  });
}

exports.send = async (text) => {
  await sendEmail(text)
};
