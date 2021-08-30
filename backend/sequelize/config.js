require("dotenv").config();
const { Sequelize } = require("sequelize");
const makeAssociations = require("./associations.js");

const DB = process.env.SQL_DB;
const user = process.env.SQL_LOGIN;
const password = process.env.SQL_PASSWORD;

const sequelize = new Sequelize(DB, user, password, {
  host: "localhost",
  dialect: "mysql",
});

const modelDefiners = [
  require("../models/user"),
  require("../models/post"),
  require("../models/comment"),
  require("../models/like"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
makeAssociations(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
