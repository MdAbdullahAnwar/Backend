const userServices = require('../service/userServices');

const getUsers = (req,res) => {
    let users;
    users = userServices.readingDataFromFile();

    users = userServices.sortingValuesUsingParams(req.query, users);
    
    res.json(users);
}

module.exports = { getUsers };