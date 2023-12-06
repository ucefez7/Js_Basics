const ps = require("prompt-sync");
const prompt = ps();

class Area {
    constructor() {}

    circle() {}

    square() {}

    reactangle() {}

    triangle() {}
}
class MyClass extends Area {
    circle() {
        const r = parseInt(prompt("Enter the radius: "));
        console.log(`The area of circle is ${3.14 * r * r}`);
    }

    square() {
        const side = parseInt(prompt("Enter the side: "));
        console.log(`The are of square is: ${side * side}`);
    }

    reactangle() {
        const length = parseInt(prompt("Enter the length: "));
        const width = parseInt(prompt("Enter the width: "));
        console.log(`The area of rectangle is ${length * width}`);
    }

    triangle() {
        const base = parseInt(prompt("Enter the width: "));
        const height = parseInt(prompt("Enter the hight: "));
        console.log(`The are of triangle is ${(base * height) / 2}`);
    }
}

let ch = parseInt(prompt("1. Circle\n2. Square\n3. Rectangle\n4. Triangle\n\nEnter the selection: "));
const obj = new MyClass();
switch (ch) {
    case 1:
        obj.circle();
        break;
    case 2:
        obj.square();
        break;
    case 3:
        obj.reactangle;
        break;
    case 4:
        obj.triangle;
        break;
    default:
        console.log("Invalid Input");
}
