const express = require('express');

const app = express();

const port = 4000;

let products = [
    { id: 1, item: 'Laptop', quantity: 2},
    { id: 2, item: 'Mobile', quantity: 5}
]

let categories = [
    { id:1, category: 'Food', item: 'Pizza', quantity: 2},
    { id:2, category: 'Electronics', item: 'Speaker', quantity: 5},
    { id:3, category: 'Fashion', item: 'Shoes', quantity: 10},
]

app.use((req,res,next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})

app.use(express.json());

app.get('/products',(req,res)=>{
    res.status(200).json({
        message: "Here is the list of all products.",
        products,
    })
})

app.post('/products',(req,res)=>{
    let { item, quantity } = req.body;
    let newProduct  = { id: products.length+1, item, quantity };
    products.push(newProduct);
    res.status(201).json({
        message: "A new product has been added.",
        newProduct
    })
})

app.get('/categories',(req,res)=>{
    res.status(200).json({
        message: "Here is the list of all categories.",
        categories
    })
})

app.post('/categories',(req,res)=>{
    let { category, item, quantity } = req.body;
    let newCategory = { id: categories.length+1, category, item, quantity };
    categories.push(newCategory);
    res.status(201).send({
        message: "A new category has been created.",
        newCategory
    })
})

app.listen(port,()=>{
    console.log(`Server is Running in http://localhost:${port}`)
})