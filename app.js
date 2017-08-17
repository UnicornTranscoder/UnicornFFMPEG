// Get dependencies
const redis = require('redis');

// Get configuration
const config = require('./config');

// Args
const args = process.argv.slice(2);

// Get and check session
let sessionid = false;
let regex = /^http\:\/\/127.0.0.1:32400\/video\/:\/transcode\/session\/(.*)\/progress$/;
for (idx in args) {
	if (regex.test(args[idx])) {
		sessionid = args[idx].match(regex)[1];
		break;
	}
}
if (sessionid === false) {
	console.error('Failed to find session id');
	process.exit(1);
}
console.log('Session found: ' + sessionid);

// Parse arguments
const parsedargs = args.map((o) => {
	return o.replace(config.plex.plex_url, '{URL}/')
			.replace(config.plex.plex_sessions, '{SRTSRV}/')
			.replace(config.plex.plex_usr, '{USRPLEX}/')
			.replace(config.plex.plex_mount, '{PATH}/')
});

let segList = '{URL}/video/:/transcode/session/' + sessionid + '/seglist'

var forceSegList = false;
for (var i = 0; i < parsedargs.length; i++) {
	if (parsedargs[i] == '-segment_list')
		forceSegList = true;
	else if (forceSegList) {
		parsedargs[i] = segList;
		forceSegList = false;
	}
}

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

redisClient.set(sessionid, JSON.stringify(parsedargs));