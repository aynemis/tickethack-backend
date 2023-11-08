var express = require('express');
var router = express.Router();

const Selectedtrip = require ('../models/selectedtrips');

//POST selected trip in database
router.post('/', function(req, res) {
  const newSelectedtrip =  new Selectedtrip({
    trip: req.body.trip,
    isPaid: false,
  })
  newSelectedtrip.save()
  .then(() => {
    res.json({result: true, message: "Ajouté au panier"})
  })
});





// DELETE to delete trip from database
// router.delete('/', (req, res) => {
//   Selectedtrip.deleteOne
// });


router.delete('/', (req, res) => {
  Selectedtrip.deleteOne({
    journey: { $regex: new RegExp(req.body.journey, "i")},time: { $regex: new RegExp(req.body.time) } ,price: { $regex: new RegExp(req.body.price) },
  }).then(deleteDoc => {
    if(deleteDoc.deletedCount > 0){
      Trip.find().then(data => {
        res.json({Trip: data})
      })
    }
  })
  });


module.exports = router;
