const ps = require("prompt-sync");
const prompt = ps();

var size = parseInt(prompt("Enter the size: "));
        let arr1 = [];
        let arr2= [];
        for(let i = 0; i < size; i++)
        {
            arr1.push(parseInt(prompt("Enter the values of first array 1: ")));
        }
        for(let i = 0; i < size; i++)
        {
            arr2.push(parseInt(prompt("Enter the values of first array 2: ")));
        }
        console.log(`Array 1 :${arr1}`);
        console.log(`Array 2 :${arr2}`);

        for(let i = 0; i < size; i++){
            let temp = arr1[i];
            arr1[i] = arr2[i];
            arr2[i] = temp;
        }

        console.log(`Array 1 :${arr1}`);
        console.log(`Array 2 :${arr2}`);
