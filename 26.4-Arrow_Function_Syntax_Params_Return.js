// 26.4-Arrow_Function_Syntax_Params_Return.js

console.log(add(10,20));
// function declaration:
function add(num1, num2) {
    return num1 + num2;
}

console.log("--------------");

// console.log(add2(5,10)); // its given a error
// function expression:
const add2 = function(num1, num2) {
    return num1 + num2
}
console.log(add2(30,40));

console.log("--------------");

// arrow function
const add3 = (num1, num2) => num1 + num2
console.log(add3(10,20));

const multiply = (a, b, c) => a * b * c;
console.log(multiply(2, 4, 6));


const tenTimes = x => x * 10; //ekta parameter hole bracket na dileo chole
console.log(tenTimes(5));

const getPi = () => 3.1416;
console.log(getPi());

const isEven = num => num % 2 === 0;
console.log(isEven(50));

const dividr = (p, q) => p / q;
console.log(dividr(10, 20));


// multi line arrow function e automatic return korbena
const domath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(domath(5, 2));


// document.getElementById("btn").addEventListener("click", () => {})
// document.getElementById("btn").addEventListener("click", (event) => {})
