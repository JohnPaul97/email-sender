console.log("starting email server...")

var net = require('net');
var emailsender = require('./sendEmail');

var server = net.createServer(function(socket) {
    socket.on('data', function(data){
        console.log("received from client "+ data);
        emailsender.sendEmail(JSON.parse(data));
        
        socket.write("can stop client");
    })
})

server.listen(10000, '0.0.0.0');
