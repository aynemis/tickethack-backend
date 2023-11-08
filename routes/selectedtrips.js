var express = require('express');
var router = express.Router();

const Selectedtrip = require ('../models/selectedtrips');
const Trip =require ('../models/trips');

//POST selected trip in database
router.post('/', function(req, res) {
  Trip.findById(req.body.trip)
  .then(trip => {
      const newSelectedtrip =  new Selectedtrip({
        trip: trip._id,
        isPaid: false,
      })
      newSelectedtrip.save()
      .then(() => {
        res.json({result: true, message: "Ajouté au panier"})
      })

  })  
});

//GET all selected trips
router.get('/cart', function (req,res){
    Selectedtrip.find({isPaid:false})
    .populate('trip')
    .then(data => {
        res.json({trips : data})
    })
})

//UPDATE trips to paid
router.put('/bookings', function (req,res){
Selectedtrip.updateMany(
    {},
    {isPaid: true},
    )
    .then(() => res.json({result:true, message:"Payé !"}))
})

module.exports = router;
