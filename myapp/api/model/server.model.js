var mongoose = require('mongoose');
var schema = require('./server.schema');

mongoose.model("User", schema.UserSchema);
mongoose.model("Blog", schema.BlogSchema);