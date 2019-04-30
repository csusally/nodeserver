var express = require("express");
var router = express.Router();
var debug = require("debug")("myapp:server");
var controller = require("../../api/controller/blog");

/* GET users listing. */
router.get("/", controller.index);
router.get("/list", controller.list);

module.exports = router;
