const { DataTypes } = require("sequelize");
const { sequelize } = require("../mySQL");
const User = require("./User");

const Post = sequelize.define("Post", {
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  post: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Post.hasOne(User);

Post.sync();

module.exports = Post;
