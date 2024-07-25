const express = require('express');
const router = express.Router();
const transporter = require('../Config/mailer');

router.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;
    const mailOptions = {
        from: email,
        to: process.env.SENDER_EMAIL,
        subject: `Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

module.exports = router;