const ps = require("prompt-sync");
const prompt = ps();

const rows = parseInt(prompt("Enter the number of rows: "));
            const cols = parseInt(prompt("Enter the number of cols: "));
            const arr1 = [];
            const arr2 = [];
            const result = [];

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

            console.log("Array one and array two ");
            console.log(arr1);
            console.log(arr2);

            for (let i = 0; i < rows; i++) {
                result.push([]);
                for (let j = 0; j < cols; j++) {
                    result[i][j] = arr1[i][j] + arr2[i][j];
                }
            }
            console.log("Array after addition ");
            console.log(result);