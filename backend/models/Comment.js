const { DataTypes } = require("sequelize");
const { sequelize } = require("../mySQL");

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: sequelize.UUIDV4,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Comment.sync();

module.exports = Comment;
