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

 age = "Twenty-five"
console.log(age); // will output 25 and Twenty-five 


// B
const isRaining = true;
console.log("Is it raining? " + isRaining); //will output Is it raining? true

// C
let favoriteNumber;
console.log(favoriteNumber); // undefined

//******* Part 3 ********
let userName ="Amara"
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
    const yourAge = Number( prompt("How old are you?"));
    const hobby = prompt("What is your favorite hobby");
    const currentYear = 2026;
    const birthYear =  currentYear -  yourAge 
    console.log(`Welcome! ${yourName}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby} `);



//Step 7
   {
    const Name = "Bola"
    const Age = 45;
    const hobby = "Dancing";
    const currentYear = 2026;
    const birthYear = currentYear - Age;
    console.log(`Welcome! ${Name}, You were born in the year ${birthYear}, Your favorite hobby is ${hobby}`);

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

     console.log(a + b);  // the output will be 105
     console.log( a - b); // 5


//    snippet2

   let price = 20;
   let quantity = 3;
   console.log(`total cost: $${price + quantity}`);// it will output $23

    //  snippet 3

    let x = 4;
    let y = 2;
    console.log(" Result:" + x+ y); // it will  output 42
    console.log(" Result:" + (x+ y)); // it will output 6




//    part 3

let firstName = "Tunde";
let lasdtName = " okafor";
let fullName = firstName + lastName;

console.log("welcome," + fullName + "!");



//2

let itemPrice = "15";
let total  = itemPrice + 5;
CONSOLE.LOG(`your total is $${}`)
   










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
console.log(name.trim());  // will output Chidinma without the spaces
console.log(name.length()); // will output 13 

// C
let word = "javascript";
console.log(word.toUpperCase()); //  will output JAVASCRIPT
console.log(word);  // will output javascript

// ******* part 3 No.1 ****************8

 let userAge = prompt("Enter your age:");
 let nextYearAge = userAge + 1;
 console.log("Next year you will be " + nextyearAge); // the variable name nextyearAge is not equal to the variable name that is concatinated in the console.log

// corrected version
 let userAge = prompt("Enter your age:");
 let nextYearAge = userAge + 1;
 console.log("Next year you will be " + nextYearAge); 



 // 2 .
 let city = "lagos"
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

 
  const firstName = prompt("What is your first name");
  const favoriteNumber = prompt(" what's your favorite number");
  favoriteNumber = number(favoriteNumber)
  if (isNaN (favoriteNumber)) {
    alert("Please enter a valid number")
    return;
  }
  firstName = firstName.toLowerCase();
  const userName = firstName + favoriteNumber;
  alert("your user name is:" + userName);