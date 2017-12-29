var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String
});

var User = mongoose.model( "users", userSchema);

module.exports = User;