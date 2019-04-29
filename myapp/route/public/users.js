var express = require('express');
var router = express.Router();
var debug = require("debug")("myapp:server");
var controller = require('../../api/controller/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug(req.query.id);
  res.send('respond with a resource');
});
router.get('/list', controller.list);
module.exports = router;
