var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('setting', { title: '設定' });
});

module.exports = router;
