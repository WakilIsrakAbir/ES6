// 26.5-Spread_Operator_Array_max_Copy_array.js

const max = Math.max(3, 5, 12, 78, 96, 75, 23);
console.log(max);

const numbers = [3, 5, 12, 45, 63, 50, 14];
const max2 = Math.max(...numbers);
console.log(max2);

const params = [45, 12, 3];
function sum(x, y, z) {
    return x + y + z;
}
const result = sum(...params);
console.log(result);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
const arr3 = [55, ...arr1, 66];
arr2.push(4);
console.log(arr1);
console.log(arr2);
console.log(arr3);

const persone = {
    name: "Abir",
    age: 25
}
const persone2 = {...persone, designation: "Developer"};
persone.salary = 20000;
console.log(persone);
console.log(persone2);
