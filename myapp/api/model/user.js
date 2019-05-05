var mongoose = require("mongoose");
var User = mongoose.model("User");

function create(obj) {
  return User.create(obj)
}

function insertMany(objs) {
  return User.insertMany(objs);
}

function deleteUsers(obj) {
  return User.deleteMany(obj);
}

function update(params) {
  
}

function find(params) {
  var page = parseInt(params.page);
  var pagesize = parseInt(params.pagesize);
  return User.find()
    .skip((page-1)*pagesize)
    .limit(pagesize)
    .exec();
             
}



module.exports = {
  create,
  insertMany,
  deleteUsers,
  find
};