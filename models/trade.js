const mongoose = require('mongoose');

// Trade model
const testSchema = new mongoose.Schema({
    summary: String,
    screenshot: String,
    timeStamp: Date,
    title: String,
    reasonToSell: String,
    reasonToEnter: String,
    priceTargetOne: Number,
    priceTargetTwo: Number,
    enter: String,
    exit: String,
});

module.exports = mongoose.model('Trade', testSchema);