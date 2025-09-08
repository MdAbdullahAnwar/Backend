const getCart = (req,res)=>{
    res.status(200).send('Fetching cart');
}


const getCartById = (req,res)=>{
    let userId = req.params.userId;
    res.status(200).send(`Fetching cart for user with ID: ${userId}`);
}


const postCart = (req,res)=>{
    res.status(201).send('Adding product to cart');
}


const postCartById = (req,res)=>{
    let userId = req.params.userId;
    res.status(201).send(`Adding product to cart for user with ID: ${userId}`);
}


module.exports = {
    getCart,
    getCartById,
    postCart,
    postCartById
}