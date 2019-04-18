## UnicornFFMPEG

This software is a part of __UnicornTranscoder__ project, it's a binary to replace the official __Plex Transcoder__, the binary will send parameters to __UnicornLoadBalancer__.

## UnicornTranscoder Project

* [UnicornTranscoder](https://github.com/UnicornTranscoder/UnicornTranscoder)
* [UnicornLoadBalancer](https://github.com/UnicornTranscoder/UnicornLoadBalancer)
* [UnicornFFMPEG](https://github.com/UnicornTranscoder/UnicornFFMPEG)

## Dependencies
* Plex Media Server

## Installation
* Clone this repository
* Run `npm i`
* Set your load-balancer url in `config.js` (Note you can also set this as an environment variable called `LB_URL`, otherwise it will default to: `http://127.0.0.1:3001/'`, a slash is required at the end of the url, like the default value)
* Build the binary with `npm start`
* Replace the Plex binary called `Plex Transcoder` by the generated binary store in `bin`, choose the correct version (depending on your OS)
