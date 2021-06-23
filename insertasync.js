var async = require("async");
var { users_schema } = require("./model/User");
var { user_profile } = require("./model/UserProfile");
var passwordHash = require("password-hash");

var user_records = [];
for (var i = 0; i < 5; i++) {
  user_records.push({
    username: "Ankit Numberankit " + Math.random(1000),
    lastname: "srivastava",
    email: "ankit@gmial.com",
    password: passwordHash.generate("tnerjvngvnrtgntr"),
    date: new Date() + "",
  });
}

var profile_records = [];
for (var i = 0; i < 5; i++) {
  profile_records.push({
    dob: "Ankit",
    age: Math.random(100),
    mobile: "Srivastava",
    date: new Date() + "",
  });
}

async.eachLimit(user_records, 5, function (row, callback) {
  users_schema.sync().then(function () {
    return users_schema.create({
      _id: row._id,
      username: row.username,
      lastname: row.lastname,
      email: row.email,
      password: row.password,
    });
  });
});

async.eachLimit(profile_records, 5, function (row, callback) {
  users_profile.sync().then(function () {
    return users_profile.create({
      userId: row.userId,
      dob: row.dob,
      age: row.age,
      mobile: row.mobile,
    });
  });
});
