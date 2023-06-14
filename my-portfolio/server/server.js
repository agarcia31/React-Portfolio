const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter using your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Configure the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'a.garcia.atn31@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

