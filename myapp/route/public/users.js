var express = require('express');
var router = express.Router();
var debug = require("debug")("myapp:server");

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug(req.query.id);
  res.send('respond with a resource');
});
router.get('/list', function (req, res, next) {
  debug(req.query.id);
  res.send('respond with a user list');
});
module.exports = router;
