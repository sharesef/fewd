// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
// 	<p>Wrap things in ca$h</p>
// 	<span class="label">Mark as Done</span>
// </li>

var item = $("<li>");
item.addClass("item todo");
item.appendTo(".item-list");

var newTodo = $("<p>");
newTodo.html("Wrap things in ca$h");
newTodo.appendTo(".item todo");

var doneItem = $("<span>");
doneItem.addClass("label");
doneItem.html("Mark as Done");
item.appendTo("newTodo");



// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>


var addNewItem = function(item) {

};

// Move all items from "Todo" to "Done"

var completeAll = function() {

};

// Remove all items from "Done"

var clearAll = function() {

};

// Render Starting items

var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var renderAllItems = function(itemsToRender) {

};

// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {};

// Mark a single item as Done

var markAsDone = function(itemNumber) {};