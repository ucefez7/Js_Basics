const ps = require("prompt-sync");
const prompt = ps();

const size = parseInt(prompt("Enter the size of the array: "));
        let arr = [];
        for( let i = 0; i < size; i++)
        {
            arr.push(parseInt(prompt("Enter the elements in the array: ")));
        }
        for( let i = 0; i < size; i++)
        {
           for(let j = 0; j < size; j++)
           {
            if(arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
           }
        }
        console.log(`sorted array is ${arr}`);