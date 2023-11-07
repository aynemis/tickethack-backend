var express = require('express');
var router = express.Router();
const { checkBody } = require('../modules/checkBody');
var moment = require('moment');

const Trip = require ('../models/trips');

//GET all trips by departure, arrival and date
router.get('/', function(req, res) {
  Trip.find({departure: { $regex: new RegExp(req.body.departure) } , arrival: { $regex: new RegExp(req.body.arrival) }, date: {$gte: moment(req.body.date).startOf('day'), $lte: moment(req.body.date).endOf('day')}})
  .then(data => { 
    console.log(`Data de la DB: ${data}`)
    // if (!checkBody(req.body, ["departure", "arrival" , "date"])){
    //   res.json({result : false, error : "Missing or empty fields"});
  // }  
    if (data.length>0){
      res.json({result : true , trips : data});
    } else {
    res.json({result : false, error : "Trip not found"});
  }
  })
});


module.exports = router;
