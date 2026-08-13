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
let lastName = " okafor";
let fullName = firstName + "" + lastName;

console.log("welcome," + fullname + "!"); // fullname is not defined



//2

let itemPrice = "15";
let total  = itemPrice + 5;
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
let quantity =[]



 function additems(item,price1, quantity){

  item.push("yam");
  price1.push(400);
  quantity.push("yam");


     total = price1 * quantity;
     
     const addup = `i bought ${quantity} piece of ${item} at $${price1} and the total is : ${total} `
       console.log(addup)
 }
  
 

 additems(item, price,quantity);




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
                   
                