const express = require('express');
const db = require('./utils/db-connection');
const busRoutes = require('./routes/busRoutes');
const userRoutes = require('./routes/userRoutes');

const busModel = require('./models/Buses');
const userModel = require('./models/Users');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Server is Created');
})

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

db.sync({force: false})
    .then(()=>{
        app.listen(3000, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Server is Running on http://localhost:3000');
        })
    })
    .catch((err)=>{
        console.log(err);
    });