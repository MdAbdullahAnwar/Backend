const express = require('express');

const app = express();

const port = 3000;

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');


app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use('/cart',cartRouter);


app.get('/',(req,res)=>{
    res.status(200).send('Welcome to my E-Commerce Store');
})


app.use((req,res)=>{
    res.status(404).send('Page Not Found');
})


app.listen(port,()=>{
    console.log(`Port is Running on http://localhost:${port}`);
})