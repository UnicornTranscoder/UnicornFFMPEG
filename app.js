// Import fetch
const fetch = require('node-fetch');

// Import our config
const config = require('./config');

// Get env
const env = process.env;

// Get args
const arg = process.argv.slice(2);

// Call the load-balancer
fetch(`${config.URL}api/ffmpeg`, {
	method: 'POST',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		arg,
		env
	})
}).catch((err) => {
	console.error(err);
});

/**
 * We need to keep alive the process otherwise
 * plex send a bad mpd file
**/
setInterval(() => {}, 3600000);
