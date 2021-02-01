const router = require('express').Router();
const userCtr = require('../controller/user');
const token = require('../token');

router.get('/users',  token.checkToken, userCtr.getUsers);
router.post('/login', userCtr.login);

module.exports = router;