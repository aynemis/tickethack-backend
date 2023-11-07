var express = require('express');
var router = express.Router();

const Trip = require ('../models/trips');

//GET all trips by departure and arrival
router.get('/', function(req, res, next) {
  Trip.find({departure: { $regex: new RegExp(req.body.departure) } , arrival: { $regex: new RegExp(req.body.arrival) }, date: req.body.date})
  .then(data => { 
    if (!checkBody(req.body, ["departure", "arrival" , "date"])){
      res.json({result : false, error : "Missing or empty fields"});
  } else if (data === null){
      res.json({result : false, error : "Trip not found"});
  } else {
      res.json({result : true , trips : data});
  }
  })
});


module.exports = router;
