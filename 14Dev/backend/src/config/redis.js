const { createClient }  = require('redis');

// const redisClient = createClient({
//     username: 'default',
//     password: process.env.REDIS_PASS,
//     socket: {
//         host: 'redis-14389.crce262.us-east-1-1.ec2.cloud.redislabs.com',
//         port: 14389
//     }
// });

// import { createClient } from 'redis';

const redisClient = createClient({
    username: 'default',
    password: 'GY22fkevFcaEMoHEijmXGKW8OHN69SAU',
    socket: {
        host: 'redis-14389.crce262.us-east-1-1.ec2.cloud.redislabs.com',
        port: 14389
    }
});

module.exports = redisClient;

