console.log("Loaded bro");

$(".new-tweed-button").click(function() {
  var userInput = $(".new-tweed-text").val();

  if (userInput) {
    createTweed(userInput);
  }

  $(".new-tweed-text").val("");
});

var createTweed = function(text) {
  var tweed = $("<div>");
  var tweedText = $("<p>");
  var tweedDelete = $("<span>");

  tweed.addClass("tweed");
  tweedText.addClass("tweed-text");
  tweedDelete.addClass("delete-tweed");

  tweedText.html(text);
  tweedDelete.html("&times;");

  tweed.append(tweedText).append(tweedDelete);

  tweed.prependTo(".tweeds");
}


$(".new-tweed-text").on("input", function() {
  var userInput = $(".new-tweed-text").val();

if (userInput.length > 6) {
	var trim = userInput.substring(0, 6);

	$(".new-tweed-text").val(trim);
  }

///var trim = userInput.length.substring(0,6;
  // if ( length is greater than 6) {
  //   trim the string using "substring"
  //   set the value of the textarea
  // }
});

$(".navigation-icon").click(function() {
  var navigation = $(".navigation");

  navigation.toggleClass("navigation-enabled");
});