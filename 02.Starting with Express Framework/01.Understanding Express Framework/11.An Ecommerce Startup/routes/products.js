const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send('Fetching all products');
})

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    res.status(200).send(`Fetching product with ID: ${id}`);
})

router.post('/',(req,res)=>{
    res.status(201).send('Adding a new product');
})

module.exports = router;