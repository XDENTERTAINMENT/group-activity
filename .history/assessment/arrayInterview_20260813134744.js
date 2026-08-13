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



