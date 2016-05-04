//**********//XHR//**********//

var webpage = $("#everything");

var chatty = function(object) {

	var darkThemeCheck = $("#darkTheme");
	darkThemeCheck.click(darkify);

	function darkify () {
 	 webpage.toggleClass("makeDark");
  }

	var largeTextCheck = $("#largeText");
	largeTextCheck.click(largify);

	function largify () {
  	webpage.toggleClass("makeLarge");
	}

  //RETURNS AN OBJECT WITH A METHOD ATTACHED//
  return object;  //guys, I'm not sure what this should return-AAA

//INVOKES FUNCTION WITH EMPTY OBJECT IF LIST MUSIC HAS NOT YET INITIALIZED//
}(chatty || {}); //guys, what should go here?-AAA

 //THIS IS THE CSS FOR LARGE TEXT THINGIE
.makeLarge {
	font-size: 2em;
}

//CSS FOR DARK THEME

.makeDark a {
	color: white;
}

.makeDark {
	background-color: #3B3C3B;
	color: #EE1433;
	border: 1px solid white;
}


//THIS IS THE TIMESTAMP STUFF FOR THE JS
var timeStamp = Math.floor(Date.now() / 1000);
var dt = new Date();
var utcDate = dt.toUTCString();
console.log(utcDate);

var date = new Date;
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hour = date.getHours();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

var dayOfWeek = date.getDay();
var milliSeconds = date.getMilliseconds();

var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

var delineatorHour;
if (hour < 12) {
  delineatorHour = "a.m.";
} else {
  hour = hour - 12;
  delineatorHour = "p.m.";
}


var displayCurrentDay = nameOfToday + " " + hour + ":" + minutes + " " + delineatorHour;

console.log(displayCurrentDay);


