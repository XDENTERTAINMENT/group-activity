//    Activity 1: Part 1

/*
1. A variable can help the program do this  By creating a variable name and assigning a value to it 
So that whenever we need that value Later we use the variable name to access it

 
2.(i). A console.log() is use to test our code or debuge errors
A programmer chooses to use console.log when they want to test run there code or figure out an error from there code

(ii) alert() is a pop up box that  display  On the browser is use to send information or warn  the user
Programmers chooses alert when they want to send information to the user

(iii) prompt() is use to receive information from the users
Programmers uses prompt when they want to collect users information

(iv) Confirm() is a pop up box that  is Used when you want the user to confirm an action

3. Let can help us re-asign  a value to a variable but const does not accept reassignment

Programmers chooses const because  they want the value of a variable to remain the same throughout the program  to avoid errors and also makes the code easier to understand

4. Programming language need different data types because JavaScript understands each data in a different ways it helps them differentiate between a text (string), numbers and boolean values so it can process each of the data correctly

5. 

*/

// Part 2  Snippet A

let age = 25;
console.log(age);

age = "Twenty-five";
console.log(age); // will output 25 and Twenty-five

// B
const isRaining = true;
console.log("Is it raining? " + isRaining); //will output Is it raining? true

// C
let favoriteNumber;
console.log(favoriteNumber); // undefined

//******* Part 3 ********
let userName = "Amara";
//console.log(username);
// the code will not run because the variable name in the console is not declared
console.log(userName); // The corrected version will output Amara

const favoriteColor = "blue";
console.log(favoriteColor); // will output blue

// ******* Part 4 ********
// Step 1 - The program needs to ask the user for their name and age then greet the user by their name and also calculate their year of birth based on the current year
// Step 2 - Their Name and Age
// Step 3 - it needs to store the user's Name and Age then calculate their year of birth by substracting the current year from the Age
// Step 4 - it will display a welcome message with the users name and birth year
// Step 5 -

//Step 6
const yourName = prompt("What is your name?");
const yourAge = Number(prompt("How old are you?"));
const hobby = prompt("What is your favorite hobby");
const currentYear = 2026;
const birthYear = currentYear - yourAge;
console.log(
  `Welcome! ${yourName}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby} `,
);

//Step 7
{
  const Name = "Bola";
  const Age = 45;
  const hobby = "Dancing";
  const currentYear = 2026;
  const birthYear = currentYear - Age;
  console.log(
    `Welcome! ${Name}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby}`,
  );
}

// Step 8 Yes the variable naming is clear and the code is easy to understand

/*
     ****Part 5 **** Added user's favorite hobby
     The hubby will be stored as a string data type because the value hobby is a text not a number
   */

//  activity 2

// 1 javascript checks what operation it is been used on and decides what the ouput will be
// 2  template literals: because it is more co-ordinated than inputing multiple +
// 3  when you add a string and a number together, it doesn't add up but instead concatinate them
//    4  because that is the syntax it uses

//  part 2
// code Snippet
let a = 10;
let b = "5";

console.log(a + b); // the output will be 105
console.log(a - b); // 5

//    snippet2

let price = 20;
let quantity = 3;
console.log(`total cost: $${price + quantity}`); // it will output $23

//  snippet 3

let x = 4;
let y = 2;
console.log(" Result:" + x + y); // it will  output 42
console.log(" Result:" + (x + y)); // it will output 6

//    part 3

let firstName = "Tunde";
let lastName = " okafor";
let fullName = firstName + "" + lastName;

console.log("welcome," + fullname + "!"); // fullname is not defined

//2

let itemPrice = "15";
let total = itemPrice + 5;
console.log(`your total is $${total}`); // the itemPrice accepts a string value instead of a number type

// Part 4: Collaborative Technical Challenge
// Scenario: Build a "Receipt Generator" that asks the user for an item name, its price,
// and how many they're buying, then displays a formatted receipt line.
// Step 1 — Understand the Problem: Explain the goal in your own words.
// Step 2 — Identify Inputs: What three pieces of information do you need?
// Step 3 — Identify Processing: What calculation turns those inputs into a total?
// Step 4 — Identify Outputs: What should the final receipt look like?
// Step 5 — Plan the Solution: Write the steps in plain English first.
// Step 6 — Write the Code: Use variables, a calculation, and a template literal to build
// the final message.

let item = [];
let price = [];
let quantity = [];

function additems(item, price1, quantity) {
  item.push("yam");
  price1.push(400);
  quantity.push("yam");

  total = price1 * quantity;

  const addup = `i bought ${quantity} piece of ${item} at $${price1} and the total is : ${total} `;
  console.log(addup);
}

additems(item, price, quantity);

// **************** Activity 3: ************************
// 1.

// Part 2
// Snippet A
let input = "42";
let converted = Number(input);
console.log(input + 8); // will output 428
console.log(converted + 8); // will output 50

