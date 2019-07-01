var express = require("express");
var router = express.Router();
var debug = require("debug")("myapp:server");
var rp = require("request-promise")
var access_token = require("../../../api/service/AccessToken");

const appid = 'wx86fcc94dba4b6550'
const secret = '4445da95c935bebfc5edb93add3931b9'

/* GET users listing. */
router.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

router.get("/token", async function (req, res, next) {
  let atn = new access_token({
    appid,
    secret
  });
  res.json(await atn.getCacheToken());
});

router.post("/materials", async function(req, res, next) {
  //获取公众号永久素材的列表
  const materialList = 'https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=';
  let atn = new access_token({
    appid,
    secret
  });
  var token = await atn.getCacheToken();
  var materials = await rp({
    url: materialList + token,
    method: "POST",
    body: req.body,
    json: true // Automatically stringifies the body to
  });
  res.json(materials);
});


module.exports = router;
