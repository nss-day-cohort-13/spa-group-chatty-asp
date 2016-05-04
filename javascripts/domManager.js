//**********//DOM MANAGER//**********//
	
var chatty = function(object) {

	var messagesDiv = document.getElementById("messages");
	var enterMessage = document.getElementById("enterMessage");



	object.writeToDom = function(array) {
		var content = '';
		for (var i = 0; i < array.length; i++) {
			content += (
				`<li class="chatBlock">` +
				`<p class="chatText">${array[i].user}: ${array[i].text}</p>`+
				`<button class="deleteButton" value="Delete">Delete</button>`+
				`</li>`
				);
		};

		messagesDiv.innerHTML = content;

	};

	var addEnterMessageEventListener = function() {

		enterMessage.addEventListener("keypress", function() {
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
					chatty.writeToDom(chatty.getArray());
					console.log(chatty.getArray());
			};
		});
	}();
	
	//RETURNS AN OBJECT WITH A METHOD ATTACHED//	
	return object;	

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {});