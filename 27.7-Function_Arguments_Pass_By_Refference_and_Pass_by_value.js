// 27.7-Function_Arguments_Pass_By_Refference_and_Pass_by_value.js

// pass by value
function multiply(a, b) {
    a = a - 5;
    b = b - 10;
    console.log(a, b);
    return a * b;
}
let x = 10;
let y = 20;
console.log("before calling", x, y);
const result = multiply(x, y);
console.log(result);
console.log("after calling", x, y);

console.log("------------");

// pass by refference
function firstSum(arr1, arr2) {
    arr1[0] = 100;
    arr2[0] = 200;
    const first = arr1[0];
    const second = arr2[0];
    return first + second;
}
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log("before the function call", num1, num2);
const output = firstSum(num1, num2);
console.log("after the function call", num1, num2);

console.log("------------");

// object to array convert
function add(num3, num4) {
    console.log("arguments", arguments);
    const args = [...arguments]
    console.log("args", args);
    return num3 + num4
}
add(2, 5, 8, 10);