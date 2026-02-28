// 27.8-Array_Power_Methods-Map_ForEach.js

const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for(const num of numbers) {
//     doubled.push(num * 2);
// }
// console.log(doubled);

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt);
// console.log(doubled);

const doubled = numbers.map(num => num * 2);
const square = numbers.map(num => num * num);
console.log(doubled);
console.log(square);

const friends = ["Miraj", "Anon", "Yeamin", "Sakib", "Ashik"];
const firstLetter = friends.map(frd => frd[0]);
console.log(firstLetter);