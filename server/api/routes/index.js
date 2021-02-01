const controller = require('../controller');

module.exports.init = function (app) {
    app.use(require('./users'));
    app.use(require('./email'));
}
