var express = require('express');
var router = express.Router();

var db = require('../db');
var Location = require('../models/location');
var LoginLocation = require('../models/loginlocation');
var ObjectId = require('mongoose').Types.ObjectId; 

router.get('/',function(req,res,next){
    Location.find((err,locations) => {
        if(err){
        	res.send(err);
        }
        res.json(locations);
   })
});

module.exports = router;