const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("like", {
    like: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
