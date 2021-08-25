const { DataTypes } = require("sequelize");
const { sequelize } = require("../mySQL");
const Post = require("./Post");

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
    default: "John Doe",
  },
});

User.belongsTo(Post); // A BelongsTo B

User.sync();

module.exports = User;
