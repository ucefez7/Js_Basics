const ps = require("prompt-sync");
const prompt = ps();

const arr = [];
            const result = [];
            const size = parseInt(prompt("Enter the limit of the array: "));
            for (let i = 0; i < size; i++) {
                arr.push(parseInt(prompt("Enter the elements of the array: ")));
            }

            for (let i = 0; i < size - 1; i++) {
                result.push(arr[i] * arr[i + 1]);
            }

            console.log(`Origian array: ${arr}`);
            console.log(`The result array: ${result}`);