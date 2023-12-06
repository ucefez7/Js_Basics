const ps = require("prompt-sync");
const prompt = ps();

const mark = parseFloat(prompt("Enter the mark:"));
if( mark  >= 90 && mark <= 100 )
{
    console.log(`Your mark is ${mark} \n The grade you got is A`);
}else if(mark >= 80 && mark <= 89)
{
    console.log(`Your mark is ${mark} \n The grade you got is B`);
}else if(mark >= 70 && mark <= 79)
{
    console.log(`Your mark is ${mark} \n The grade you got is C`);
}else if(mark >= 60 && mark <= 69)
{
    console.log(`Your mark is ${mark} \n The grade you got is D`);
}else if(mark >= 50 && mark <= 59)
{
    console.log(`Your mark is ${mark} \n The grade you got is E`);
}else if(mark < 50)
{
    console.log(`Your mark is ${mark} \n You Failed`);
}else{
    console.log("Invalid");
}