const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

let orders = [
    {id: 1, item: "Laptop", quantity: 1},
    {id: 2, item: "Phone", quantity: 2}
]

let users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
];

app.get("/orders",(req,res)=>{
    res.status(200).json({
        message: 'Here is the list of all orders.',
        orders
    });
});

app.post("/orders",(req,res)=>{
    const { item, quantity } = req.body;
    const newOrder = { id: orders.length + 1, item, quantity };
    orders.push(newOrder);
    res.status(201).json({
        message: 'A new order has been created',
        newOrder
    });
});

app.get("/users",(req,res)=>{
    res.status(200).json({
        message: 'Here is the list of all users.',
        users
    });
});

app.post("/users",(req,res)=>{
    const { name } = req.body;
    const newUser = { id: users.length+1, name };
    users.push(newUser);
    res.status(201).json({
        message: 'A new user has been added.',
        newUser
    })
});

app.listen(port,()=>{
    console.log("Server is running on http://localhost:3000");
})