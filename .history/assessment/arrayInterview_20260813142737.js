// adding of array
let array = [1,2,3,4];

const increment=(arr)=>{

    let total = 0;
   const result = arr.map((num) =>{
      return total += num 
   })
   return result
}
console.log(increment(array));



// removal of duplicate alphabets

let names = "Nnabuike"

function uniqueLetters(name) {
  const lower = name.toLowerCase();

  const counts = {};

  for (const char of lower) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return [...lower]
    .filter(char => counts[char] === 1)
    .join("");
}


console.log(uniqueLetters(names));
// "abuike"


// removal of duplicate alphabets

let names2 = "Nnabuike"

function removeDuplicates(name) {
  const lowerName = name.toLowerCase();

  return [...new Set(lowerName)];
}

console.log(removeDuplicates(names2));
// "nabuike"


// fetching data from arrays

const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1200 },
  { name: "Tablet", price: 800 }
];

function getHighestPricedProduct(products) {
  return products.reduce((highest, product) => {
    return product.price > highest.price ? product : highest;
  });
}

console.log(getHighestPricedProduct(products).name);
// Laptop