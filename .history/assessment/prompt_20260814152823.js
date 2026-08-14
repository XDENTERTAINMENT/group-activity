


let ItemName =  String;
let itemPrice = Number;
let itemQuantity = Number;


const ItemName = prompt("what did you buy")
const ItemPrice = prompt(`${ItemName} cost:`)
const ItemQuantity = prompt("how many did you get?")

const subTotal = ( price, quantity)=>{
     const subtotal = price * quantity;
       return subtotal > 10000 ? "you will get a free shipping"
}
subTotal(itemPrice,ItemQuantity)