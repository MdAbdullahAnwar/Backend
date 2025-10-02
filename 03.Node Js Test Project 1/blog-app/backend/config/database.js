const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blogdb", "root", "Abd@2109", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
