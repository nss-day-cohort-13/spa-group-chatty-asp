//**********//DOM MANAGER//**********//
	
var chatty = function(object) {

	var messagesDiv = document.getElementById("messages");
	var enterMessage = document.getElementById("enterMessage");
	var clearBoard = document.getElementById("clearBoard");

	var clearBoardCallBack = function() {
		var chatBlock = document.getElementsByClassName("chatBlock");
		for (var i = 0; i < chatBlock.length; i++) {
			chatBlock[i].innerHTML = '';
		};
		chatty.setArray([]);
	};

	var addEnterMessageEventListener = function() {

		enterMessage.addEventListener("keypress", function(event) {
			if (
				(event.keycode === 13 || event.which === 13) &&
				(enterMessage.value !== "")
				) {
					var message =
						{
						user: "Patrick",
						text: enterMessage.value
						};

					chatty.setArrayItem(message);
				enterMessage.value = '';

			};
		});
	}();

	var addClearBoardEventListener = function() {
		
		clearBoard.addEventListener("click", clearBoardCallBack);
	}();

	object.addDeleteButtonEventListeners = function() {
		var deleteButton = document.getElementsByClassName("deleteButton");
		console.log(deleteButton);
		for (var i = 0; i < deleteButton.length; i++) {
			deleteButton[i].addEventListener("click", function(event) {
				var newArray = chatty.getArray();
				newArray.splice(event.target.parentNode.getAttribute("index"), 1);
				clearBoardCallBack();
				chatty.setArray(newArray);

			});
		};
	};
	
	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});