const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Buses = sequelize.define('Buses',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    busNumber:{
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeats:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    availableSeats:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
})

module.exports = Buses;