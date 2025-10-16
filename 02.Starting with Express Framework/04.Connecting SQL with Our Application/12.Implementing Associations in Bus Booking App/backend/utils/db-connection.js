const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', 'Abd@2109', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established");
  } catch (error) {
    console.error("Unable to connect to DB: ", error);
  }
})();

module.exports = sequelize;
