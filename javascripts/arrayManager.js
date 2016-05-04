//**********//ARRAY MANAGER//**********//
	
var chatty = function(object) {

	var messages = [];

	object.setArrayItem = function(object) {
		messages[messages.length] = object;
	};

	object.getArrayItem = function(index) {
		return messages[index];
	};

	object.getArray = function() {
		return messages;
	};

	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});