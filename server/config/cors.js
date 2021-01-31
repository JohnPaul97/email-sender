var cors = require('cors');
var configs = require('../configs');

var corsOptions = {
    origin: configs.frontClient,
    optionSuccessStatus: 200,
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE"
}

module.exports = cors(corsOptions);