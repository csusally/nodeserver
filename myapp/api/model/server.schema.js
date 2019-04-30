var mongoose = require("mongoose");

var schema = {
  UserSchema: new mongoose.Schema({
    uid: Number,
    username: String,
    createTime: Date,
    lastLogin: Date
  }),
  BlogSchema: new mongoose.Schema({
    title: String,
    categary: String,
    createTime: Date
  })
};

module.exports = schema;