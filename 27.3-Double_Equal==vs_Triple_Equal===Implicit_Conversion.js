// 27.3-Double_Equal==vs_Triple_Equal===Implicit_Conversion.js

console.log(2===2);
console.log(2===3); //false
console.log(2==="2"); //compares the data type and value //false


// double equals does type coercion
console.log(2==2);
console.log(2=="2"); //not compare data type
console.log(1 == true);
console.log(0 == false);
console.log(true == "1");
console.log(false == "0");
console.log(null == undefined);
console.log(NaN == NaN); //false
console.log([5] == "5");
console.log({} == {}); //false

