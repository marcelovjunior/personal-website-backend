const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const Url = require('../models/url.model');
const redisClient = require('../utils/redis');

router.post('/shorten', async (req, res) => {
    const {originalUrl} = req.body;
    if (!originalUrl){
        return res.status(404).json({message: "No originalUrl param in body", shortUrl: ""});
    }

    // try {
    //     new URL(originalUrl);
    // } catch (_) {
    //     return res.status(400).json({message: "Invalid URL format", shortUrl: ""});
    // }
    //need to make sure url is valid and has http/https in front of it
    
    const shortUrl = shortid.generate();
    const newUrl = new Url({ originalUrl, shortUrl});
    await newUrl.save();
    // await redisClient.set(originalUrl, JSON.stringify(newUrl));
    return res.json({message: "Success!", shortUrl: `${process.env.api_host}/api/url/${shortUrl}`});
})

router.get('/:shortUrl', async(req, res) => {
    const url = await Url.findOne({shortUrl: req.params.shortUrl});
    if (!url){
        return res.status(404).json({message: "Url not found"});
    }
    return res.redirect(url.originalUrl);
})

module.exports = router;