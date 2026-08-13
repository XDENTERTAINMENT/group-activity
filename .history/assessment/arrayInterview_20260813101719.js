
let array = [1,2,3,4];

const increment=(arr)=>{
   const result = arr.map((num) =>{
      return num += num 
   })
   return result
}
console.log(increment(array));
