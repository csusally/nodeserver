var debug = require("debug")("myapp:server");
var mongoose = require('mongoose');
var User = mongoose.model('User');

function index(req, res, next) {
  debug(req.query.id);
  res.send('respond with a resource');
};

function list(req, res, next) {
  debug(req.query.id);
  var user = new User({
    uid: req.query.id,
    username: "nuanfeng"
  });

  user.save(function (err) {
    if (err) {
       res.end('Error');
       return next();
    }
    User.find({}, function (err, docs) {
      if (err) {
        res.end('Error');
        return next(); 
      }
      res.json(docs); 
    })
    
  })
};

module.exports = {
  index,
  list
}