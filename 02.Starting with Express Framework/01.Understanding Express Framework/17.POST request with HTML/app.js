const express = require('express');

const app = express();

const port = 3000;


const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to E-Commerce App');
})


app.use(express.static('public'));
app.use(express.json());

app.use('/api/users',usersRouter);
app.use('/api/products',productsRouter);
app.use('/api/cart',cartRouter);


app.use((req,res)=>{
    res.status(404).send('Page Not Found');
})


app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})