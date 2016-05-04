//**********//ARRAY MANAGER//**********//
	
var chatty = function(object) {

	var messages = [];

	object.writeToDom = function(array) {

		var chatBlock = document.getElementsByClassName("chatBlock");

		for (var i = 0; i < array.length; i++) {

			chatBlock[i].setAttribute("index", i)
			chatBlock[i].innerHTML = (
				`<p class="chatText">${array[(i)].user}: ${array[(i)].text}</p>`+
				`<button class="deleteButton" value="Delete">Delete</button>`
				);
		};
		chatty.addDeleteButtonEventListeners();
	};

	object.setArrayItem = function(object) {
		messages[messages.length] = object;
		chatty.writeToDom(messages);
	};

	object.getArrayItem = function(index) {
		return messages[index];
	};

	object.getArray = function() {
		return messages;
	};

	object.setArray = function(array) {
		messages = array;
		chatty.writeToDom(messages);
	};



	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});