const ps = require("prompt-sync");
const prompt = ps();

const day = parseInt(prompt("Enter the day number :"));
switch (day){
    case 1 :
         console.log(`Entered number is ${day} \n Sunday`);
    break;
    case 2 :
        console.log(`Entered number is ${day} \n Monday`);
    break;
    case 3:
        console.log(`Entered number is ${day} \n tuesday`);
    break;
    case 4:
        console.log(`Entered number is ${day} \n Wednesday`);
    break;
    case 5:
        console.log(`Entered number is ${day} \n Thursday`);
    break;
    case 6:
        console.log(`Entered number is ${day} \n Friday`);
    break;
    case 7:
        console.log(`Entered number is ${day} \n Saturday`);
    break;
    default: 
    console.log(`Invalid`);
}