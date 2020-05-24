const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const springSchema = new Schema({
    name: {type: String, required: true },
    lat: Number,
    lng: Number,
    img: String,
    visited: Boolean,
    temp: Number,
    weather: String,
    activities: Array,
    info: String,
}, {timestamps: true});

const Spring = mongoose.model('Spring', springSchema);

module.exports = Spring; 