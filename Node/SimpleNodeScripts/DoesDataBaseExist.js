var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:5984',
  version: '*'
});

var analysisDBName = "random_doc_test";

client.get('/' + analysisDBName, 
    function(err, req, res, obj) {
      console.log('%j', obj);

      if(obj['error']) {
        console.log('we had an error');
      }
    });

