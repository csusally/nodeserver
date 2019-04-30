var debug = require("debug")("myapp:server");
var mongoose = require('mongoose');
var User = mongoose.model('User');
var userModel = require("../model/user")

function index(req, res, next) {
  debug(req.query.id);
  res.send('respond with a resource');
};

async function add(req, res, next) {
  var obj = {
    uid: req.query.id,
    username: "wj"
  };
  var result = await userModel.create(obj);
  res.status(200).json(result);
}

async function deleteUsers(req, res, next) {
  var obj = {
    uid: req.query.id,
  };
  var result = await userModel.deleteUsers(obj);
  res.json(result);
}

function list(req, res, next) {
  debug(req.query.id);
  User.find({}, function (err, docs) {
    if (err) {
      res.end('Error');
      return next(); 
    }
    res.json(docs); 
  })
};

module.exports = {
  index,
  add,
  deleteUsers,
  list,
}