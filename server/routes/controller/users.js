var express = require('express');
var router = express.Router();

var db = require('../db');
var User = require('../models/user');
var LoginLocation = require('../models/loginlocation');
var ObjectId = require('mongoose').Types.ObjectId; 

router.get('/users',function(req,res,next){
  User.find((err,users) => {
        if(err){
        	res.send(err);
        }
        res.json(users);
   })
});

router.get('/users/:id',function(req,res,next){
  User.findOne({ _id: ObjectId(req.params.id) }, (err,user) => {
        if(err){
        	res.send(err);
        }
        res.json(user);
   })
});

router.post('/addlocation',function(req,res,next){
    var data = new LoginLocation(req.body);
    data.save((err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send({ message: 'Location added!' });
      }
    });
});


module.exports = router;