const Sequelize = require("sequelize");

const connection = new Sequelize(
  process.env.HEROKU_DATA_NAME,
  process.env.HEROKU_USER,
  process.env.HEROKU_PASSWORD,
  {
    host: process.env.HEROKU_HOST,
    dialect: "mysql",
  }
);

module.exports = connection;