//  B
let name = "   Chidinma  ";
console.log(name.trim()); // will output Chidinma without the spaces
console.log(name.length()); // will output 13

// C
let word = "javascript";
console.log(word.toUpperCase()); //  will output JAVASCRIPT
console.log(word); // will output javascript

// ******* part 3 No.1 ****************8

let userAge = prompt("Enter your age:");
let nextYearAge = userAge + 1;
console.log("Next year you will be " + nextyearAge); // the variable name nextyearAge is not equal to the variable name that is concatinated in the console.log

// corrected version
let userAge = prompt("Enter your age:");
let nextYearAge = userAge + 1;
console.log("Next year you will be " + nextYearAge);

// 2 .
let city = "lagos";
console.log(city.ToUpperCase()); // The ToUpperCase in the console.log is wrongly spelt that means is not a function

//corrected version
let city = "lagos";
console.log(city.toUpperCase());

// ************ Part  4  ****************

// Step 1. The final output Is going to print out the person firstname to lowercase and the favourite number
// Step 2 The persons first name and the persons favorite number
// Step 3 The number conversion.....
// Step 4 will output the first name and the favorite number but the first name will be in small letter
// Step 5 Create two variable called firstname and favorite number covert the favorite number to a number type then create a variable name called username which holds the concatination of first name and favorite number
// Step 6

function generateUsername() {
  const firstName = prompt("What is your first name?");
  let favoriteNumber = prompt("What's your favorite number?");

  favoriteNumber = Number(favoriteNumber);

  if (isNaN(favoriteNumber)) {
    alert("Please enter a valid number.");
    return;
  }

  const userName = firstName.toLowerCase() + favoriteNumber;

  alert("Your username is: " + userName);
}

generateUsername();

// activity 4
// 1 a program needs Math.random()when it need to generate numbers like otp or codes
//    2 the string method used is .include()
//    3  .slice()  and .split():  split is a method that split a string into substrings and place them into an array
// while slice is a method that extract a  section of an array or string and returns it  as a new object without modifying the original data

// part 2

// // code snippet 1
// console.log(Math.round(4.5)); it gives us 5
//    console.log( Math.floor(4.9)); it rounds down
//    console.log( Math.ceil(4.1)); it rounds up

// code snippet 2   ` `

// let phrase = " i love javascript";
// console.log(phrase.includes("love"));  checks for a piece of text exist inside another string
// console.log(phrase.split(" ")); this splits a sentence into words

// code snippet 3
//   let num = 7;
//   console.log(Math.max(num,10,3));  returns maximum number
//   console.log(Math.min(num,10,3)); returns minimum number

//   part3
// let score = 87.6;
// let rounded = Math.round(score);

// console.log('Rounded score:', rounded);  the Round is meant to be small leter r

// let sentence = " learning to code is fun"
// let firstword = sentence.split("")[0]
// console.log(firstword);  the presence of the [] makes it not to print. but when removed, it prints

// part 4

// step 1   building of a system thaT reports a student score and rounds it and also reports
//  the student score and name and the name should be in uppercase.

// step   the program need the student score and name.

// step     Math.round() and toUpperCase()

// step 4   peter scored 79
//                 step 5

// let score = [];
// let student = []

// const studentGrade = (sco, stu)=>{
//   stu.push("peter")
//    sco.push(78.76)

//    const round = Math.round(sco);

//    console.log(`${stu} scored ${round}`)

// }

// studentGrade(score,student);

// activity 5
// 1 for a program to have a decision?
// i have $300 and i don't know how much is iphone 12 so i have made up my mind  if the money can't buy it , i will buy iphone 11
// that is how programs also need to make decisions to take actions..
// 2 difference between =,==,===?   = is equal to == loose equality while === is strict equality
// 3 No, because it a decision statement it accepts a true or false argument so only one is accepted
// 4 it change how a condition behaves because they operate differently and a condition needs to be met before it runs

//             //    code snippet 1
// let temperature = 15;
// if (temperature > 30) {
// console. log("It's hot!");
// } else if (temperature > 15) {
// console. log("It's warm. ");
// }
// else {
// // console. log("It's cool.");  the output is it's cool because temperature is 15 and it meets the condition
// }

// code snippet

// let age = 20;
// let hasID = false;
// if (age >= 18 && hasID) {
// console. log( "You may enter. ");
// } else {                               ENTRY  denied will print because the && operator  need the two conditions to be true condition to execute
// console. log( "Entry denied.");
// }

// snippet

// let password = "1234";
// if (password === "0000") {
// console. log( "Password changed! ");
// } else {
// console.log("No change.");         output is no change

// }

// part3

// let hour = 14;

// if(hour < 12){
// console. log( "Good morning!");}

// else if(hour < 18){
// console.log( "Good afternoon!");
//                                                     it needs proper indentation and arrangement
// }
// else{
// console.log("Good evening!")}

// Part 4: Collaborative Technical Challenge

