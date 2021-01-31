var cors = require('cors');
var configs = require('../configs');

var corsOptions = {
    origin: configs.frontClient,
    optionSuccessStatus: 200
}

module.exports = cors(corsOptions);