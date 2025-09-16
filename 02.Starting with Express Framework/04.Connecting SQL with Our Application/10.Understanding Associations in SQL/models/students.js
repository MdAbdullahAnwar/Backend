const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(25),
    allowNull: false,
    unique: true,
  },
});

module.exports = student;
