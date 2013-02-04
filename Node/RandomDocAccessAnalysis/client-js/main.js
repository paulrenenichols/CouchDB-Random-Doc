
$(document).ready(function() {
	var makeGetRequest = function(event) {
		
		var requestURL = "http://127.0.0.1:8125";
		
		var ajaxDoneHandler = function(data) {
			console.log(data);
			$('#square').text(data['msg']);
		};
		
		var ajaxFailHandler = function(jqXHR, textStatus, errorThrown) {
			console.log("ajax GET failed: " + textStatus + " " + errorThrown);
		};
		
		$.ajax({
			type: "GET",
			url: requestURL,
			dataType: "jsonp",
			success: ajaxDoneHandler,
			error: ajaxFailHandler,
			accepts: "application/javascript",
			data: {num: $("#number").val()}
		});
	};
	
	$('#getButton').click(makeGetRequest);
});