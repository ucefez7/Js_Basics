const ps = require("prompt-sync");
const prompt = ps();

const written = parseInt(prompt("Enter the written score: "));
            const lab = parseInt(prompt("Enter the lab score: "));
            const assignment = parseInt(prompt("Enter the assignment score: "));
            const grade = (written * 70) / 100 + (lab * 20) / 100 + (assignment * 10) / 100;
            console.log(grade);