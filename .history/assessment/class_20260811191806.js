// ================= Class Activity ==================

const products = ["laptop - 500", "bag - 100", "phoneStand - 50"];


const result = products.map((g) =>{
    return{
        productname:`${g}`,
        price:`${g}`

    }
})

console.log(result)

const sales = [
 { product: "Laptop", quantity: 3, price: 250000 },
 { product: "Mouse", quantity: 10, price: 5000 },
 { product: "Keyboard", quantity: 5, price: 15000 }
];

const result2 = sales.reduce((acc,rap) =>{
 return acc + (rap.price * rap.quantity)
})

console.log()


// Using the reduce method, get the total sales amount.