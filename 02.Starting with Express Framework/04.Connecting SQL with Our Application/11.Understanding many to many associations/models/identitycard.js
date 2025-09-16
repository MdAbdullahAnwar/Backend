const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const IdentityCard = sequelize.define("identity_card", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cardNo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = IdentityCard;
