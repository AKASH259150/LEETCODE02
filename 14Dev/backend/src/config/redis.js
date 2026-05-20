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

// console.log(process.env.REDIS_PASS)

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-15949.c11.us-east-1-2.ec2.cloud.redislabs.com',
        port: 15949
    }
});

module.exports = redisClient;

