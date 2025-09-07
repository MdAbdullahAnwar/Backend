const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send('Fetch all users');
})

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    res.status(200).send(`Fetching user with ID: ${id}`);
})

router.post('/',(req,res)=>{
    res.status(201).send('Add a new user');
})

module.exports = router;