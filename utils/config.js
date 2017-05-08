/**
 * Created by Maxime Baconnais on 07/05/2017.
 */
 
let getenv = require('getenv');

module.exports.redis = getenv.multi({
    redis_host: ['REDIS_HOST', '127.0.0.1'],
    redis_port: ['REDIS_PORT', '6379'],
    redis_pass: ['REDIS_PASSWORD', ''],
    redis_db:   ['REDIS_DB', 0, 'int'],
});