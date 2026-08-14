

{
let ItemName =  String;
let itemPrice = Number;
let itemQuantity = Number;
let customerName  = String;
}

const customerName = prompt("what is you name Ma/Sir")
const ItemName = prompt("what did you buy")
const ItemPrice = prompt(`${ItemName} cost:`)
const ItemQuantity = prompt("how many did you get?")

subTotal(itemPrice,ItemQuantity,customerName,ItemName)
const subTotal = ( price, quantity,customer,)=>{
     const subtotal = price * quantity;
       const shippingRule =( `${subtotal}` > 10000 ? "you will get a free shipping" : "thank for trading with us" `${customer}`);
       return { 

       }
}
subTotal(itemPrice,ItemQuantity,customerName,ItemName)