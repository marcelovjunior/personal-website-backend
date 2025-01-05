const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const urlRoutes = require('./routes/url.routes');
const statsRoutes = require('./routes/stats.routes');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/url-shortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB")).catch(console.error)

app.use('/api/url', urlRoutes);
app.use('/api/dashboard', statsRoutes);

module.exports = app;