var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require("serve-favicon");
var cookieParser = require('cookie-parser');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
var mongoose = require("mongoose");
var logger = require('morgan');

var dbSet = require('./config/mongoose.js');
var db = dbSet();

var route = require('./route/config')

var app = express();

//新建一个mongodb连接存储session
//根据env环境设置cookie的secure，secure：true表示只有https请求才可以设置cookie
var sess = {
  secret: "sally website",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db })
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(sess));

app.use(express.static(path.join(__dirname, 'public')));

//route setting
route(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
