module.exports = {
	redis: {
		redis_host: '127.0.0.1',
		redis_port: 6379,
		redis_pass: '',
		redis_db: 0
	},
	plex: {
		plex_url: 'http://127.0.0.1:32400/',
		plex_sessions: '/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Cache/Transcode/Sessions/',
		plex_usr: '/usr/lib/plexmediaserver/',
		plex_mount: '/mnt/acd/'
	}
};