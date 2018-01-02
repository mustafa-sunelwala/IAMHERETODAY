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

router.post('/add',function(req,res,next){
    var data = new Location(req.body);
    data.save((err, result) => {
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
    });
});

router.post('/delete',function(req,res,next){
  Location.remove({_id: ObjectId(req.body.id) },function(err,data){
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