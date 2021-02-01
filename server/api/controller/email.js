const { Socket } = require('dgram');
var net = require('net');

emailTcp = (req, res, next) => {
    var client = new net.Socket();
    client.connect(10000, '127.0.0.1', function() {
        client.write(JSON.stringify(req.body));
    });
    
    client.on('data', function(data) {
        console.log('Received: ' + data);
        client.read();
        client.destroy(); // kill client after server's response
    });
    
    client.on('close', function() {
        console.log('Connection closed');
    });
}

module.exports = {sendEmail: emailTcp}