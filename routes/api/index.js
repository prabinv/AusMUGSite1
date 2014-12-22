var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.end('API Version - 0.0.1');
});

router.get('/servertime', function(req, res) {
  res.json({ currentServerTime:  new Date() });
});

module.exports = router;
