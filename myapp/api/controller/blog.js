var debug = require("debug")("myapp:server");
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');

function index(req, res, next) {
  debug(req.query.id);
  res.send('blog:respond with a blog resource');
};

function list(req, res, next) {
  console.log(req.query.title);
  var blog = new Blog({
    title: req.query.title,
    categary: "js"
  });

  blog.save(function(err) {
    if (err) {
      res.end("Error");
      return next();
    }
    Blog.find({}, function(err, docs) {
      if (err) {
        res.end("Error");
        return next();
      }
      res.json(docs);
    });
  });
};

module.exports = {
  index,
  list
}