// Scenario: Build a "Movie Ticket Pricer" that asks for a person's age and whether it's a
// weekday or weekend, then decides the ticket price using conditional logic (e.g.,
// discounts for children, seniors, or weekday showings).
// Step 1 — Understand the Problem: Explain the pricing rules your group wants to use,
// in plain English.
// Step 2 — Identify Inputs: What information does the program need?
// Step 3 — Identify Processing: What conditions determine the final price?
// Step 4 — Identify Outputs: What should the program display?
// Step 5 — Plan the Solution: Write out your decision logic as plain-English rules before
// coding.
// Step 6 — Write the Code: Implement your rules using if/else if/else

// step 1 the pricing is based on the persons age, and when the ticket was booked if it was on weekend or weekdays
//  step2 the program needs the age, weekend and
// step3  the price is determined  if the age, weekday or weekend is met based on the required conditions
//    step4  the program should display price and ticket type
//    step 5    Ask the user for age.
//             Ask the user whether it is a weekday or weekend.
//             Determine the ticket type based on age.
//             Set the appropriate price.
//             If it is a weekday, reduce the price by ₦200.
//             Display the ticket type and final price.

// step 6
//           let age = [];
// let weekend = [];
// let weekdays = [];

// const verify = (age1, weeke, weekd) => {

//     age1.push(17);          // Senior age
//     weeke.push("monday");
//     weekd.push("saturday");

//     if (age1[0] <= 18 && (weekd[0] === "saturday" || weekd[0] === "sunday")) {
//         console.log("discount for children so you will pay: $10");
//     }
//     else if (age1[0] >= 65 && (weekd[0] === "saturday" || weekd[0] === "sunday")) {
//         console.log("Senior Ticket: $15");
//     }
//     else if (weekd[0] === "saturday" || weekd[0] === "sunday") {
//         console.log("You will pay: $20");
//     }
//     else if (weeke[0] === "monday" || weeke[0] === "friday") {
//         console.log("You will pay: $30 for weekday showing");
//     }
//     else {
//         console.log("You are not invited");
//     }
// }

// verify(age, weekend, weekdays);

// activity 6

// 1 yes it a shortcut because it checks the expressions using ? than writting it in full using the if, elseif statement
// 2 it can't replace if ,else if and else because it can't handle many conditions just like using && and || to create a condtion
// 3 when multiple conditions are needed like && and ||

//   part2 pridict the output

// code snippet 1
// let score = 72;
// let result = score >= 50 ? "Pass" : "Fail";
// console.log(result);    pass will print because the condition will print
        

// code snippet 2
// let cartTotal = 0;
// let message = cartTotal > 0 ? "Proceed to checkout": "Your cart is empty";
// console. log( message);       your cart is empty will run

// code snippet 3

// let stock = 5;
// console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`); the ouput will be stock status Available


//   debugging challenge
// let temperature = 28;
// let feeling = temperature > 25? "hot" : "cold";
// console.log(feeling)

// let isMember = true ;
// let discount = isMember ? 10 : 0;
// console.log(`Discount: ${discount}%`)  all debugged and pasted




// 

// activity 7  loops
//    1 because loops checks the expression and checks the conditions one after the other than manually doing it which is more 
//    2 for vs while loop:
//     * for → useful when you generally know how many times you want to repeat something.
//     * while → useful when you want to repeat something as long as a condition remains true.
//    3. Infinite loop:
//     A loop that never stops because its condition never becomes false. A common cause is forgetting to update the variable controlling the condition.

// 4. Loop runs 4 times instead of 5:
//     First check the loop condition and starting/ending values. For example, with a for loop, you might have used < 4 instead of < 5.

// 5. Real-life example:
//     Brushing your teeth in circular motions can be thought of as:
//     * Starting point: Begin brushing.
//     * Condition: Continue while there are teeth/areas left to brush.
//     * Step: Move the brush to the next area and repeat.




// part 2

// code snippet

// for (let i = 1; i <= 5; i++) {
// console.log(i);}   it will print 1 to 5


// snippet 3
// let count = 3;
// while (count > 0) {
// console.log(`Countdown: $(count}`);
// count--;
// }                             the output will be 3,2,1        

// console.log("Liftoff!");






// debugging
// let total = 0;
// for(let i = 1; i <= 5; i++)    all fixed and working
//     {
// total = total + i
// console.log( "Total: " + total); }


// 2
// let count = 5;
// while (count)
//      {                           infinite loop
// console. log(count);}













// activity 8

    // 1  it similar because function accepts value through a parameter and uses it to carry out operation within it scope  and return the output
    // 2   parameter are placeholders which the function expects  argument is the actual value you give the function when you call it
      //3   we create a function for reusability  
      //4  when the function is not called, it prints nothing
    // 5   it will print out undefined for that parameter that doesn't an argument

      //  part2

      // snippet1
                      
//  function greet(name) {
//   console.log("Hello," + name + "!");
// }                           hello ifeoma
// greet("Ifeoma");
// greet("David");


      // snippet2
      // snippet3
      //

    