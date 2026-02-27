// 27.1-Null_vs_Undefined_and_Why_Undefind_Happens.js

// undifined
let data;
console.log(data);

const sum = (a, b) => {
    console.log(a, b);
}
sum(5, );

const student = {
    name: "Abir",
    age: 25
};
console.log(student.marks);

const arr = [1, 2, 3];
console.log(arr[5]);
delete arr[1];
console.log(arr[1]);

function great() {
    console.log("hello");
}
const result = great();
console.log(result);

console.log(typeof undefined);


// null
console.log(typeof null);

const persone = {
    name: "Abir",
    age: null
};
console.log(persone.age);