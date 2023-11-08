const mongoose = require('mongoose');

const selectedtripSchema = mongoose.Schema({
    journey: String,
    time : String,
    price: Number,
    isPaid: Boolean,
});

const Selectedtrip = mongoose.model('selectedtrips', selectedtripSchema);

module.exports = Selectedtrip;