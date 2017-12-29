const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.use('/users', require('./controller/users'))
router.use('/locations', require('./controller/locations'))
router.use('/loginlocations', require('./controller/loginlocations'))

module.exports = router;