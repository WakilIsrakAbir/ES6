// 26.7-Keys_Values_Entries_Delete_Seal_Freeze.js

// Keys, Values, Entries:
const king = { name: "Afaz Uddin", age: 90, kingdom: "Mridha Lands"};
const keys = Object.keys(king);
const values = Object.values(king);
const entries = Object.entries(king); //it returns array of array or 2d array
console.log(keys);
console.log(values);
console.log(entries);

console.log("------------");

// Freeze:
// Object.freeze(king); //if i do it after that i can't change anything of this object

// Seal
Object.seal(king) //seal korle delete , add kora jabena but modify kora jabe

delete king.age;
king.queen = "Jahanara"
king.name = "Affaz Uddin mridha"
console.log(king);
