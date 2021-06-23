const { Sequelize } = require("sequelize");
const {sequelize} = require('../config/db')

var users_schema = sequelize.define(
    "users",
    {
      username: {
        type: Sequelize.STRING,
        field: "username_name", 
      },
      lastname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        field: "user_email",
      },
      password:
    {
      type: Sequelize.STRING
    }
    },
    {
      freezeTableName: true, 
    }
  );
  
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

  exports.users_schema = users_schema;
  exports.users_profile = users_profile;