var express = require('express');
var router = express.Router();
var debug = require("debug")("myapp:server");
var controller = require('../../api/controller/user')

/* GET users listing. */
router.get('/', controller.index);
router.get('/list', controller.list);
router.get("/add", controller.add);
router.get("/delete", controller.deleteUsers);

module.exports = router;
