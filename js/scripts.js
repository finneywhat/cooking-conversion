/* Business logic*/

var ozToCup = function(random) {
	return random / 8;
};
var cupToOz = function(random) {
	return random * 8;
};

/* UI logic */

$(document).ready(function() {
	$("form#ozToCupForm").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#ozToCup").val());
		var result = ozToCup(number1);
	  $("#outputOzToCup").text(result);
	});

	$("form#cupToOzForm").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#cupToOz").val());
		var result = cupToOz(number1);
	  $("#outputCupToOz").text(result);
	});
});
