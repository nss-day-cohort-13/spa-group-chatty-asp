//**********//ARRAY MANAGER//**********//	
var chatty = function(object) {

	//DECLARES DOM ELEMENT VARIABLE//
	var output = document.getElementById("messages");

	//DECLARES MAIN ARRAY FOR CHAT BLOCK OBJECTS//
	var messages = [];

	//METHOD FORMATS AND WRITES GIVEN ARRAY TO THE MESSAGES DIV//
	object.writeToDom = function(array, elem) {
		var content = '';
		for (var i = 0; i < array.length; i++) {
			content += (
				`<li class="chatBlock" index="${i}">`+
				`<p class="chatText">${array[(i)].user}: ${array[(i)].text}</p>`+
				`<button class="deleteButton" value="Delete">Delete</button>`+
				`</li>`
				);
		};
		elem.innerHTML = content;
		chatty.addDeleteButtonEventListeners();
	};

	//METHOD ADDS AN OBJECT TO THE END OF THE MESSAGES ARRAY//
	object.setArrayItem = function(object) {

		//IF THERE ARE MORE THAN 20 MESSAGES ON THE SCREEN, RESET THE MESSAGES BACK TO 0
		if(messages.length > 20) {
			console.log("messages Before = ", messages)
			messages = [];
			console.log("messages After = ", messages)
		}

		messages[messages.length] = object;
		chatty.writeToDom(messages, output);
	};

	//METHOD RETURNS MESSAGES ARRAY//
	object.getArray = function() {
		return messages;
	};

	//METHOD SETS MESSAGES ARRAY//
	object.setArray = function(array) {
		messages = array;
		chatty.writeToDom(messages, output);
	};

	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});
