/**
 * @abstract 项目设置参数
 * @author wj
 */

"use strict";
var path = require("path");

var config = {
  // root: __dirname,
  root:path.resolve('./'), //项目根目录（项目启动文件所在目录路径）
  ctrlPath: "route/public",
  DB_URL: "mongodb://localhost:27017/myproject",
  wxPath: "route/wx"
};

module.exports = config;