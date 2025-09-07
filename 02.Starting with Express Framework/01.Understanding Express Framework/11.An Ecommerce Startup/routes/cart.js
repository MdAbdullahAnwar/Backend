const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send('Fetching cart');
})

router.get('/:userId',(req,res)=>{
    let userId = req.params.userId;
    res.status(200).send(`Fetching cart for user with ID: ${userId}`);
})

router.post('/',(req,res)=>{
    res.status(201).send('Adding product to cart');
})

router.post('/:userId',(req,res)=>{
    let userId = req.params.userId;
    res.status(201).send(`Adding product to cart for user with ID: ${userId}`);
})

module.exports = router;