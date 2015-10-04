var http = require('http');

var linkOptions = 
{
	hostname: 'board.okayplayer.com',
  	port: 80,
  	path: '/okp.php',
  	method: 'GET',
}

var req = http.request(linkOptions, function(result) {
  result.setEncoding('utf8');
  result.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.end();