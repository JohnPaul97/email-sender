const express = require('express');
const app = express();
const port = process.env.PORT || 9997;

require('./api/routes').init(app);
const initMongoose = require('./mongoose');

app.listen(port, function(){
    console.log('welcome to my application!');
    console.log(port);
});
