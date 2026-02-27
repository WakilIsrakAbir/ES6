// 26.9-Looping_Object_For_In_For_Of.js

const numbers = [1, 2, 3, 4, 5];
for(const number of numbers) {
    console.log(number);
};

const employees = {
    name: "Abir",
    1: "desk one",
    "home-address": "House No-76",
    position: "Software Engineer",
    salary: 50000,
};
for(const key in employees) {
    const value = employees[key];
    console.log(key, value);
}