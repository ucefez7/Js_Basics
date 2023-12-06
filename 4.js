const ps = require("prompt-sync");
const prompt = ps();

const mark = parseFloat(prompt("Enter the Mark:"));
        if(mark < 50)
        {
            console.log(`The mark is :${mark} \n failed`);
        }
        else
        {
            console.log(`The mark is :${mark} \n passed`);
        }