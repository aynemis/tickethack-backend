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

module.exports = router;
