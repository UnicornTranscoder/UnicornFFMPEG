## UnicornFFMPEG

This software is a part of __UnicornTranscoder__ project, it's a binary to replace the official __Plex Transcoder__, the binary will save parameters in your Redis database, the data will be used by __UnicornTranscoder__.

## UnicornTranscoder Project

* [UnicornTranscoder](https://github.com/UnicornTranscoder/UnicornTranscoder)
* [UnicornLoadBalancer](https://github.com/UnicornTranscoder/UnicornLoadBalancer)
* [UnicornFFMPEG](https://github.com/UnicornTranscoder/UnicornFFMPEG)

## Dependencies
* Redis Server  with [Keyspace Notifications](https://redis.io/topics/notifications) enabled
* Plex Media Server

## Installation
* Clone this repository
* Run `npm i`
* Set your Redis configuration in `config.js`, and change Plex paths if it's necessary
  * __Note:__ The redis configuration should be the same as the one of UnicornTranscoder
* Build the binary with `npm start`
* Replace the Plex binary called `Plex Transcoder` by the generated binary store in `bin`, choose the correct version (depend of your OS)
