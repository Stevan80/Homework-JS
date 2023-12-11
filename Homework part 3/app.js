console.log ("Script is a live");

function calculateAtm(){

let userInput = prompt("Welcome please enter an amount");

let accountBalance = 20000;

let userAmount=Number (userInput);

let invalidAmount=Number.isNaN(userAmount)

let remainingBalance=accountBalance-userAmount;

if (userAmount > accountBalance)
console.log("Not enough money");
else if (userAmount<=accountBalance || remainingBalance)
console.log("Please take your money, " + " you remaining balance is " + remainingBalance);
else if (invalidAmount)
console.log(" Error, please enter valid amount");
else console.log ("Please, contact our help center");

}


calculateAtm();

