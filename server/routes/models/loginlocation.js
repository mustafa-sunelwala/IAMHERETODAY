var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var loginLocationSchema = new Schema({
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
  location_id: {type: mongoose.Schema.Types.ObjectId, ref: 'locations'}
});

var Loginlocation = mongoose.model('loginlocations', loginLocationSchema);

module.exports = Loginlocation;