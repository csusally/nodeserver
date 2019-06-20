var debug = require("debug")("myapp:server");
var mongoose = require('mongoose');
var userModel = require("../model/user")

function index(req, res, next) {
  debug(req.query.id);
  res.send('user:respond with a resource');
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

async function list(req, res, next) {
  debug(req.query.id);
  var result = await userModel.find(req.query);
  res.json(result);
};

module.exports = {
  index,
  add,
  deleteUsers,
  list,
}