/******************Dark Theme and Large Text Functionality************/

var webpage = document.getElementsByTagName("body")[0];

var chatty = function(object) {

	var darkThemeCheck = document.getElementById("darkTheme");
	darkThemeCheck.addEventListener("click", darkify);

	function darkify () {
	webpage.classList.toggle("makeDark");
	}

	var largeTextCheck = document.getElementById("largeText");
	largeTextCheck.addEventListener("click", largify);

	function largify () {
  	webpage.classList.toggle("makeLarge");
	}

  //RETURNS AN OBJECT WITH A METHOD ATTACHED//
  return object;  //guys, I'm not sure what this should return-AAA

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {}); //guys, what should go here?-AAA






