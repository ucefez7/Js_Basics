const ps = require("prompt-sync");
const prompt = ps();

const input = prompt("Enter the String: ");
            const splitInput = input.split("");
            const reverseInput = splitInput.reverse();
            console.log("Entered String is: " + input);
            console.log("The reversed String is: " + reverseInput.join(""));
            if (input == reverseInput.join("")) {
                console.log("Palindrome");
            } else {
                console.log("Not palindrome");
            }