const { Sequelize } = require("sequelize");
const {sequelize} = require('../config/db')
  
  var users_profile = sequelize.define(
    "usersProfile",
      {
      userId: {
        type: Sequelize.STRING,
        ref: "users",
      },
      dob: {
        type: Sequelize.STRING,
        required: true,
      },
      mobile: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      freezeTableName: true, 
    }
  );

  exports.users_profile = users_profile;