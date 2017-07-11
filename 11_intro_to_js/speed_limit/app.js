var speedLimit = parseInt( prompt("What's the speed limit?") );
var userSpeed  = parseInt( prompt ("What is your speed?") );

if (userSpeed > speedLimit + 10) {
	console.log("Slow Down Dude!");

} else if(userSpeed < speedLimit - 10) {
	consolelog ("Speed Up Dude");
} else {
	console.log("Keep on Keeping on");
}
/*how to specify multiple if statements */