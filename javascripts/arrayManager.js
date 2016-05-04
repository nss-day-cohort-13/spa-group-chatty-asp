//**********//ARRAY MANAGER//**********//	
var chatty = function(object) {

	//DECLARES MAIN ARRAY FOR CHAT BLOCK OBJECTS//
	var messages = [];

	//METHOD FORMATS AND WRITES GIVEN ARRAY TO THE MESSAGES DIV//
	object.writeToDom = function(array,elem) {

		var messages = document.getElementById("messages");
		var content = '';

		for (var i = 0; i < array.length; i++) {
			content += (
				`<li class="chatBlock" index="${i}">`+
				`<p class="chatText">${array[(i)].user}: ${array[(i)].text}</p>`+
				`<button class="deleteButton" value="Delete">Delete</button>`+
				`</li>`
				);
		};
		messages.innerHTML = content;
		chatty.addDeleteButtonEventListeners();
	};

	//METHOD ADDS AN OBJECT TO THE END OF THE MESSAGES ARRAY//
	object.setArrayItem = function(object) {
		messages[messages.length] = object;
		chatty.writeToDom(messages);
	};

	//METHOD RETURNS MESSAGES ARRAY//
	object.getArray = function() {
		return messages;
	};

	//METHOD SETS MESSAGES ARRAY//
	object.setArray = function(array) {
		messages = array;
		chatty.writeToDom(messages);
	};

	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});
