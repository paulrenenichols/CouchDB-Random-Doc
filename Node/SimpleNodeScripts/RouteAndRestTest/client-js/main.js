
$(document).ready(function() {
	var makeGetRequest = function(event) {
		
		var requestURL = "http://127.0.0.1:8124/data";
		
		var ajaxDoneHandler = function(data) {
			var parsedData = $.parseJson(data);
			$('#target').text(parsedData['msg']);
		};
		
		var ajaxFailHandler = function() {
			console.log("ajax GET failed");
		};
		
		$.get(requestURL).done(ajaxDoneHandler).fail(ajaxFailHandler);
	};
	
	$('#getButton').click(makeGetRequest);
});