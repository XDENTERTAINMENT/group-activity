 const array = [1, 2, 2, 3, 4, 4, 5, 1]


 const newArray=(arr)=>{
    
    const result = arr.filter((filt,another)=>{
    return filt === another ? filt: another
    })
    return 

 }
console.log(newArray(array)) 