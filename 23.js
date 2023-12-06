const ps = require("prompt-sync");
const prompt = ps();

const size = parseInt(prompt("Enter the size of the array: "));
            const arr = [];

            class Array {
                constructor(size) {
                    this.size = size;
                }

                getArray(arr) {
                    for (let i = 0; i < size; i++) {
                        arr.push([]);
                        for (let j = 0; j < size; j++) {
                            arr[i][j] = parseInt(prompt("Enter the elements of arr1: "));
                        }
                    }
                }

                displayArray(arr) {
                    console.log(arr);
                }
            }

            let array = new Array(size);
            array.getArray(arr);
            array.displayArray(arr);