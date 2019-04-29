var debug = require("debug")("myapp:server");
function list(req, res, next) {
  debug(req.query.id);
  res.send('respond with a user list');
};
module.exports = {
  list
}