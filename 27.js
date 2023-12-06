const my_height = 300;
const max = 250;
const min = 160;

try {
    if (isNaN(my_height)) {
        throw `Not a number`;
    } else if (my_height > max) {
        throw "Huge Hight";
    } else if (my_height < min) {
        throw "Tiny Hight";
    }
} catch (error) {
    console.log(error);
}
