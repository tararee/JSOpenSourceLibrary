/**
* Sending a response from your server
*/

var http = require('http');

var server = http.createServer(function(req, res) {

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, 'json content');
    res.write('{ "wizard": "mithrandir" }');
    res.end();
});

server.listen(8080);

