var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('graph', { title: 'グラフ' });
});

module.exports = router;
