var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://demouser1:demouser1@ds135912.mlab.com:35912/cvexample',['users'])

/*Get all users*/
/*Get Single user*/
/*Book Location Post*/
router.get('/users',function(req,res,next){
   db.users.find(function(err,users){
        if(err){
        	res.send(err);
        }
        res.json(users);
   })
});

router.post('/addlocation',function(req,res,next){
    var data = req.body;
    db.collection('loginlocations').insert(data, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send({ message: 'Location added!' });
      }
    });
});

router.get('/users120',function(req,res,next){
  db.users.find(function(err,users){
       if(err){
         res.send(err);
       }
       res.json(users);
  })
});

module.exports = router;