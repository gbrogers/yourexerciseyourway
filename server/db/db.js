const Sequelize = require("sequelize");
const connection = require("./sequelize.js"); //connection is the instance of sequelize created using Postgres info

//Import Individual Models Here
const User = require("./models/user.js");
const CompletedExercise = require("./models/completedExercise.js");

//Add Table Associations Here

// one-to-many
User.hasMany(CompletedExercise, {
  foreignKey: "user_id",
  targetKey: "id",
});

// attempt connection of DB to Sequelize
// console.log("conection" + { connection });
module.exports = {
  connect: () => {
    connection
      .sync({
        force: true, //this find differences and alters as needed vs force dropping tables
        //force: true, //to drop table and re-add - don't use once you have data - obviously
        // logging: console.log
      })
      .then(() => {
        // Birth_control.bulkCreate([
        //   {
        //     bc_type: "IUD",
        //     bc_name: "Mirena",
        //     frequency: "q7y",
        //   },
        console.log("Congrats! Connection to database was successful.");
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
