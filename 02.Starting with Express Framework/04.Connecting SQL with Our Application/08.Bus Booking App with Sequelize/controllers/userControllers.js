const db = require('../utils/db-connection');
const Users = require('../models/Users');

// Add user
const addUser = async (req, res) => {
    try{
        const { email, name } = req.body;
        const user = await Users.create({
            email: email,
            name: name
        });

        res.status(201).send(`User with name: ${name} has been created`);
    }
    catch(error){
        res.status(500).send(`Unable to create user due to ${error}`);
    }
    
};

// Get users
const getUsers = async (req, res) => {
    try{
        const users = await Users.findAll();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).send(`Unable to fetch users due to ${error}`);
    }
};

module.exports = { 
    addUser, 
    getUsers 
};