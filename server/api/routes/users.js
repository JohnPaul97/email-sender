const router = require('express').Router();
const userCtr = require('../controller/user');

router.get('/users',  userCtr.getUsers);
router.post('/login', userCtr.login);

module.exports = router;