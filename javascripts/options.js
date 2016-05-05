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

	var greenThemeCheck = document.getElementById("greenTheme");
	greenThemeCheck.addEventListener("click", greenify);

	function greenify () {
  	webpage.classList.toggle("makeGreen");
	}

	var greyThemeCheck = document.getElementById("greyTheme");
	greyThemeCheck.addEventListener("click", greyify);

	function greyify () {
  	webpage.classList.toggle("makeGrey");
	}

	var blackThemeCheck = document.getElementById("blackTheme");
	blackThemeCheck.addEventListener("click", blackify);

	function blackify () {
  	webpage.classList.toggle("makeBlack");
	}


  //RETURNS AN OBJECT WITH A METHOD ATTACHED//
  return object;  //guys, I'm not sure what this should return-AAA


//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {}); //guys, what should go here?-AAA

