var express = require('express');
var router = express.Router();

var db = require('../db');
var Location = require('../models/location');
var LoginLocation = require('../models/loginlocation');
var ObjectId = require('mongoose').Types.ObjectId; 

router.post('/add',function(req,res,next){
    LoginLocation.find({user_id: ObjectId(req.body.user_id), location_id: ObjectId(req.body.location_id)}, (err, locations)=>{
        if(locations.length){
            res.send({ status: '0', message: 'Location already LoggedIn by your name. Go to Dashboard directly.' });
        }else{
            var data = new LoginLocation(req.body);
            data.save((err, result) => {
              if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
              } else {
                res.send({ status: '1', message: 'Location added!' });
              }
            });
        }
    });
});

router.post('/find',function(req,res,next){
    LoginLocation.find({user_id: ObjectId(req.body.user_id) },function(err,locations){
        if(err){
        	res.send(err);
        }
        res.json(locations);
    }).populate('location_id');
});

router.post('/delete',function(req,res,next){
    LoginLocation.remove({_id: ObjectId(req.body.id) },function(err,data){
        if(err){
        	res.send(err);
        }
        LoginLocation.find({user_id: ObjectId(req.body.user_id) },function(err,locations){
            if(err){
                res.send(err);
            }
            res.json(locations);
        }).populate('location_id');
    });
});

module.exports = router;