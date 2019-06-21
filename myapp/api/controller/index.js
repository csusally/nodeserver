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
    req.session.user = user;
    return res.redirect('/home');
  }
  req.session.error = '用户名或密码不正确';
  res.redirect('/login');
};

function logout(req, res) {
  req.session.user = null;
  res.redirect('/');
};

function home(req, res) {
  // var user = {
  //   username: 'admin',
  //   password: 'admin'
  // }
  // res.render('home', { title: 'Home', user: user });
  res.render("home", { title: "Home" });
};

module.exports = {
  index,
  login,
  doLogin,
  logout,
  home
};