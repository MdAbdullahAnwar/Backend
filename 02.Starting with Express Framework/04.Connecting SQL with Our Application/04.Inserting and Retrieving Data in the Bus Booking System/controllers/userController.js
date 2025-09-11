const db = require('../utils/db-connection');

const addUser = (req, res) => {
    const { name, email } = req.body;

    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.execute(query, [name, email], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(201).send(`User ${name} added successfully with ID ${result.insertId}`);
    });
};

const getUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.execute(query, (err, results) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(200).json(results);
    });
};

module.exports = { 
    addUser, 
    getUsers 
};