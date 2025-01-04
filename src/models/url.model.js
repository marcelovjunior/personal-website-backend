const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true},
    shortUrl: { type: String, required: true, unique: true},
    clicks: { type: Number, default: 0},
    createdAt: { type: String, default: Date.now },
})

module.exports = mongoose.model('Url', urlSchema)