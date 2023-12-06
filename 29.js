function myFilter(myArr, callback) {
    return console.log(callback(myArr));
}

function arrSumEvenOrOdd(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    if (sum % 2 == 0) {
        return true
    } else {
        return false
    }
}

let arr = [1, 2, 3, 4, 6];
console.log("array is ", arr)
myFilter(arr, arrSumEvenOrOdd);