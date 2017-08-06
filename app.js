const config = {
	redis: {
		redis_host: '127.0.0.1',
		redis_port: 6379,
		redis_pass: '',
		redis_db: 0
	}
};

/* ----------------------------------------- */

// Get dependencies
let redis = require('redis');

// Get and check session
let sessionid = false;
let regex = /^http\:\/\/127.0.0.1:32400\/video\/:\/transcode\/session\/(.*)\/progress$/;
for (idx in process.argv) {
	if (regex.test(process.argv[idx])) {
		sessionid = process.argv[idx].match(regex)[1];
		break;
	}
}
if (sessionid === false) {
	console.error('Failed to find session id');
	process.exit(1);
}
console.log('Session found: ' + sessionid);

// Create Redis instance
let redisClient = redis.createClient({
	host:     config.redis.redis_host,
	port:     config.redis.redis_port,
	password: config.redis.redis_pass,
	db:       config.redis.redis_db
});

// On Redis error
redisClient.on('error', (err) => {
	if (err.errno === 'ECONNREFUSED') {
		console.error('Failed to connect to REDIS, please check your configuration');
	}
	else {
		console.error(err.errno);
	}
	process.exit(1);
});

redisClient.set(sessionid, JSON.stringify(process.argv));