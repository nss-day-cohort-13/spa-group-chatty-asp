//**********//XHR//**********//
	
var xhr = function() {

	//CALL BACK FOR DOG FOOD XHR REQUEST LOAD EVENT LISTENERS//
	var addXhr = function () {

		//PARSES THE XHR RESPONSE TEXT TO CREATE ARRAY OF OBJECTS//
		var pojo = JSON.parse(this.responseText);

		for (var i = 0; i < pojo.messages.length; i++) {
			chatty.setArrayItem(pojo.messages[i]);
		};

		chatty.writeToDom(chatty.getArray());
		

	};

	var addXhrEventListener = function(request) {
	
		//ADDS XHR EVENT LISTENERS FOR LOAD AND ERROR//
		request.addEventListener("load", addXhr);
		request.addEventListener("error", function() {
			console.log("error");
		});
	};

		//DOG FOOD XHR REQUEST//
	var load = function() {

		//CREATES A NEW XHR REQUEST//
		var loadRequest = new XMLHttpRequest();

		addXhrEventListener(loadRequest);

		//ROUTES AND INTIALIZES THE REQUEST//
		loadRequest.open("GET", "../json/messages.json");
		loadRequest.send();
	}();

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}();