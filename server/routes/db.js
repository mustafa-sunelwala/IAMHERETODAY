var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://demouser1:demouser1@ds135912.mlab.com:35912/cvexample');

module.exports = db;