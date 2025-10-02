const sequelize = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Blog = require("./Blog")(sequelize, DataTypes);
db.Comment = require("./Comment")(sequelize, DataTypes);

db.Blog.hasMany(db.Comment, { onDelete: "CASCADE", as: "Comments" });
db.Comment.belongsTo(db.Blog);

module.exports = db;
