 
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

const foodStuff = ["beans","rice","yam","plantain"];

  const result = foodStuff.slice(1,2);
  const result = foodStuff.sp(1,2);
  
  console.log(result);