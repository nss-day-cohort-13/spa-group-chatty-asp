"use strict";

var chatty = (function(object) {

	object.getTimeStamp = function(event) {

		var date = new Date();
		var minutes = date.getMinutes();
		var hour = date.getHours();
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		var timeStampValue = day + '/' + month + '/' + year+ '/' + " " + hour + ":" + minutes;
		return timeStampValue;
	};

  return object;
}(chatty || {}));