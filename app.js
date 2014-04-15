var connect = require('connect');

var args = {};

process.argv.forEach(function (val, index, array) {
	if ( val.indexOf('=') !== -1 ) {
		args[val.split('=')[0]] = val.split('=')[1];
	}
});

connect.createServer(connect.static(__dirname)).listen( args.port || 80 );
console.log( 'server running on port ' + args.port || 80 );