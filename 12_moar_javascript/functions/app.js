var expressGratitude = function(name) {
 	console.log("You have saved our lives," + name);
 	console.log("We are eternally grateful");
};

var join = function(firstWord, secondWord) {
	var joinedWord = firstWord + " " + secondWord;

	return joinedWord;

};

var greeting = join("hello", "there");

console.log(greeting);