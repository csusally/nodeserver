/**
 * @abstract mongoDB数据库设置连接
 * @author wj
 */

var mongoose = require('mongoose');
var dbURL = require("./config.js").DB_URL;

module.exports = function () {
  mongoose.connect(dbURL, { useNewUrlParser: true });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("we're connected!");
  });
  require("../api/model/user.server.model");
  return db;
}