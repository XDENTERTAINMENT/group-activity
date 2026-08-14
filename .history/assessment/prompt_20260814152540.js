


let ItemName =  String;
let itemPrice = Number;
let itemQuantity = Number;


const ItemName = prompt("what did you buy")
const ItemPrice = prompt(`${ItemName} cost:`)
const ItemQuantity = prompt("how many did you get?")

const subTotal = ( price, quantity)=>{
              return price * quantity;
}
subTotal(itemPrice,ItemQuantity)