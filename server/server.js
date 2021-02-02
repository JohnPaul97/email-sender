const express = require('express');
const app = express();
const port = 9997;

require('./config/express').init(app);
require('./api/routes').init(app);
require('./mongoose');

app.listen(port, function () {
    console.log('welcome to my server application!');
});
