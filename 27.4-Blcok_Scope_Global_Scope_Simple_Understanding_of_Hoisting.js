// 27.4-Blcok_Scope_Global_Scope_Simple_Understanding_of_Hoisting.js

// konokisu function er bihire declare koreo function er vitor e use kora jai.
// but function er vitor e kisu declare korle function er bahire call kora jai na

let pi = 3.14; //global scope
// add(2, 8);
function add(a, b) {
    const factor = 0.5; //local scope
    const result = (a + b) * factor + pi;
    const total = doubleIt(result);
    const value = addTwo(total);
    function addTwo(num) {
        num = num + pi;
        return num + 2;
    }
    return value;

}
// console.log(factor); //its give a refference error
// addTwo(5); //addTwo is not defined its give a error

function doubleIt(num) {
    return num * 2;
}

console.log(add(2, 5));


const multiply = (a, b) => {
    // console.log(result); //give an arror
    const result = a * b;
    return result;
}
multiply(2, 5);



// TDZ:Temporal dead zone: variable declare er aage use kora jabena

// block scope:
if(true) {

}

while(true) {

}

const age = 21;


// lexical scope: Inner function can access variable from outer function
