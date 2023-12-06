const ps = require("prompt-sync");
const prompt = ps();

const num = parseInt(prompt("Enter the number: "));

            const result = () => {
                if (num == 0 || num == 1) {
                    return `${num} is Not a prime number`;
                }
                for (let i = 2; i <= num / 2; i++) {
                    if (num % i == 0) {
                        return `${num} is Not a prime number`;
                    }
                }
                return `${num} is a prime number`;
            };

            console.log(result());