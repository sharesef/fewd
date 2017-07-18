var paragraph = $("<p>");
paragraph.html("I am a lonely paragraph.");
paragraph.appendTo("body");

var firstListItem = $("<li>");
firstListItem.html("First Item (New)")
firstListItem.prependTo(".first")

var circle = $("<div>");
circle.addClass("circle");
circle.appendTo(".circles");
