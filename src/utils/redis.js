const redis = require('redis');

let redisClient;

(async () => {
    redisClient = redis.createClient({
        url: process.env.REDIS_URL || 'redis://localhost:6379'
    });

    redisClient.on("error", (error) => console.error(`Redis Error: ${error}`));
})();

module.exports = redisClient;