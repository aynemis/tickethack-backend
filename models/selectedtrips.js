const mongoose = require('mongoose');

const selectedtripSchema = mongoose.Schema({
    trip: {type:mongoose.Schema.Types.ObjectId, ref:'trips'},
    isPaid: Boolean,
});

const Selectedtrip = mongoose.model('selectedtrips', selectedtripSchema);

module.exports = Selectedtrip;