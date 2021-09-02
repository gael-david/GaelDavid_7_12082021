const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("comment", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
