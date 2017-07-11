var price = parseInt( prompt("How much does one apple cost?") );
var inventory = parseInt( prompt("How many are in inventory?") );
var money = parseInt( prompt("How much money do you have?") );
var items = parseInt( prompt("How many do you wish to buy?") );

if (money > price && items <= inventory) {
	console.log ("Purchase complete");

} else if (money < price && items >= inventory) { 
	console.log ("Not enough money");	

} else if (money > price && inventory < items) {
	console.log ("Not enough Inventory");
}

/* What is causing headline to disappear*/