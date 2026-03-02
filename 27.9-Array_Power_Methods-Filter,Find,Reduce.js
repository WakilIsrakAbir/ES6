// 27.9-Array_Power_Methods-Filter,Find,Reduce.js

// filter: 
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 ===0 );
console.log(evenNumbers);

const friends = ["Miraj", "Anon", "Yeamin", "Sakib", "Ashik"];
const longName = friends.filter(frd => frd.length > 5);
const nFriends = friends.filter(frd => frd[0] === "A");
console.log(longName);
console.log(nFriends);

const students = [
    {name: "Wakil", age: 21},
    {name: "Israk", age:25},
    {name: "Abir", age:20},
    {name: "Rajin", age: 23},
    {name: "Saleh", age:16},
    {name: "Abi", age:24}
]
const olderStudents = students.filter(std => std.age > 20);
console.log(olderStudents);


// find: find korle just 1 ta return korbe.

const student = students.find(std => std.name === "Abir");
console.log(student);


// reduce:

const someNumbers = [1, 2, 3, 4, 5];
let sum = 0;
for(const num of someNumbers) {
    sum = sum + num;
}
console.log(sum);

// same work in one line using retuse methods

const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);