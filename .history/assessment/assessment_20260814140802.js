 const array = [1, 2, 2, 3, 4, 4, 5, 1]


 const newArray=(arr)=>{
    
    const result = arr.filter((filt)=>{
    return filt !== filt
    })

 }
console.log(newArray(array)) 