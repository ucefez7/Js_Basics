const ps = require("prompt-sync");
const prompt = ps();

var integerInput = prompt("Please enter an integer:");
var floatInput = prompt("Please enter a floating-point number:");
var sum = (parseInt(integerInput) || 0) + (parseFloat(floatInput) || 0);
console.log("The sum is: " + sum.toFixed(2));