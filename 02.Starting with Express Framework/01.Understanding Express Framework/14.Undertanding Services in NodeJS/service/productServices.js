const fs = require('fs');
const path = require('path');

const readingDataFromProductFile = () => {
    const filePath = path.join(__dirname, '../data/product.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    let products = JSON.parse(data);
    return products;
};

const sortingPriceUsingParams = (req, products) => {
    if (req.name) {
        products = products.filter(
            product => product.name.toLowerCase() === req.name.toLowerCase()
        );
    }

    if (req.sortBy === 'price') {
        products.sort((a, b) => a.price - b.price);
    }

    return products;
};

module.exports = {
    readingDataFromProductFile,
    sortingPriceUsingParams
};