var mongoose = require("mongoose");
var async = require("async");
var passwordHash = require("password-hash");
const { Sequelize } = require("sequelize");
const { sequelize } = require("./config/db");
var { users_schema } = require("./model/User");
var { user_profile } = require("./model/UserProfile");

var user_records = [];
var user_profile = [];

for (var i = 0; i < 5; i++) {
  user_records.push({
    username: "Ankit3323" + Math.random(1000),
    lastname: "Srivastava",
    email: "ankit@gmail.com",
    password: passwordHash.generate("type: String, required: true"),
  });
  user_profile.push({
    dob: "1996-12-12",
    mobile: "7007294451",
    date: new Date(),
  });
}

async.each(user_records, function (row, callback) {
  users_schema.sync().then(function () {
    return users_schema.create({
      username: row.username,
      lastname: row.lastname,
      email: row.email,
      password: passwordHash.generate("hjbhjbhjbhb"),
    });
  });
});

async.each(user_profile, function (row, callback) {
  users_profile.sync().then(function () {
    return users_profile.create({
      dob: row.dob,
      mobile: row.mobile,
    });
  });
});
users_schema.findOne().then(function (user) {
  console.log(user.get('lastname'));
});