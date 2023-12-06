const ps = require("prompt-sync");
const prompt = ps();

const num = parseInt(prompt("Enter the number to print mul table: "));
        for(i = 1; i <= 10; i++)
        {
           var mul= i * num;
            console .log(`${i} * ${num} = ${mul}`);
        }