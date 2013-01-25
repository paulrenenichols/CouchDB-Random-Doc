var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:5984',
  version: '*'
});

var analysisDBName = "random_doc_test";

var testAndCreateDBCallBack = function(err, req, res, obj) {
    console.log("testAndCreateDBCallBack");
	console.log('%j', obj);

    if (obj['error']) {
      console.log('we had an error');
      if (obj['reason']) {
        console.log('reason: ' + obj['reason']);
        if (obj['reason'] == "no_db_file") {
        	createDB();
        }
      }
    }
    
    console.log("");
    console.log("");
};

var createDB = function() {
	console.log("createDB");
	
	var createDBCallBack = function(err, req, res, obj) {
		console.log("createDBCallBack");
		console.log('%j', obj);

	    if (obj['error']) {
	      console.log('we had an error');
	      if (obj['reason']) {
	        console.log('reason: ' + obj['reason']);
	      }
	    }
	    else {
	    	console.log("database created");
	    }
	    
	    console.log("");
	    console.log("");
	};
	
	client.put('/' + analysisDBName, {}, createDBCallBack);

};

client.get('/' + analysisDBName, testAndCreateDBCallBack);

