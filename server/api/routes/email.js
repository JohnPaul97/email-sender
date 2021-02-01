const router = require('express').Router();
const emailCtr = require('../controller/email');
const token = require('../token');

router.post('/email',  token.checkToken, emailCtr.sendEmail);

module.exports = router;
