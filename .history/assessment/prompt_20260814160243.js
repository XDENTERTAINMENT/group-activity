{
  let ItemName = String;
  let itemPrice = Number;
  let itemQuantity = Number;
  let customerName = String;
}

const customerName = prompt("what is you name Ma/Sir:");
const ItemName = prompt("what do you want to  buy?");
const ItemPrice = prompt(`${ItemName} cost:`);
const ItemQuantity = prompt("how many do you get?");

const subTotal = (price, quantity, customer, Item) => {
  const subtotal = price * quantity;
  const shippingRule = ading with us, ${customer}!`
  }`;`${
      subtotal > 10000
      ? `You will get free shipping, ${customer}!`
      : `Thank you for tr

  return {
    customername: customer,
    ItemName: Item,
    ItemPrice: price,
    Itemquantity: quantity,
    shipping: shippingRule,
    tatoal: subtotal,
  };
};
const result = subTotal(ItemPrice, ItemQuantity, customerName, ItemName);
alert(result);
console.log(result);
