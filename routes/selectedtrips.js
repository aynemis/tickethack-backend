var express = require('express');
var router = express.Router();

const Selectedtrip = require ('../models/selectedtrips');

//POST selected trip in database
router.post('/', function(req, res) {
  Selectedtrip
});

module.exports = router;
