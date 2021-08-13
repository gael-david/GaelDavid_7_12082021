const { Sequelize } = require("sequelize");
require("dotenv").config();
const DB = process.env.SQL_DB;
const user = process.env.SQL_LOGIN;
const password = process.env.SQL_PASSWORD;

const sequelize = new Sequelize(DB, user, password, {
  host: "localhost",
  dialect: "mysql",
});

exports.sequelize = sequelize;

exports.SQLConnection = async function SQLConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
