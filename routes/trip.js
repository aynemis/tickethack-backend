var express = require('express');
var router = express.Router();

const Trip = require ('../models/trips');

//GET all trips by departure and arrival
router.get('/', function(req, res, next) {
  Trip.find({departure: req.body.departure , arrival: req.body.arrival, date: req.body.date})
  .then(data => { res.json({trips: data})})
});

module.exports = router;
