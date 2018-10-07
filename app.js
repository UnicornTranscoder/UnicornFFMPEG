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
	body: JSON.stringify({
		arg,
		env
	})
}).catch((err) => {
	console.error(err);
});