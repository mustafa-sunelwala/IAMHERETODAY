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

router.post('/add',function(req,res,next){
  var user = new User(req.body);
  user.save((err,user) => {
        if(err){
        	res.json({
            status: '0',
            error: err
          });
        }
        res.json({
          status: '1',
          message: 'User Added Successfully'
        });
   })
});

router.post('/delete',function(req,res,next){
  User.remove({_id: ObjectId(req.body.id) },function(err,data){
      if(err){
        res.json({
          status: '0',
          error: err
        });
      }

      res.json({
        status: '1',
        message: 'User Deleted Successfully'
      });
  });
});


module.exports = router;