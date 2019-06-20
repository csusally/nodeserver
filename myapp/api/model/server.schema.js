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
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs: Number
    }
  })
};

module.exports = schema;