const express = require('express');
const router = express.Router();

const weather = require('../controllers/weather');

router.route('/')
  .get((req,res,next)=> {
    res.send('index.html')
  })


module.exports = router;
