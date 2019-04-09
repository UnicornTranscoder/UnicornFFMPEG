// Import fetch
const fetch = require('node-fetch');

// Import our config
const config = require('./config');

// Get env
const env = process.env;

// Get args
const arg = process.argv.slice(2);

let id = false;

const checkStatus = () => {
	if (!id)
		return;
	fetch(`${config.URL}api/ffmpeg/${id}`).then(res => (res.json())).then((data) => {
		if (typeof(data.status) !== 'undefined' && data.status !== false) {
			process.exit(parseInt(data.status));
		}
	}).catch((err) => {
		console.error(err);
	});
}

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
}).then(res => (res.json())).then((data) => {
	id = data.id;
	setInterval(() => {checkStatus(); }, 10000);
}).catch((err) => {
	console.error(err);
});
