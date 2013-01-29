var restify = require('restify');
var connect = require('connect');
var http = require('http');
var crossroads = require('crossroads');

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:5984',
  version: '*'
});

var analysisDBName = "random_doc_test";

client.get('/' + analysisDBName, 
    function(err, req, res, obj) {
      console.log('%j', obj);

      if (obj['error']) {
        console.log('we had an error');
        if (obj['reason']) {
          console.log('reason: ' + obj['reason']);
        }
      }
    });


http.createServer(connect()
   .use(connect.favicon())
   .use(connect.logger())
   .use(connect.static( __dirname ))
   ).listen(8124);
