function authentication(req, res, next) {
  if (!req.session.user) {
    req.session.error = '请先登陆';
    return res.redirect('/login');
  }
  next();
}
function notAuthentication(req, res, next) {
  if (req.session.user) {
    req.session.error = '已登陆';
    return res.redirect('/');
  }
  next();
}

module.exports = {
  authentication,
  notAuthentication
};