var { users_schema } = require("./model/User");
var { user_profile } = require("./model/UserProfile");

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getArraySum(a) {
  var total = 0;
  for (var i in a) {
    total += a[i];
  }
  return total;
}

users_profile.findAll().then(function (result) {
  var get_age = [];
  for (var i = 0; i < result.length; i++) {
    get_age.push(getAge(result[i].dob));
  }
  console.log("average age: " + getArraySum(get_age) / result.length);
});


