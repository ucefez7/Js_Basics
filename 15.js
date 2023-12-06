const ps = require("prompt-sync");
const prompt = ps();


function getArray(){
    let n = parseInt(prompt("Enter the size of the array: "));
    let array=[];
    for (let i = 0; i < n; i++) {
        let element=parseInt(prompt(`Enter the number for pos ${i+1}:`));
        array.push(element);
    }
    return array;
}
function displayArray(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
function main(){
    let Myarray=getArray();
    Myarray=displayArray(Myarray);
}
main();