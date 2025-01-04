const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    averageMillisecondsToStoreUrl: { type: Number, default: 0},
    averageMillisecondsToAccessUrl: { type: Number, default: 0},
    totalClicks: {type: Number, default: 0}
});

module.exports = mongoose.model('Stats', statsSchema)