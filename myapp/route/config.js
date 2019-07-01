"use strict";
const path = require("path");
const url = require("url");
const config = require("../config/config");

/**
 * reqUrl is the current request url
 * this function will help load the controller acconding to the url
 * **/
function getCtrl(reqUrl) {
  var ctrlName = url.parse(reqUrl).pathname;
  return require(path.join(config.root, config.ctrlPath, ctrlName));
}

module.exports = function(app) {
  //package the app.use
  var depatch = function(url) {
    app.use(function (req, res, next) {
      res.locals.user = req.session.user;
      var err = req.session.error;
      delete req.session.error;
      res.locals.message = '';
      if (err) res.locals.message = err ;
      next();
    });
    app.use(url, getCtrl(url));
  };
  
  depatch("/");
  depatch("/users");
  depatch("/blog");
  depatch("/wx/public");
};
