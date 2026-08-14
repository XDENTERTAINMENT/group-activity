


let ItemName =  String;
let itemPrice = Number;
let itemQuantity = Number;
let customerName  = String;


const ItemName = prompt("what did you buy")
const ItemPrice = prompt(`${ItemName} cost:`)
const ItemQuantity = prompt("how many did you get?")

const subTotal = ( price, quantity,customer)=>{
     const subtotal = price * quantity;
       return subtotal > 10000 ? "you will get a free shipping" : `thank for trading with us ${customer}` 
}
subTotal(itemPrice,ItemQuantity,customerName)