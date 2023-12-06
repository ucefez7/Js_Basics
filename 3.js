const ps = require("prompt-sync");
const prompt = ps();

const P = parseInt(prompt("Enter the principle amount:"));
        const R = parseFloat(prompt("Enter the interest rate:"));
        const n = parseFloat(prompt("Enter the number of years"));
        const SI = parseFloat((P * R * n)/100);
        console.log(`P = ${P} \n R =${R} \n n = ${n} \n SI = ${SI}`);