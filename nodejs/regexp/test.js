var fs = require('fs');
fs.open('./data','r',function(err, fd){
	console.log(fd);

});


var arguments = process.argv.splice(2);
console.log(arguments);
var string = 'huangmin fuzai maoguo';
string = string.replace(/huangmin/,"\t\r");
console.log('df'+string);