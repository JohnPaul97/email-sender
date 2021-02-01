'use strict'

const nodemailer = require('nodemailer');
const config = require('./config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.IMAP_USER,
        pass: config.IMAP_PASS
    }
});

function sendEmail(payload) {
    const mailOptions = {
        from: 'from',
        to: payload.email,
        subject: payload.subject,
        text: payload.content
    };

    transporter.sendMail(mailOptions, (err, info) => {
        console.log(info);
        if (err) {
            console.log("error when trying to send an email: ", err);
        }
    });

    console.log("email send");

    return 'Email Sent!';
}

module.exports = { sendEmail };
