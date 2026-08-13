const products = [
    {
        name: "Laptop",
        price: 500000,
        category: "Electronics"
    },
    {
        name: "Office Chair",
        price: 85000,
        category: "Furniture"
    },
    {
        name: "Backpack",
        price: 25000,
        category: "Accessories"
    },
    {
        name: "Headphones",
        price: 45000,
        category: "Electronics"
    }
];


products.forEach((q,index) =>{
    console.log(`${index + 1}. ${q.price} . ${}`)
})