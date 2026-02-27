// 26.6-Object_and_Array_Destructuring.js

// normal string
// const product = {
//     name: "iPhone", 
//     price: 65000,
//     description: "A phone by Apple"
// }
// const newPrice = product.price + 1000;
// const phoneName = `this is ${product.name}`
// console.log(newPrice);
// console.log(phoneName);
// const price = product.price;
// const name = product.name;

// String Destructuring
// const product = {name: "iPhone", price: 65000, brand: "Apple"};
const {name, price, brand: phoneBrand, camera = "12MP"} = {name: "iPhone", price: 65000, brand: "Apple", camera: "48MP"};
console.log(name);
console.log(price);
console.log(phoneBrand);
console.log(camera);

console.log("---------------");

// normal array
// const number = [10, 20, 30]

// Array Destructuring
const [first, second, third] = [10, 20, 30, 40, 50];
console.log(first, second, third);

const [height, weight] = numbers;