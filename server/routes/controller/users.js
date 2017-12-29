var express = require('express');
var router = express.Router();

var db = require('../db');
var User = require('../models/user');
var LoginLocation = require('../models/loginlocation');
var ObjectId = require('mongoose').Types.ObjectId; 

router.get('/',function(req,res,next){
  User.find((err,users) => {
        if(err){
        	res.send(err);
        }
        res.json(users);
   })
});

router.get('/:id',function(req,res,next){
  User.findOne({ _id: ObjectId(req.params.id) }, (err,user) => {
        if(err){
        	res.send(err);
        }
        res.json(user);
   })
});


module.exports = router;