const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route
app.post('/api/book', async (req, res) => {
  const { name, email, phone, message, appointment } = req.body;

  res.status(200).send('Request received');

  transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: 'New Appointment Booking',
    html: `
      <h3>New Appointment Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Requested Time:</strong> ${new Date(appointment).toLocaleString()}</p>
    `,
  }).catch((error) => {
    console.error('Email error (post-response):', error);
  });
});

// Serve frontend static files
const clientBuildPath = path.join(__dirname, 'client/build');
app.use(express.static(clientBuildPath));

// Only serve index.html for non-API, non-static GET requests
app.get('*', (req, res) => {
  const requestedPath = req.path;

  // If request starts with /api or /static or ends in .js/.css/etc, let express.static handle it
  if (
    requestedPath.startsWith('/api') ||
    requestedPath.startsWith('/static') ||
    requestedPath.includes('.') // handles .js, .css, .json, etc
  ) {
    return res.status(404).send('Not Found');
  }

  // Else fallback to index.html (for client-side routing)
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
