const arr = [2, 3, 4, 5, 6];

function sumOdd() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      sum = sum + arr[i];
    }
}
return sum;
}

sumOdd();
console.log(sumOdd());
