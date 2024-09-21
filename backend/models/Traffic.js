const mongoose = require('mongoose');

const TrafficSchema = new mongoose.Schema({
    location: String,
    congestionLevel: Number,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Traffic', TrafficSchema);
