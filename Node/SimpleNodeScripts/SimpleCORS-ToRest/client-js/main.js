
$(document).ready(function() {
	var makeGetRequest = function(event) {
		
		console.log($.support.cors);
		
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
			dataType: "json",
			success: ajaxDoneHandler,
			error: ajaxFailHandler,
			accepts: "application/json",
			//contentType: "application/json",
			//data: JSON.stringify( {num: $("#number").val()} )
			data: {num: $("#number").val()}
		});
	};
	
	$('#getButton').click(makeGetRequest);
});