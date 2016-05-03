//**********//XHR//**********//

var chatty = function(object) {

	var darkThemeCheck = $("#darkTheme");
	darkThemeCheck.click(darkify);

	function darkify () {
 	 webpage.toggleClass("makeDark"); //"makeDark" is coming from the CSS
  }

  //RETURNS AN OBJECT WITH A METHOD ATTACHED//
  return object;  //guys, I'm not sure what this should return-AAA


//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {}); //guys, what should go here?-AAA



