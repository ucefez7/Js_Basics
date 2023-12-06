const ps = require("prompt-sync");
const prompt = ps();

const size = parseInt(prompt("Enter the size of the array:"));
        let arr = [];
        let count = 0;
        for( let i = 0; i < size; i++)
        {
            arr.push(parseInt(prompt("Enter the elements in the array")));
        }
        for(let i = 0; i < size; i++)
        {
            if(arr[i] % 2 == 0)
            {
                count++;
            }
        }
        console.log(`No .of even number is ${count}`);