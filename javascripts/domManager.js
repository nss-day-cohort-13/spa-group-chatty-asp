//**********//DOM MANAGER//**********//
var chatty = function(object) {

	//DECLARES DOM ELEMENT VARIABLES//
	var messagesDiv = document.getElementById("messages");
	var enterMessage = document.getElementById("enterMessage");
	var clearBoard = document.getElementById("clearBoard");

	//CALL FUNCTION FOR ENTER MESSAGE EVENT LISTENER//
	var enterMessageCallback = function(event) {
		var userRadio = document.getElementsByClassName("userRadio");
		if (event.which === 13 && enterMessage.value !== "") {
			for (var i = 0; i < userRadio.length; i++) {
				if(userRadio[i].checked === true) {
					var user = userRadio[i].value;
				};
			};
			var message = {user: user, text: enterMessage.value};
			chatty.setArrayItem(message);
			enterMessage.value = '';
		};
	};

	//CALL FUNCTION FOR CLEAR BOARD EVENT LISTENER//
	var clearBoardCallback = function() {
		var chatBlock = document.getElementsByClassName("chatBlock");
		for (var i = 0; i < chatBlock.length; i++) {
			chatBlock[i].innerHTML = '';
		};
		chatty.setArray([]);
	};

	//CALLBACK FOR DELETE BUTTON EVENT LISTENERS//
	var deleteButtonCallback = function(event) {
		var newArray = chatty.getArray();
		newArray.splice(event.target.parentNode.getAttribute("index"), 1);
		clearBoardCallback();
		chatty.setArray(newArray);
	};

	//ADDS EVENT LISTENER FOR ENTER MESSAGE INPUT//
	var addEnterMessageEventListener = function() {
		enterMessage.addEventListener("keypress", enterMessageCallback);
	}();

	//ADDS EVENT LISTENER FOR CLEAR BOARD BUTTON//
	var addClearBoardEventListener = function() {
		clearBoard.addEventListener("click", clearBoardCallback);
	}();

	//METHOD ADDS EVENT LISTENERS FOR DELETE BUTTONS//
	object.addDeleteButtonEventListeners = function() {
		var deleteButton = document.getElementsByClassName("deleteButton");
		for (var i = 0; i < deleteButton.length; i++) {
			deleteButton[i].addEventListener("click", deleteButtonCallback);
		};
	};
	
	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});
