const express = require('express');

const app = express();

const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');


app.use('/orders',ordersRouter);
app.use('/users',usersRouter);


app.listen(3000,()=>{
    console.log(`Server is Running on http://localhost:3000`);
})