// 27.5-Explore_Closure.js

//

function outerFunction() {
    function innerFunction() {
        console.log("This is inner Function");
    }
    return innerFunction;
}
const result = outerFunction();
result();
// console.log("In the Outside", result);

console.log("-------------");

function counter(owner) {
    let count = 0;
    function increment() {
        count = count + 1;
        console.log("value of counter", owner, count);
    }
    return increment;
}

// const count1 = counter();
// count1();
// count1();
// count1();
// count1();
// count1();

const rohimCounter = counter("rahim");
rohimCounter();
rohimCounter();
rohimCounter();
rohimCounter();
rohimCounter();

const karimCounter = counter("Karim");
karimCounter();
karimCounter();
karimCounter();
rohimCounter();
rohimCounter();
rohimCounter();

