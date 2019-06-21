var express = require('express');
var router = express.Router();
var debug = require("debug")("myapp:server");
var controller = require("../../api/controller/index");
var middleware = require("../middleware")

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

/* GET home page. */
router.get('/', controller.index);
router.all('/login', middleware.notAuthentication);
router.get('/login', controller.login);
router.post("/login", controller.doLogin);
router.get("/logout", middleware.authentication);
router.get("/logout", controller.logout);
router.get("/home", middleware.authentication);
router.get("/home", controller.home);


module.exports = router;

