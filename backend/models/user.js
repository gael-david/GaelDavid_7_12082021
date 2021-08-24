const { DataTypes } = require("sequelize");
const { sequelize } = require("../mySQL");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    default: "placeholder_username",
  },
});

User.sync();

module.exports = User;
