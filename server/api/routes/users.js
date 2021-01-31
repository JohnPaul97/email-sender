const router = require('express').Router();
const userCtr = require('../controller/user');
const corsSetup = require('../../cors/cors');

router.get('/users', corsSetup, userCtr.getUsers);
router.post('/users', corsSetup, userCtr.createUsers);

module.exports = router;