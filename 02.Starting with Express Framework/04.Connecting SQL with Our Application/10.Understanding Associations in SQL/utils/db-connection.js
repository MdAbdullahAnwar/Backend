const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("onetoone", "root", "Abd@2109", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the Database has been Established");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
