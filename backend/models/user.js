const { DataTypes } = require("sequelize");
const { sequelize } = require("../mySQL");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();

module.exports = User;
