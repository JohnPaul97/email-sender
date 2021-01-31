const router = require('express').Router();
const userCtr = require('../controller/user');

const cors = (req, res, next) => {
    //middleware for adding cors header
    console.log("middleware cors")
    
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    next();
};

router.get('/users', cors, userCtr.getUsers);
router.post('/users', userCtr.createUsers);

module.exports = router;