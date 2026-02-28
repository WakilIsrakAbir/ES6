// 27.6-Callback_Function_and_Pass_Different_Function.js

// document.getElementById("#btn").addEventListener("click", function(event){

// });

// jokhon click hobe just tokhon e click hobe
// addEventListener("click", function(event){

// });

// exp:
function settleLife(name, isBCS, marriage, patri) {
    if(isBCS){
        marriage(patri);
    }
}

function boloKobul(patri) {
    console.log("Kobul", patri);
}
boloKobul("unknown1");

settleLife("Abir", true, boloKobul, "unknown2");