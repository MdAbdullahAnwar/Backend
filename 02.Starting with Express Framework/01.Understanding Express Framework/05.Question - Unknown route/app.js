const express = require('express');

const app = express();

const port = 4000;

let products = [
    { id: 1, product: "Laptop", quantity: 1},
    { id: 2, product: "Phone", quantity: 3}
]

let categories = [
    {id:1, category: "Food", item: "Pizza", quantity: 5},
    {id:2, category: "Accessory", item: "Watch", quantity: 2},
    {id:3, category: "Fashion", item: "Shoes", quantity: 3}
]

app.use(express.json());

app.get('/products',(req,res)=>{
    res.status(200).json({
        message: "Here is the list of all products.",
        products
    });
});

app.post('/products',(req,res)=>{
    const { product, quantity } = req.body;
    const newProduct = { id: products.length+1, product, quantity };
    products.push(newProduct);
    res.status(201).json({
        message: "A new product has been added.",
        newProduct
    });
});

app.get('/categories',(req,res)=>{
    res.status(200).json({
        message: "Here is the list of all categories.",
        categories
    });
});

app.post('/categories',(req,res)=>{
    const { category, item, quantity } = req.body;
    const newCategory = { id: categories.length+1, category, item, quantity };
    categories.push(newCategory);
    res.status(201).json({
        message: "A new category has been created.",
        newCategory
    });
});

app.use((req,res)=>{
    res.status(404).send(
        `
        <h1>404 - Page Not Found</h1>
        `
    );
});

app.listen(port,()=>{
    console.log("Server is Running on http://localhost:4000");
})