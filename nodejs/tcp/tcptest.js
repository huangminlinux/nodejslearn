var net = require('net')

var connection = net.createConnection(3000,'127.0.0.1');
connection.on('data',function (data) {
	console.log('data');
});