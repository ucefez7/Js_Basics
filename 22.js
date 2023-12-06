const ps = require("prompt-sync");
const prompt = ps();

const rows = parseInt(prompt("Enter the number of rows: "));
            const cols = parseInt(prompt("Enter the number of cols: "));
            const arr1 = [];
            const arr2 = [];
            const result = [];

            function readArray() {
                for (let i = 0; i < rows; i++) {
                    arr1.push([]);
                    for (let j = 0; j < cols; j++) {
                        arr1[i][j] = parseInt(prompt("Enter the elements of arr1: "));
                    }
                }

                for (let i = 0; i < rows; i++) {
                    arr2.push([]);
                    for (let j = 0; j < cols; j++) {
                        arr2[i][j] = parseInt(prompt("Enter the elements of arr2: "));
                    }
                }
            }

            function addArray() {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        result.push(arr1[i][j] + arr2[i][j]);
                    }
                }
            }

            function displayArray() {
                console.log(`Array 1: ${arr1}`);
                console.log(`Array 2: ${arr2}`);
                console.log(`Result Array: ${result}`);
            }

            readArray();
            addArray();
            displayArray();