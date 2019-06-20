var debug = require("debug")("myapp:server");

function index(req, res, next) {
  res.render('index', { title: 'Express' });
}

function login(req, res, next) {
  res.render("login", { title: "用户登录" });
}

function doLogin (req, res) {
  debug(req.session)
  var user = {
    username: 'admin',
    password: 'admin'
  }
  if (req.body.username === user.username && req.body.password === user.password) {
    return res.redirect('/home');
  }
    res.redirect('/login');
};

function logout(req, res) {
  res.redirect('/');
};

function home(req, res) {
  var user = {
    username: 'admin',
    password: 'admin'
  }
  res.render('home', { title: 'Home', user: user });
};

module.exports = {
  index,
  login,
  doLogin,
  logout,
  home
};