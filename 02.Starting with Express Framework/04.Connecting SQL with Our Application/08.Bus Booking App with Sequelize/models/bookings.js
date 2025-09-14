const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Bookings = sequelize.define('Bookings', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    busId: { type: DataTypes.INTEGER, allowNull: false },
    seatsBooked: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
});

module.exports = Bookings;
