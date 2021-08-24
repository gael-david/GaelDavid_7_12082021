const { DataTypes } = require("sequelize");
const { sequelize } = require("../mySQL");

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

Post.sync();

module.exports = Post;
