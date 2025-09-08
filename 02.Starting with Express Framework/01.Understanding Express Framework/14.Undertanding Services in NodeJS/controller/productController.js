const productServices = require('../service/productServices');

const getProducts = (req, res) => {
    let products = productServices.readingDataFromProductFile();

    products = productServices.sortingPriceUsingParams(req.query, products);
    
    res.json(products);
};

module.exports = { getProducts };