var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://demouser:demouser@ds135912.mlab.com:35912/cvexample',['locations'])

/*Get all users*/
/*Get Single user*/
/*Book Location Post*/
router.get('/locations',function(req,res,next){
    db.locations.find(function(err,locations){
        if(err){
        	res.send(err);
        }
        res.json(locations);
   })
});

module.exports = router;