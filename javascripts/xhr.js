//**********//XHR//**********//
var xhr = function() {

	//CALL BACK FOR XHR REQUEST LOAD EVENT LISTENER//
	var addXhr = function () {
		var pojo = JSON.parse(this.responseText);
		for (var i = 0; i < pojo.messages.length; i++) {
			chatty.setArrayItem(pojo.messages[i]);
		};
		chatty.writeToDom(chatty.getArray());

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
		loadRequest.send();
	}();

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}();
