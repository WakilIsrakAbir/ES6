// 26.8-Assessing_Object_Data-Nested_Object_Dot_vs_Breacket_and_Optional_Chaining.js

const employe = {
    name: "Abir",
    1: "desk one",
    "home-address": "House No-76",
    position: "Software Engineer",
    salary: 50000,
    family: {
        father: "Alauddin Mridha",
        // mother: {
        //     name: "Afroza Yeasmin",
        //     age: 55
        // }
    }
}
//dot notation
console.log(employe.name); 
console.log(employe.salary);

//bracket notation
console.log(employe["home-address"]); 
console.log(employe[1]);

const key = "position";
console.log(employe[key]);

// Optional Chaining
console.log(employe.family?.mother?.age);

