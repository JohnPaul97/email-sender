var mongoose = require('mongoose');
var configs = require('../configs.js');

mongoose.connect(configs.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('SIGHUP', cleanup);

function cleanup() {
    mongoose.connection.close = function () {
        process.exit();
    }
}

var connection = mongoose.connection;

module.exports = connection;
