
$(document).ready(function() {
	var makeGetRequest = function(event) {
		
		var requestURL = "http://127.0.0.1:8125";
		
		function ajaxFailHandler(jqXHR, textStatus, errorThrown) {
			console.log("ajax GET failed: " + textStatus + " " + errorThrown);
		};
		
		function ajaxGetRequestDoneHandler(data) {
			console.log(data);
			$('#square').text(data['msg']);
		};
		
		function ajaxInitiateCORSDoneHandler(data) {
			console.log(data);
			
			$.ajax({
				type: "GET",
				url: requestURL,
				dataType: "json",
				success: ajaxGetRequestDoneHandler,
				error: ajaxFailHandler,
				accepts: "application/json",
				//contentType: "application/json",
				data: JSON.stringify( {num: $("#number").val()} )
			});	
		};
		

		
		$.ajax({
			type: "GET",
			url: requestURL,
			dataType: "json",
			success: ajaxInitiateCORSDoneHandler,
			error: ajaxFailHandler,
			accepts: "application/json",
			//contentType: "application/json",
			data: JSON.stringify( {num: $("#number").val()} )
		});
	};
	
	$('#getButton').click(makeGetRequest);
});