console.log("Loaded bro");


var currentBackground = $("body");
var userInput = $("input #city-type").val();
var nycBackground = ["New York", "New York City", "NYC"];
var laBackground = ["Los Angeles", "LA", "LAX"];
var txBackground = ["Austin", "ATX"];
var auBackground = ["SYD", "syndey"];


$("#submit-btn").click(function(event) {
	event.preventDefault();

	if (userInput == nycBackground) {
	$("body").css("background:","url('/images/NYC.jpg'>')");
	} else if(userInput == laBackground) {
	currentBackground.css('background-image:', 'url("/images/la.jpg")');
	} else if(userInput == txBackground) {
	currentBackground.css('background-image:', 'url("/images/austin.jpg")');
	} else if(userInput == auBackground) {
	currentBackground.css('background-image:', 'url("/images/syndey.jpg")');
	} else if (userInput != nycBackground, laBackground, txBackground, auBackground) { 
	$("body").css("background:","red");
	}});
//;_;

