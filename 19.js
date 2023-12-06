const ps = require("prompt-sync");
const prompt = ps();

const amount = parseInt(prompt("Enter the amount: "));
            let tax;
            if (amount < 250000) {
                console.log(`The amount is ${amount} so not tax`);
            } else if (amount > 250000 && amount < 500000) {
                tax = (amount * 5) / 100;
                console.log(`The amount is ${amount} so tax is ${tax}`);
            } else if (amount > 500000 && amount < 1000000) {
                tax = (amount * 20) / 100;
                console.log(`The amount is ${amount} so tax is ${tax}`);
            } else if (amount > 1000000 && amount < 5000000) {
                tax = (amount * 30) / 100;
                console.log(`The amount is ${amount} so tax is ${tax}`);
            }