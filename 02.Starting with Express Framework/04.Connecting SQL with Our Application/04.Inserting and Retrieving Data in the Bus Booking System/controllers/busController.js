const db = require('../utils/db-connection');

const addBus = (req, res) => {
    const { busNumber, totalSeats, availableSeats } = req.body;

    const query = 'INSERT INTO buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)';
    db.execute(query, [busNumber, totalSeats, availableSeats], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(201).send(`Bus ${busNumber} added successfully with ID ${result.insertId}`);
    });
};

const getAvailableBuses = (req, res) => {
    const seats = req.params.seats;
    const query = 'SELECT * FROM buses WHERE availableSeats > ?';

    db.execute(query, [seats], (err, results) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }
        res.status(200).json(results);
    });
};

module.exports = { 
    addBus, 
    getAvailableBuses 
};