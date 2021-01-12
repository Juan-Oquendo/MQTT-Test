const redis = require('redis');

const { redis_options, redisAUTH } = require('./connection');


const client = redis.createClient({ redis_options });


client.AUTH(redisAUTH, _ => {
    console.log('Redis connected');
});

client.on("error", error => {
    console.error(error);
});


module.exports = client;