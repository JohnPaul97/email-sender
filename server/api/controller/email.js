const email = require('../../../email/sendEmail');



const sendEmail = (req, res, next) => {
    console.log(req.body);

    email.sendEmail(req.body);

    return res.json({status: 201, message: "sent"});
}

module.exports = { sendEmail };