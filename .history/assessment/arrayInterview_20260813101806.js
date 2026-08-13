
let array = [1,2,3,4];

const increment=(arr)=>{
   const result = arr.map((num) =>{
      return num += num + 0
   })
   return result
}
console.log(increment(array));
