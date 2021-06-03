const Sequelize = require("sequelize");

const connection = require("../config/database");

const Project = connection.define("tbl_products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  reference: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  discount: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  img_name1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_key1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_url1: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_name2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_key2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_url2: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_name3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_key3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_url3: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Project;
