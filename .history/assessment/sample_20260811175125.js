// function generateUsername() {
//     const firstName = prompt("What is your first name?");
//     let favoriteNumber = prompt("What's your favorite number?");

//     favoriteNumber = Number(favoriteNumber);

//     if (isNaN(favoriteNumber)) {
//         alert("Please enter a valid number.");
//         return;
//     }

//     const userName = firstName.toLowerCase() + favoriteNumber;

//     alert("Your username is: " + userName);
// }

// generateUsername();

// .slice()  and .split()

// const foodStuff = ["beans","rice","yam","plantain"];
// const foodStuff2 = "plantain is a food";

//   const result = foodStuff.slice(1,2);
// const result = foodStuff2.split(" ");

// console.log(result);

// console.log(Math.round(4.4));

// console.log( Math.floor(6.9));

// console.log( Math.ceil(6.1));

// console.log(Math.random(4, 9));
// console.log(Math.random(4, 1));

// let phrase = "i love javascript";

// console.log(phrase.includes("love"));



// console.log(phrase.split(" "));

// let num = 7;
// console.log(Math.max(7, 10, 3));

// console.log(Math.min(7, 10, 3));


// let score = 87.6;
// let rounded = Math.Round(score);

// console.log("Rounded score:", rounded); 

// let sentence = " learning to code is fun";
// let firstword = sentence.split("");
// console.log(firstword);
     

// const array = ["peter", "favour", " Ada"];

// const result = array.map(arr =>{
//   return arr
// })

// console.log(result)



// let score = [];
// let student = []

// const studentGrade = (sco, stu)=>{
//   stu.push("peter")
//    sco.push(78.76)

//    const round = Math.round(sco);

//    const bonus = Math.random(round) * 2;

//    console.log(`${stu} scored ${bonus}`)

// }

// studentGrade(score,student);


// function studentGrade1(){
//   let student  = "favour";
//   let score = 49.45;
//   score = Math.round(score);

//       console.log(student + "SCORED" + score)
// }
// studentGrade1()




// const validate = ()=>{
//   const email= "njezepetergmail.com"
//   const val =  email.includes("@")

//   if(val){
//     console.log("login successful")
//   }
//   else{ 
//     console.log(" add @")
//   }


//     console.log();
// }

// validate();
// let temperature = 15;

// if (temperature > 30) {
// console. log("It's hot!");
// }
//  else if (temperature >= 15) {
// console. log("It's warm. ");
// } 
// else {
// console. log("It's cool.");
// }

// let age = 20;
// let hasID = false;

// if (age >= 18  && hasID) {
// console. log( "You may enter. ");
// } 

// else {
// console. log( "Entry denied.");
// }

let name = "favour"

if(name){
  console.log(" the name is correct")
}

else{}