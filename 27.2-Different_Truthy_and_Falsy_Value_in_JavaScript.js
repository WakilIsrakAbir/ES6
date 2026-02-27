// 27.2-Different_Truthy_and_Falsy_Value_in_JavaScript.js

let data;
data = 0;
data = "";
data = "0"; //truthy
data = " "; //truthy
data = false;
data = true;
data = null;
data = undefined;
data = {}; //truthy
data = []; //truthy

if(data) {
    console.log("Truthy");
}
else{
    console.log("Falsy");
}


let price = false;
if(!price) {
    console.log("Price Is Falsy");
}


let value = 0;
if(!!value) {
    console.log("Truthy");
}
else{
    console.log("falsy");
}