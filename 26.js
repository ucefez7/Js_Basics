const myString = "1234";
let reversedString;

try {
    console.log(myString.split("").reverse().join(""));
} catch (error) {
    console.log(error);
} finally {
    console.log(typeof myString);
}
