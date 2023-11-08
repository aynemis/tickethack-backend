var express = require('express');
var router = express.Router();

const Selectedtrip = require ('../models/selectedtrips');
const Trip = require ('../models/trips');


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

// DELETE to delete trip from database
router.delete('/', (req, res) => {
  Selectedtrip.deleteOne({_id:req.body.id}).then(deleteDoc => {
    if(deleteDoc.deletedCount > 0){
     Selectedtrip.find().then(data => {
        res.json({data})
      })
    }
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

//GET all bookings
router.get('/booking', function (req,res){
    Selectedtrip.find({isPaid: true})
    .populate('trip')
    .then(data => res.json({result : true, bookings: data}))
    })

module.exports = router;
