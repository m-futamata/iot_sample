var express = require('express');
var router = express.Router();

var msg = '';

router.post('/', function(req, res, next) {
  time = new Date();
  data1 = Math.random();
  data2 = Math.random();
  data3 = Math.random();
  res.json({
    time: time,
    data1: data1,
    data2: data2,
    data3: data3
  });
});

module.exports = router;
