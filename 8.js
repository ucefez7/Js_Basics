const ps = require("prompt-sync");
const prompt = ps();

const limit = parseInt(prompt("Enter the limit: "));
        var sum = 0;
        for(i = 1; i <= limit; i++)
        {
            if(i % 2 != 0)
            {
                var sum = sum + i;
            }
        }
        console.log(sum);