const { Server } = require('http');
var net = require('net');
var configs = require('../configs.json');

var server = net.createServer();

server.on(configs.close, function(){
    console.log("user server closed");
})

server.on(configs.connection, function(socket){
    // socket.setEncoding(configs.encoding);

    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Server is listening at port' + port);
    console.log('Server ip :' + ipaddr);
    console.log('Server is IP4/IP6 : ' + family);
  
    var lport = socket.localPort;
    var laddr = socket.localAddress;
    console.log('Server is listening at LOCAL port' + lport);
    console.log('Server LOCAL ip :' + laddr);

    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Server is listening at port' + port);
    console.log('Server ip :' + ipaddr);
    console.log('Server is IP4/IP6 : ' + family);
  
    var lport = socket.localPort;
    var laddr = socket.localAddress;
    console.log('Server is listening at LOCAL port' + lport);
    console.log('Server LOCAL ip :' + laddr);

    // socket.write({
    //     adress1: "Romania, Turda",
    //     adress2: "Romania, Cluj"
    // });
    // socket.write("Romania, Cluj-Napoca");


    socket.on(configs.data, function(data){
        console.log(data.dist);
    })
})

server.on(configs.error, function(error){
    console.log("There was an error, please try again");
    console.log(error);
})

server.on(configs.listening, function(){
    console.log("this server is listening");
});

server.listen(configs.tcp_port);

// socket.setEncoding('utf8'); //not sure about this
