const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Spaceships = sequelize.define("spaceships", {
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER,
});

module.exports = Spaceships;
