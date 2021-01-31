const router = require('express').Router();
const userCtr = require('../controller/user');

router.get('/users', userCtr.getUsers);
router.post('/users', userCtr.createUsers);

module.exports = router;