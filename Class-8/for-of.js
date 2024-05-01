// Basic syntax of for of loop
// for (variable of iterable) {
//     statement
// }
// Array is used to store multiple values in a single variable
var girls = ["sana", "sara", "ayesha", "marry"];
var index = 1;
// for of loop is used to iterate over an iterable object (like an array or a string)
for (var _i = 0, girls_1 = girls; _i < girls_1.length; _i++) {
    var girl = girls_1[_i];
    console.log("my ".concat(index, " sister is ").concat(girl));
    index++;
}
