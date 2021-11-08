const Sequelize = require("sequelize");
const connection = require("../sequelize.js");


const User = connection.define(
  "User",
  {
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

  },
  {
    connection,
    timestamps: false,
  }
);

module.exports = User;
