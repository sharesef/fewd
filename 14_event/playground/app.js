console.log("loaded, bro");

$(".potato-generator").click( function() {
var potatolist = $(".potatoes");

var newPotato = $("<li>")
newPotato.html("π");

newPotato.appendTo(potatolist);

});

$(".disappear").click(function() {
	$(this).remove();

});

$(".alert-button").click(function() {
	var userInput = $(".alert-input").val();
	alert(userInput)

});

$(".alert-form").submit(function(event) {
	event.preventDefault();

	var userInput = $(".alert-form-input").val();
	alert(userInput);

});

$("#change-input").keypress(function() {
	alert("STOP!");
});

$(".pokemon").click(function() {
  var pokemon = $(this);

  var pokemonName = pokemon.html();

  console.log( pokemonName );
});


$(".capital-button").click(function() {
  var userInput = $("#capital-input").val();

  var capitalLetters = userInput.toUpperCase();

  console.log( capitalLetters );
});

$(".list-button").click(function() {
  var userInput = $("#capital-input").val();

  var capitalLetters = userInput.toUpperCase();
  
  console.log( capitalLetters );
});