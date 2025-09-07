const express = require('express');

const app = express();

const studentsRouter = require('./routes/students');
const coursesRouter = require('./routes/courses');

const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Welcome to the Student & Course Portal API!</h1>')
})

app.use('/students',studentsRouter);

app.use('/courses',coursesRouter);

app.use((req,res)=>{
    res.status(404).send('<h1>Page Not Found!</h1>')
})

app.listen(port,()=>{
    console.log("Server Running on http://localhost:3000");
})