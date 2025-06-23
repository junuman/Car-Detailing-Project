const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Define transporter ONCE
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/book', async (req, res) => {
  const { name, email, message, appointment } = req.body;

  // Respond to client immediately
  res.status(200).send('Request received');

  // Then send the email asynchronously
  transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Appointment Booking',
    html: `
      <h3>New Appointment Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Requested Time:</strong> ${new Date(appointment).toLocaleString()}</p>
    `,
  }).catch((error) => {
    console.error('Email error (post-response):', error);
    // Optionally, log this to a database or alert system
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
