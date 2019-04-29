"use strict";
const path = require("path");
const url = require("url");
const config = require("../config");

/**
 * reqUrl is the current request url
 * this function will help load the controller acconding to the url
 * **/
function getCtrl(reqUrl) {
  var ctrlName = url.parse(reqUrl).pathname;
  return require(path.join(config.root, config.ctrlPath, ctrlName));
}

module.exports = function(app) {
  //pakage the app.use
  var depatch = function(url) {
    app.use(url, getCtrl(url));
  };

  depatch("/");
  depatch("/users");
};
