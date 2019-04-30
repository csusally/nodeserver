var express = require('express');
var router = express.Router();
var debug = require("debug")("myapp:server");
var controller = require("../../api/controller/user");

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
