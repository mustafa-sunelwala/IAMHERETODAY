var express = require('express');
var router = express.Router();

var db = require('../db');
var Location = require('../models/location');
var LoginLocation = require('../models/loginlocation');
var ObjectId = require('mongoose').Types.ObjectId; 

router.get('/locations',function(req,res,next){
    Location.find((err,locations) => {
        if(err){
        	res.send(err);
        }
        res.json(locations);
   })
});

router.post('/locations',function(req,res,next){
    LoginLocation.find({user_id: ObjectId(req.body.user_id) },function(err,locations){
        if(err){
        	res.send(err);
        }
        res.json(locations);
    }).populate('location_id');
});

module.exports = router;