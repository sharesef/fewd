console.log("Loaded bro");

var checkingBalance = 0;
var savingsBalance = 0;


var depositChecking = function(amount) {
  checkingBalance = checkingBalance + amount;
  showChecking();
};

var withdrawChecking = function(amount) {
  if(checkingBalance >= amount) {
    checkingBalance = checkingBalance - amount;
  }

  showChecking();
};

var depositSavings = function(amount) {
  savingsBalance = savingsBalance + amount;
  showSavings();
};

var withdrawSavings = function(amount) {
  if(savingsBalance >= amount) {
    savingsBalance = savingsBalance - amount;
  }

  showSavings();
};

var showChecking = function() {
  $("#checking .balance h1").text(checkingBalance);


};

var showSavings = function() {
  $("#savings .balance h1").text(savingsBalance);
};

showChecking();
showSavings();

// ================ EVENTS ================== //

// When I click the Checking Deposit button...

$("#checking .deposit").click(function() {
  var depositAmount = parseInt($("#checking .amount").val());

  depositChecking(depositAmount);

  $("#checking .amount").val("");
});

// When I click the Checking Withdraw button...

// When I click the Savings Deposit button...

// When I click the Savings Withdraw button...