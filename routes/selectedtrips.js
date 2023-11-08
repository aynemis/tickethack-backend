var express = require('express');
var router = express.Router();

const Selectedtrip = require ('../models/selectedtrips');
const Trip = require ('../models/trips')

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


router.delete('/', (req, res) => {
  Selectedtrip.deleteOne({_id:req.body.id}).then(deleteDoc => {
    if(deleteDoc.deletedCount > 0){
     Selectedtrip.find().then(data => {
        res.json({data})
      })
    }
  })
});

module.exports = router;
