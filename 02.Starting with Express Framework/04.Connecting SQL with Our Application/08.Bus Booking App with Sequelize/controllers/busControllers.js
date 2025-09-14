const Buses = require('../models/Buses');

// Add bus
const addBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;
        const bus = await Buses.create({ busNumber, totalSeats, availableSeats });
        res.status(201).json(bus);
    } catch (error) {
        res.status(500).send(`Unable to add bus due to ${error}`);
    }
};

// Get available buses with at least the specified number of seats
const getAvailableBuses = async (req, res) => {
    try {
        const minSeats = parseInt(req.params.seats, 10);
        const buses = await Buses.findAll({ where: { availableSeats: { [require('sequelize').Op.gt]: minSeats } } });
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).send(`Unable to fetch available buses due to ${error}`);
    }
};

module.exports = { addBus, getAvailableBuses };
