const getProducts = (req,res)=>{
    res.status(200).send('Fetching all products');
}


const getProductsById = (req,res)=>{
    let id = req.params.id;
    res.status(200).send(`Fetching product with ID: ${id}`);
}


const postProducts = (req,res)=>{
    res.status(201).send('Adding a new product');
}


module.exports = {
    getProducts,
    getProductsById,
    postProducts
}