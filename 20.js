const ps = require("prompt-sync");
const prompt = ps();

const rows = parseInt(prompt("Enter the number of rows: "));
let num = 1;

for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let k = 1; k <= i; k++) {
        row += num.toString().padStart(3, " ");
        num++;
    }

    console.log(row);
}