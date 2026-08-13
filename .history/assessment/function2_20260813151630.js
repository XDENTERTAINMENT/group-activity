// import goat from "./function2"

// console.log(goat("favour","friend"));

// function greet(name) {
//   console.log("Hello," + name + "!");
// }
// greet("Ifeoma");
// greet("David");

// function addNumbers(a, b) {
//   console.log(a + b);
// }
// addNumbers(4, 7);
// addNumbers(10);

// function sayHi() {
// console.log("Hi there!");
// }

// console.log( "Before calling function"); sayHi(); 
// console.log( "After calling function");



// debugging

let amo = 2000;
let per = 20;

function billpayment(amount,percent) {
    const amounts = amount
 const percentage = amount/percent * 100 ;
 
        return percentage
}



function message(amo,per) {
    billpayment(amo,per);
    return `the bill amount is : ${amo} and the percentage is ${per}`
}


console.log(message(amo,per))

