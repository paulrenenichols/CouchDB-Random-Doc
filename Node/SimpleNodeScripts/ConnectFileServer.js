var connect = require('connect');
var http = require('http');

http.createServer(connect()
   .use(connect.favicon())
   .use(connect.logger())
   .use(connect.static( __dirname ))
   ).listen(8124);
