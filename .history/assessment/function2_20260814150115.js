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

// let amo = 2000;
// let per = 20;

// function billpayment(amount,percent) {
//     const amounts = amount
//  const percentage = (amount * percent)/100 ;

//         return percentage
// };



// function message(amo,per) {
//   const percent =  billpayment(amo,per);

//     return `the bill amount is : ${amo} and the percentage is ${percent}`
// }


// console.log(message(amo,per));




// function square(num) {
// return num * num;
// }


// const square2 = function () {
//   return "it thursday"
// };
//  let result = square2()
// console.log(result)

// let array = ["peter","Mrs Chinonso","Favour"]

//  console.log(array)

//  array.push("Barista Ada");

// array.map(arr =>{
//     console.log(arr)
// })








// let input =[]
// const array=(num)=> {
//     num.push(3)

//      num.map(num1 =>{
//         console.log(num1)
//     })

//     return num * num

    
// } 

// console.log(array(input))



//   const multiply = function(a, b) {
// return a * b; }
// console. log(multiply(3, 4));

// const double = num => num * 2;
// console.log(double(6));
//  console.log(double(0));

// const introduce = (name, age) => {

// console.log(`My name is ${name} and I am ${age} years old. `)};

// introduce( "Zainab", 22);


// debugging
// 1

// const greetUser = (name) =>
// {
// console.log("Welcome," + name)
// }
// greetUser( "Emeka");

// // 2
// const subtract = (a, b) => a - b
// console.log( subtract (10, 4))


//   const percentageConverter = (num,percent)=>{ 
//             const percentage = (num * percent)/100;

//             return percentage/100

//   }
//    console.log(percentageConverter(400,20));


//   const AreaOfReactangle= (length, width)=>{ 
//       const area = length * width
//       return area
//   }
//    console.log(AreaOfReactangle(20,5));


//   const CelsiusConverter = (celsius)=>{ 
//           const fahreheit = (celsius * 9/5) + 32
//           return fahreheit + "°F"
//   }
//   console.log(CelsiusConverter(30));




// const getDiscount = (total) => total >= 100 ? total * 0.1 : 0;
// let orderTotal = 120;
// let discount = g etDiscount(orderTotal);

// console.log(`Discount: $${discount}`)
// console.log( `Final total: $${orderTotal - discount}`);
 


// function classifyNumbers(limit) {
// for (let i = 1; i <=limit; i++) {
// console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
// }
// }
// classifyNumbers (4);

const formatName = (name) => name.trim().toUpperCase();
let rawInput = "kelechi"
console.log(`Welcome,${formatName(rawInput)}!`)