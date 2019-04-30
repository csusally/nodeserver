var mongoose = require("mongoose");
var User = mongoose.model("User");

function create(obj) {
  return User.create(obj)
}

function insertMany(objs) {
  User.insertMany(objs, function(err, users) {
    if (err) return handleError(err);
    //created
    return users;
  });
}

function deleteUsers(obj) {
  return User.deleteMany(obj);
}

function update(params) {
  
}

function find(params) {
  
}



module.exports = {
  create,
  insertMany,
  deleteUsers
};