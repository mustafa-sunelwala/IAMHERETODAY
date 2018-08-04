var express = require('express');
var router = express.Router();

var db = require('../db');
var Location = require('../models/location');
var LoginLocation = require('../models/loginlocation');
var ObjectId = require('mongoose').Types.ObjectId; 
var cache = require('memory-cache');

let memCache = new cache.Cache();
let cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = memCache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

router.get('/',cacheMiddleware(30),function(req,res,next){
  console.log('called!!');  
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


router.get('/getall/:page?',function(req,res){
  var perPage = 5
  var page = req.params.page || 1

  Location
      .find({})
      .skip((perPage * page) - perPage)
      .limit(perPage)
      .exec(function(err, products) {
        Location.count().exec(function(err, count) {
              if (err) return next(err)
              res.json( {
                  products: products,
                  current: page,
                  totalItems: count,
                  pages: Math.ceil(count / perPage)
              })
          })
      })
});
module.exports = router;