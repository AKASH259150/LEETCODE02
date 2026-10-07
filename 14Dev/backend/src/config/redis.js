const { createClient } = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-18065.c273.us-east-1-2.ec2.cloud.redislabs.com',
        port: 18065
    }
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

module.exports = redisClient;

