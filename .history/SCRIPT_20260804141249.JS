   const container = document.querySelector("#container");
//  ACTIVITY 1




 
 
 
 
 const name = prompt("what is your name");

const age  = prompt("what is your age");


// 1. Get the current 4-digit year
const currentYear = new Date().getFullYear();

   

    // 2. Subtract the birth year
const ageDifference = currentYear - age;


 const result  = "welcome  " + name + "you are " + age +"years old"+"and you were born in "+ ageDifference;
 console.log(result)
 container.value = result;

