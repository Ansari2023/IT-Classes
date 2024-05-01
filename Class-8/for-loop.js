// basic syntax of for loop
// for (initialization; condition; increment/decrement) {
//     statement
// }
// Initialization means where the loop starts
// Condition is used to check if the loop should continue
// Increment/decrement is used to update the value of i
// simple for loop that will print 0 to 100 numbers
for (var i = 0; i < 100; i++) {
    console.log(i);
}
console.log("-----------------");
// simple for loop that will print I will not late in class anymore 100 times
for (var i = 0; i < 100; i++) {
    console.log("I will not late in class anymore");
}
console.log("-----------------");
// for loop that will print table of 5
for (var i = 1; i <= 10; i++) {
    var tableNumber = 5;
    console.log(tableNumber, "x", i, "=", tableNumber * i); // 5x1=5, ... 5x10=50
}
// Array is used to store multiple values in a single variable
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var dataLength = cars.length;
// Using for loop to iterate over an array and print the value of each element
for (var i = 0; i < dataLength; i++) {
    console.log("dataLength", dataLength);
    console.log("My car is", cars[i]);
}
console.log(dataLength);
