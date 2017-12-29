var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var locationSchema = new Schema({
  name: String
});

var Location = mongoose.model('locations', locationSchema);

module.exports = Location;