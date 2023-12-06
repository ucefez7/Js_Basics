const ps = require("prompt-sync");
const prompt = ps();

const num1 = parseInt(prompt("Enter the fisrt numer: "));
const num2 = parseInt(prompt("Enter the second number: "));
const op = prompt("1.ADD\n2.SUB\n3.MUL\n4.DIV\nEnter your choice: ");
const add = () => {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

const sub = () => {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
};

const mul = () => {
    console.log(`${num1} X ${num2} = ${num1 * num2}`);
};

const div = () => {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
};

if (op == 1) {
    add();
} else if (op == 2) {
    sub();
} else if (op == 3) {
    mul();
} else if (op == 4) {
    div();
} else {
    console.log("Invalid Input");
}