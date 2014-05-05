/// <reference path="~/Scripts/jquery-1.9.1.js" />
/// <reference path="~/Scripts/plugins/jquery.placeholder.js" />
/// <reference path="~/Scripts/modernizr-2.6.2.js" />


// define the top-level namespace object.
dm = {};

// define the namespace object for shared features.
dm.core = {};
dm.core.loggingEnabled = true;
dm.core.loggingToViewEnabled = false;

$(document).ready(function () {
});

dm.core.logToHomePage = function (message) {
	$("#console").append("<p>" + message + "</p>");
};

dm.core.logMessage = function (msg) {
	if (dm.core.loggingEnabled && dm.core.loggingToViewEnabled) {
		var console$ = $("#messageConsole");
		if (console$.length < 1) {
			console$ = $("<div id='messageConsole'><p>session log: </p></div>");
			$("body").append(console$);
			console$ = $("#messageConsole");
		}

		console$.append("<p style='color: gray; font-weight: bold;'>" + msg + "</p>");
	}

	if (dm.core.loggingEnabled && console) {
		console.log(msg);
	}
};

