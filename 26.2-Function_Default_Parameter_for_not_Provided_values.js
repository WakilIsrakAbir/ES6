// 26.2-Function_Default_Parameter_for_not_Provided_values.js

function add(num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

add(10, 20);
add(10); //output is NaN here

console.log("----------------");

function add2(num1, num2 = 0) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

add2(10, 40);

console.log("----------------");

function fullName(first, last = " ") {
    const name = first + " " + last;
    console.log(name);
}

fullName("Wakil", "Israk");
fullName("Wakil");

console.log("----------------");

function multiply(n1, n2 = 1) {
    const result = n1 * n2;
    console.log(result);
}
multiply(5, 10);
multiply(5);


/**
 * string --> ""
 * number --> 0 [for add]
 * number --> 1 [multiply]
 * arr --> []
 * object --> {}
 * boolian --> true or false depends on situation
*/