const ps = require("prompt-sync");
const prompt = ps();

const num = parseInt(prompt("Enter a number of rows:"));
var string ="";
for(var i = 1; i <= num; i++)
{
    for(var j = 1; j <= i; j++)
    {
        string += j;
    }
    string += "\n";
}
console.log(string);