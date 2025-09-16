const express = require('express');
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');
const courseRoutes = require('./routes/courseRoutes');

// models
require('./models')

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server is Created");
})

app.use('/students',studentRoutes);
app.use('/courses',courseRoutes);

db.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log("Server is Running on http://localhost:3000");
    });
}).catch((err)=>{
    console.log(err);
})
