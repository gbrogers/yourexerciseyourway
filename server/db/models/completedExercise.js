const Sequelize = require("sequelize");
const connection = require("../sequelize.js");
const User = require("./user.js");

const CompletedExercise = connection.define(
  "CompletedExercise",
  {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    exercise_type: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    note: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = CompletedExercise;