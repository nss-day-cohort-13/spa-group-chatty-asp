//**********//XHR//**********//
var xhr = function() {

	//CALL BACK FOR XHR REQUEST LOAD EVENT LISTENER//
	var addXhr = function () {
		var pojo = JSON.parse(this.responseText);
		for (var i = 0; i < pojo.messages.length; i++) {
			pojo.messages[i].time = chatty.getTimeStamp();
			chatty.setArrayItem(pojo.messages[i]);
		};
	};

	//ADDS EVENT LISTENERS FOR XHR LOAD//
	var addXhrEventListener = function(request) {
		request.addEventListener("load", addXhr);
		request.addEventListener("error", function() {
			console.log("error");
		});
	};

	//INITIALIZE XHR REQUEST//
	var load = function() {
		var loadRequest = new XMLHttpRequest();
		addXhrEventListener(loadRequest);
		loadRequest.open("GET", "../json/messages.json");
		// loadRequest.open("GET", "../json/messages-01.json");
		loadRequest.send();
	}();
}();
